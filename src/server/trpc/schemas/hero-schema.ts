import { z } from "zod";

const heroSchema = z.object({
  title: z.string().min(1, "Title is required").max(32, "Title must be less than 32 characters"),
  subtitle: z.string().min(1, "Subtitle is required").max(32, "Subtitle must be less than 32 characters"),
  about: z.string().min(1, "About is required"),
})

export type HeroInput = z.TypeOf<typeof heroSchema>;