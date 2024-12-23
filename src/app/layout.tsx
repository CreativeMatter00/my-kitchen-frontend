import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WrapProviders from "./WrapProviders";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Kitchen",
	description: "Official website of my kitchen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <Provider store={store}> */}
			{/* <QueryClientProvider client={queryClient}> */}
			<WrapProviders>
				<body>
					<div className="bg-[#F5F5F5]">
						{/* <Navbar /> */}
						{children}
						{/* <Footer /> */}
						<Toaster richColors />
					</div>
				</body>
			</WrapProviders>

			{/* </QueryClientProvider> */}
			{/* </Provider> */}
		</html>
	);
}
