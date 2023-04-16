"use client"
import Link from "next/link";
import { settingPages } from "./settingPages";
import { usePathname } from "next/navigation";

export default function SettingsNavLinks() {
	const path =  usePathname()

	return (
		<ul className={`menu w-full rounded-box`}>
			{settingPages.map((page) => (
				<li key={page.name} className="w-full">
					<Link href={page.url} className={`w-full rounded ${(page.url === path) && "text-primary"}`}>
						<div className="flex gap-2">
							{page.icon}
							{page.name}
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
}
