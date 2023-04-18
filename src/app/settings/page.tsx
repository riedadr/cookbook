import SettingsNavLinks from "@/components/settings/SettingsNavLinks";

export default function SettingsPage() {
	return (
		<>
			<p>Wähle eine Kategorie.</p>
			<div className="mt-8 lg:hidden">
				<SettingsNavLinks />
			</div>
		</>
	);
}
