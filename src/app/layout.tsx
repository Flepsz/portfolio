import TrpcProvider from "@/utils/trpc-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Felipe - Portifólio",
	description: "Felipe Portifólio's",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<TrpcProvider>{children}</TrpcProvider>
			</body>
		</html>
	);
}

