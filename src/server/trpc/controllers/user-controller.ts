import { Context } from "../context";
import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { EditUserInput } from "../schemas";

export const getMeHandler = ({ ctx }: { ctx: Context }) => {
	try {
		const user = ctx.user;
		return {
			status: "success",
			data: {
				user,
			},
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editUserHandler = async ({
	input,
	ctx,
}: {
	input: EditUserInput;
	ctx: Context;
}) => {
	try {
		const userCtx = ctx.user;
		await prisma.user.update({
			where: { id: userCtx?.id },
			data: {
				email: input.email,
				photo: input.photo,
				github: input.github,
				linkedin: input.linkedin,
				role: input.role,
			},
		});

		return {
			message: "User Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
