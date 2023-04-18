import getSession from "@/utils/getSession";
import SettingsNavLinks from "./SettingsNavLinks";

export default function SettingsNav() {
	const session = getSession()
	return (
		<aside className="hidden lg:block fixed w-64">
			<SettingsNavLinks unauthed={!session}/>
		</aside>
	);
}
