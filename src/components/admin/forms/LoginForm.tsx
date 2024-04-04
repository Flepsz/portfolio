"use client";

import { loginUserSchema } from "@/server/trpc/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "@/utils/trpc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormLayout from "./FormLayout";

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
		<FormLayout
			config={loginConfig}
			OnSubmit={OnSubmit}
			form={form}
			submitting={submitting}
		/>
	);
}

const loginConfig = {
	id: "login-hook-form",
	title: "Login",
	description: "Enter to Admin Dashboard",
	fields: [
		{
			name: "email",
			label: "Email",
			placeholder: "Type your email",
			type: "email",
		},
		{
			name: "password",
			label: "Password",
			placeholder: "Type your password",
			type: "password",
		},
	],
};
