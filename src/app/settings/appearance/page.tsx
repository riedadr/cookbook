import SelectTheme from "@/components/settings/appearance/SelectTheme";

export default function AppearancePage() {
	return (
		<div className="flex items-center justify-between">
			<h1>Theme auswählen</h1>
			<SelectTheme />
		</div>
	);
}
