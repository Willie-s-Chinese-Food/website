import type { Metadata } from "next";
import { Jost } from "next/font/google";
import './globals.css';

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Willie's Chinese Food",
	description: "Willie's Chinese Food is a family run Chinese takeout & delivery restaurant operating for over 50 years in Orleans! We specialize in Cantonese and Szechuan cuisine loved by our long term and new customers. Give us a try, you'll love us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
		>
			<body className="min-h-full flex flex-col font-jost">
				{ children }
			</body>
		</html>
	);
}
