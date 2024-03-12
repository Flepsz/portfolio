import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { userSchema } from "../schema";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
	createUser: publicProcedure.input(userSchema).mutation(async ({ input }) => {
		try {
			const updatedUser = await prisma.user.upsert({
				where: { email: input.email },
				update: input,
				create: input,
			});

			return { updatedUser };
		} catch (error) {
			console.error("Error creating User:", error);

			throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				cause: error,
				message: "Failed to create User",
			});
		}
	}),
	getAllUsers: publicProcedure
    .input(z.void())
    .query(async () => {
			try {
				const users = await prisma.user.findMany();

				return { users };
			} catch (error) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					cause: error,
					message: "Was not possible find Users",
				});
			}
		}),
});
