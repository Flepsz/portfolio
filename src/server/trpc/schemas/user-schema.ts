import { z } from "zod";

const userSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.email("Invalid email"),
	photo: z.string().optional(),
	github: z.string().optional(),
	linkedin: z.string().optional(),
	role: z.string().min(1, "Role is required"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must be more than 8 characters")
		.max(32, "Password must be less than 32 characters"),
	passwordConfirm: z
		.string({
			required_error: "Please confirm your password",
		})
		.min(1, "Please confirm your password"),
});

export const createUserSchema = userSchema.partial({
	photo: true,
	github: true,
	linkedin: true,
}).refine((data) => data.password === data.passwordConfirm, {
	path: ["passwordConfirm"],
	message: "Passwords do not match",
});

export const loginUserSchema = userSchema.partial({
	photo: true,
	github: true,
	linkedin: true,
	role: true,
	passwordConfirm: true,
});

export const editUserSchema = userSchema.partial({
	password: true,
	passwordConfirm: true,
});

export const changePasswordUserSchema = userSchema.partial({
	email: true,
	photo: true,
	github: true,
	linkedin: true,
	role: true,
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
export type LoginUserInput = z.TypeOf<typeof loginUserSchema>;
export type EditUserInput = z.TypeOf<typeof editUserSchema>;
export type ChangePasswordUserInput = z.TypeOf<typeof changePasswordUserSchema>;
