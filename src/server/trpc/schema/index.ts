import { z } from "zod";

export const userSchema = z.object({
	email: z.string(),
	github: z.string().optional(),
	linkedin: z.string().optional(),
	role: z.string(),
});
