import { z } from "zod";

const projectSchema = z.object({
	title: z.string().min(1, "Title is required"),
	img: z.string().optional(),
	code: z.string().min(1, "Code is required"),
	projectLink: z.string().optional(),
	tech: z.array(z.string().min(1, "Tech Tags is required")),
	description: z.string().min(1, "Description is required"),
	content: z.array(z.string().min(1, "Content is required")),
});

export type ProjectInput = z.TypeOf<typeof projectSchema>;