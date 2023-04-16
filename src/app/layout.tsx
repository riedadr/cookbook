import Shell from "@/components/navigation/Shell";
import SupabaseProvider from "@/contexts/supabaseCtx";
import "@/styles/globals.css";

export const metadata = {
	title: "CookBook",
	description: "Kochbuch"
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de" data-theme="dark">
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#1f2937"
				/>
				<link rel="shortcut icon" href="/icons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#1f2937" />
				<meta
					name="msapplication-config"
					content="/browserconfig.xml"
				/>
				<meta name="theme-color" content="#1f2937" />
			</head>
			<body className="flex flex-col">
				<SupabaseProvider>
					<Shell>{children}</Shell>
				</SupabaseProvider>
			</body>
		</html>
	);
}
