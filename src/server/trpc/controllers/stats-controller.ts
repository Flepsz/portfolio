import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { StatsInput } from "../schemas";

export const createStatsHandler = async ({ input }: { input: StatsInput }) => {
	try {
		await prisma.stats.create({
			data: {
				...input,
			},
		});

		return {
			message: "Stats Created with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const getStatsHandler = async () => {
	try {
		const stats = await prisma.stats.findMany();

		return {
			data: stats,
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editStatsHandler = async ({
	input,
	id,
}: {
	input: StatsInput;
	id: number;
}) => {
	try {
		await prisma.stats.update({
			where: { id },
			data: {
				...input,
			},
		});

		return {
			message: "Stats Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const removeStatsHandler = async ({ id }: { id: number }) => {
	try {
		await prisma.stats.delete({
			where: { id },
		});

		return {
			message: "Stats Removed with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
