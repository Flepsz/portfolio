"use client";

import { ReactNode, useState } from "react";
import { trpc } from "./trpc";
import { httpBatchLink, getFetch, loggerLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import superjson from "superjson";

export default function TrpcProvider({ children }: { children: ReactNode }) {
	const url = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: "http://localhost:3000/api/trpc/";

	const [queryClient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				loggerLink({
					enabled: () => true,
				}),
				httpBatchLink({
					url,
					fetch: async (input, init?) => {
						const fetch = getFetch();
						return fetch(input, {
							...init,
							credentials: "include",
						});
					},
					transformer: superjson
				}),
			],
		})
	);
	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}
