import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { appRouter } from "./server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const PORT = 7777;

const app = express();

app.use(
	cors({
    methods: "*",
		credentials: true,
	})
);

app.use(express.json());
app.use(cookieParser());

app.use(
	"/api/trpc",
	createExpressMiddleware({
		router: appRouter,
	})
);

app.listen(PORT, () => {
	console.log(`Server listening on port${PORT}`);
});
