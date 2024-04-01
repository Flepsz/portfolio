"use client";

import { createUserSchema, loginUserSchema } from "@/server/trpc/schema";
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

import styles from "./forms.module.scss"

export default function RegisterForm() {
	const [submitting, setSubmitting] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof createUserSchema>>({
		resolver: zodResolver(createUserSchema),
		mode: "all",
		defaultValues: {
			email: "",
			photo: "",
			github: "",
			linkedin: "",
			role: "",
			password: "",
			passwordConfirm: "",
		},
	});

	const { mutate: registerFn } = trpc.registerUser.useMutation({
		onSettled() {
			setSubmitting(false);
		},
		onMutate() {
			setSubmitting(true);
		},
		onError(error) {
			setSubmitting(false);
			toast.error(error.message);
			console.log("Error message:", error.message);
			form.reset();
		},
		onSuccess() {
			toast.success("Registered with successfully");
			router.push("/admin/login");
		},
	});

	function OnSubmit(values: z.infer<typeof createUserSchema>) {
		registerFn(values);
	}

	return (
		<Card className={styles.card}>
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>Create a user for access</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form id="register-hook-form" className="flex flex-col gap-4" onSubmit={form.handleSubmit(OnSubmit)}>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Your email"
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
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<FormControl>
										<Input
											placeholder="Type your role."
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
											placeholder="Type your password."
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="passwordConfirm"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input
											placeholder="Confirm your password."
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
					<Button variant="secondary" form="register-hook-form" type="submit">
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
