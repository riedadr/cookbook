"use client";
import { IconSelector } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const settingPages = [
	{ name: "Profil", url: "/settings/profile" },
	{ name: "Darstellung", url: "/settings/appearance" },
];

export default function SettingsNav() {
	const path = usePathname()
	const currentPage = settingPages.find((page) => page.url === path)
	
	


	return (<>
		<aside className="hidden lg:block">
				<SettingsNavLinks />
			</aside>
			<div className="lg:hidden">
				<div className="dropdown w-full">
					<label
						tabIndex={0}
						className="btn btn-block justify-between mb-4"
						>
						<span>{currentPage?.name}</span>
						<IconSelector />
					</label>
					<div
						tabIndex={0}
						className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
						>
						<SettingsNavLinks />
					</div>
				</div>
			</div>
						</>
	);
}

function SettingsNavLinks() {
	return (
		<ul className="menu">
			{settingPages.map((page) => (
				<li key={page.name}>
					<Link href={page.url}>{page.name}</Link>
				</li>
			))}
		</ul>
	);
}
