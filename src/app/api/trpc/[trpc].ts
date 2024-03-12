import { appRouter } from '@/server/trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});