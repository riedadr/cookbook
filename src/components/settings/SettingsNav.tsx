"use client";
import { usePathname } from "next/navigation";
import SettingsNavLinks from "./SettingsNavLinks";

export default function SettingsNav() {
	const path = usePathname();

	return (
		<aside
			className={`${
				path === "/settings" ? "hidden" : "hidden lg:block"
			} w-80`}
		>
			<SettingsNavLinks />
		</aside>
	);
}
