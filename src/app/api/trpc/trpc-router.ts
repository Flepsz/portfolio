import { createContext } from "@/server/trpc/context";
import { getMeHandler } from "@/server/trpc/controllers/user-controller";
import authRouter from "@/server/trpc/routers/auth";
import { t, protectedProcedure } from "@/server/trpc/trpc";

const healthCheckerRouter = t.router({
	healthchecker: t.procedure.query(() => {
		return {
			status: "success",
			message: "Welcome to trpc with Next.js 14 and React Query",
		};
	}),
});

const userRouter = t.router({
	getMe: protectedProcedure.query(({ ctx }) => getMeHandler({ ctx })),
});

export const appRouter = t.mergeRouters(
	healthCheckerRouter,
	authRouter,
	userRouter
);

export const createCaller = t.createCallerFactory(appRouter);

export const createAsyncCaller = async () => {
	const context = await createContext();
	return createCaller(context);
};

export type AppRouter = typeof appRouter;
