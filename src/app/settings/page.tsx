import SettingsNavLinks from "@/components/settings/SettingsNavLinks";
import React from "react";

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
