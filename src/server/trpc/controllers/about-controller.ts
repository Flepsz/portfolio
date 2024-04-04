import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { AboutInput } from "../schemas";

export const createAboutHandler = async ({ input }: { input: AboutInput }) => {
	try {
		await prisma.about.create({
			data: {
				...input,
			},
		});

		return {
			message: "About Created with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const getAboutHandler = async () => {
	try {
		const about = await prisma.about.findMany();

		return {
			data: about,
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editAboutHandler = async ({
	input,
	id,
}: {
	input: AboutInput;
	id: number;
}) => {
	try {
		await prisma.about.update({
			where: { id },
			data: {
				...input,
			},
		});

		return {
			message: "About Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const removeAboutHandler = async ({ id }: { id: number }) => {
	try {
		await prisma.about.delete({
			where: { id },
		});

		return {
			message: "About Removed with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
