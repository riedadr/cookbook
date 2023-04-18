"use client";
import Link from "next/link";
import { settingPages } from "./settingPages";
import { usePathname } from "next/navigation";

export default function SettingsNavLinks({ unauthed }: { unauthed: boolean }) {
	const path = usePathname();

	return (
		<ul className={`menu w-full rounded-box`}>
			{settingPages.map((page) => {
				const disabled = page.protected && unauthed
				return (
					<li key={page.name} className={disabled ? "hidden" : ""}>
						<Link
							href={page.url}
							className={`w-full rounded ${
								page.url === path && "text-primary"
							}`}
						>
							<div className="flex gap-2">
								{page.icon}
								{page.name}
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
