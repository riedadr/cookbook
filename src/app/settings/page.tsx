import SettingsNavLinks from "@/components/settings/SettingsNavLinks";
import getSession from "@/utils/getSession";

export default function SettingsPage() {
	const session = getSession()

	return (
		<>
			<p>Wähle eine Kategorie.</p>
			<div className="mt-8 lg:hidden">
				<SettingsNavLinks unauthed={!session}/>
			</div>
		</>
	);
}
