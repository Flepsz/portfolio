import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { ExperienceInput } from "../schemas";

export const createExperienceHandler = async ({
	input,
}: {
	input: ExperienceInput;
}) => {
	try {
		await prisma.experience.create({
			data: {
				...input,
			},
		});

		return {
			message: "Experience Created with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const getExperienceHandler = async () => {
	try {
		const experience = await prisma.experience.findMany();

		return {
			data: experience,
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editExperienceHandler = async ({
	input,
	id,
}: {
	input: ExperienceInput;
	id: number;
}) => {
	try {
		await prisma.experience.update({
			where: { id },
			data: {
				...input,
			},
		});

		return {
			message: "Experience Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const removeExperienceHandler = async ({ id }: { id: number }) => {
	try {
		await prisma.experience.delete({
			where: { id },
		});

		return {
			message: "Experience Removed with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
