import { z } from "zod";

const experienceSchema = z.object({
	title: z.string().min(1, "Title is required"),
	position: z.string().min(1, "Position is required"),
	time: z.string().min(1, "Time is required"),
	location: z.string().min(1, "Location is required"),
	description: z.array(z.string().min(1, "Description is required")),
	tech: z.array(z.string().min(1, "Tech Tags is required")),
});

export type ExperienceInput = z.TypeOf<typeof experienceSchema>;