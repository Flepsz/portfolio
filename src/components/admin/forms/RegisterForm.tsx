"use client";

import { createUserSchema } from "@/server/trpc/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { trpc } from "@/utils/trpc";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormLayout from "./FormLayout";

export default function RegisterForm() {
	const [submitting, setSubmitting] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof createUserSchema>>({
		resolver: zodResolver(createUserSchema),
		mode: "all",
		defaultValues: {
			email: "",
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
	const names = Object.keys(createUserSchema);
	console.log(names);

	return (
		<FormLayout
			config={registerConfig}
			OnSubmit={OnSubmit}
			form={form}
			submitting={submitting}
		/>
	);
}

const registerConfig = {
	id: "register-hook-form",
	title: "Register",
	description: "Create a user for access",
	fields: [
		{
			name: "email",
			label: "Email",
			placeholder: "Type your email",
			type: "email",
		},
		{
			name: "role",
			label: "Role",
			placeholder: "Type your role",
		},
		{
			name: "password",
			label: "Password",
			type: "password",
			placeholder: "Type your password",
		},
		{
			name: "passwordConfirm",
			label: "Confirm Password",
			type: "password",
			placeholder: "Type your role",
		},
	],
};
