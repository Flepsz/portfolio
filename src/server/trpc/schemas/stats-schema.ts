import { z } from "zod";

const statsSchema = z.object({
	work: z.array(z.string().min(1, "Work Tags is required")),
	fun: z.array(z.string().min(1, "Fun Tags is required")),
});

export type StatsInput = z.TypeOf<typeof statsSchema>;
