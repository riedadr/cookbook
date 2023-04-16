import Shell from "@/components/navigation/Shell";
import SupabaseProvider from "@/contexts/supabase";
import "@/styles/globals.css";

export const metadata = {
	title: "CookBook"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="de" data-theme="dark">
			<body className="flex flex-col">
				<SupabaseProvider>
					<Shell>{children}</Shell>
				</SupabaseProvider>
			</body>
		</html>
	);
}