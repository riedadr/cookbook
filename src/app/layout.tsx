import Shell from "@/components/navigation/Shell";
import "@/styles/globals.css";

export const metadata = {
	title: "CookBook",
	description: "Kochbuch",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="de">
			<body className="flex flex-col">
				<Shell>{children}</Shell>
			</body>
		</html>
	);
}
