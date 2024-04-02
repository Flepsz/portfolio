import { z } from "zod";

const aboutSchema = z.object({
	descHighlight: z.string().min(1, "Highlight is required"),
	description: z.array(z.string().min(1, "Description is required")),
});

export type AboutInput = z.TypeOf<typeof aboutSchema>;
