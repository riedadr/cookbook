"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { settingPages } from "./settingPages";
import Link from "next/link";

export default function SettingsBreadcrumbs() {
	const path = usePathname();
	const currentPage = settingPages.find((page) => page.url === path);

	return (
		<>
			<div className="breadcrumbs text-sm">
				<ul>
					<li>
						<Link href="/settings">Einstellungen</Link>
					</li>
					{currentPage && <li>{currentPage?.name}</li>}
				</ul>
			</div>
			{currentPage && (
				<h1 className="mt-2 text-2xl font-bold">{currentPage?.name}</h1>
			)}
		</>
	);
}
