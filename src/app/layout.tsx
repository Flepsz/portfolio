import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import TrpcProvider from "@/utils/trpc-provider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Felipe - Portifólio",
	description: "Felipe Portifólio's",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body suppressHydrationWarning={true} className={poppins.className}>
				<TrpcProvider>
					<div>
						{children}
						<Toaster position="top-right" />
					</div>
				</TrpcProvider>
			</body>
		</html>
	);
}
