import { deserializeUser } from "./middlewares/auth-middleware";

export const createContext = async () => deserializeUser();

export type Context = Awaited<ReturnType<typeof createContext>>;
