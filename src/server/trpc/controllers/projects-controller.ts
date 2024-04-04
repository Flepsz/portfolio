import { TRPCError } from "@trpc/server";
import { prisma } from "../prisma";
import { ProjectInput } from "../schemas";

export const createProjectHandler = async ({
	input,
}: {
	input: ProjectInput;
}) => {
	try {
		await prisma.projects.create({
			data: {
				...input,
			},
		});

		return {
			message: "Project Created with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const getProjectsHandler = async () => {
	try {
		const projects = await prisma.projects.findMany();

		return {
			data: projects,
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const editProjectHandler = async ({
	input,
	id,
}: {
	input: ProjectInput;
	id: number;
}) => {
	try {
		await prisma.projects.update({
			where: { id },
			data: {
				...input,
			},
		});

		return {
			message: "Project Edited with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};

export const removeProjectHandler = async ({ id }: { id: number }) => {
	try {
		await prisma.projects.delete({
			where: { id },
		});

		return {
			message: "Project Removed with Success",
		};
	} catch (err: any) {
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: err.message,
		});
	}
};
