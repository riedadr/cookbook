import SettingsNav from "@/components/settings/SettingsNav";
export const metadata = {
	title: "CookBook - Settings",
	description: "Einstellungen",
};

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode;
}) {


	return (
		<>
			<SettingsNav />
			{children}
		</>
	);
}
