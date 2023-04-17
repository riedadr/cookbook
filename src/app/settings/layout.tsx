import SettingsBreadcrumbs from "@/components/settings/SettingsBreadcrumbs";
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
		<div className="flex items-start gap-8">
			<SettingsNav />
			<section className="w-full lg:ml-64 lg:pl-8">
				<SettingsBreadcrumbs />
				{children}
			</section>
		</div>
	);
}
