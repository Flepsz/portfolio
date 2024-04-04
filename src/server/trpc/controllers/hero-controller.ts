import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { HeroInput } from "../schemas";

export const createHeroHandler = async ({ input }: { input: HeroInput }) => {
	try {
		await prisma.hero.create({
			data: {
				...input,
			},
		});

		return {
			message: "Hero Created with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const getHeroHandler = async () => {
	try {
		const hero = await prisma.hero.findMany();

		return {
			data: hero,
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editHeroHandler = async ({
	input,
	id,
}: {
	input: HeroInput;
	id: number;
}) => {
	try {
		await prisma.hero.update({
			where: { id },
			data: {
				...input,
			},
		});

		return {
			message: "Hero Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const removeHeroHandler = async ({ id }: { id: number }) => {
	try {
		await prisma.hero.delete({
			where: { id },
		});

		return {
			message: "Hero Removed with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
