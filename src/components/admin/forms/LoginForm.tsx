"use client";

import { loginUserSchema } from "@/server/trpc/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "@/utils/trpc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import styles from "./forms.module.scss";

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof loginUserSchema>>({
		resolver: zodResolver(loginUserSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { mutate: loginFn } = trpc.loginUser.useMutation({
		onSettled() {
			setSubmitting(false);
		},
		onMutate() {
			setSubmitting(true);
		},
		onError(error) {
			toast.error(error.message);
			setSubmitting(false);
			console.log("Error message:", error.message);
			form.reset({ password: "" });
		},
		onSuccess() {
			toast.success("Logged with successfully");
			router.push("/admin");
		},
	});

	function OnSubmit(values: z.infer<typeof loginUserSchema>) {
		loginFn(values);
	}

	return (
		<Card className={styles.card}>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>Enter to Admin Dashboard</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						id="login-hook-form"
						className="flex flex-col gap-4"
						onSubmit={form.handleSubmit(OnSubmit)}
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Your email..."
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Type your password..."
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				{!submitting ? (
					<Button variant="secondary" form="login-hook-form" type="submit">
						Login
					</Button>
				) : (
					<Button variant="secondary" disabled>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Please wait
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
