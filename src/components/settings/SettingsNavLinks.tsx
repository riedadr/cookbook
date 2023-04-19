"use client";
import Link from "next/link";
import { settingPages } from "./settingPages";
import { usePathname } from "next/navigation";
import { useSupabase } from "@/contexts/supabaseCtx";

export default function SettingsNavLinks() {
	const path = usePathname();
	const { session } = useSupabase();

	return (
		<ul className={`menu rounded-box w-full`}>
			{settingPages.map((page) => {
				const disabled = page.protected && !session;
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
