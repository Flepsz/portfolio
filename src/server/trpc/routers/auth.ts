import { createUserSchema, loginUserSchema } from "../schema";
import { t, pubicProcedure, protectedProcedure } from "../trpc";
import {
	loginHandler,
	logoutHandler,
	registerHandler,
} from "../controllers/auth-controller";

const authRouter = t.router({
	registerUser: pubicProcedure
		.input(createUserSchema)
		.mutation(({ input }) => registerHandler({ input })),
	loginUser: pubicProcedure
		.input(loginUserSchema)
		.mutation(({ input }) => loginHandler({ input })),
	logoutUser: protectedProcedure.mutation(() => logoutHandler()),
});

export default authRouter;
