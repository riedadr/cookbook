import SelectTheme from "@/components/settings/appearance/SelectTheme";

export default function AppearancePage() {
	return (
		<div className="flex justify-between items-center">
			<h1>Theme auswählen</h1>
			<SelectTheme />
		</div>
	)
}