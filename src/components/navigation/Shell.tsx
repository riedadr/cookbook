"use client";
import Link from "next/link";
import { type ReactNode } from "react";
import {
	IconToolsKitchen2,
	IconPlus,
	IconPalette,
	IconUserCog,
	IconHome,
	IconBook,
	IconSettings,
	IconSearch,
} from "@tabler/icons-react";
import ToggleTheme from "./ToggleTheme";
import UserDropdown from "./UserDropdown";
import NavLink from "./NavLink";

function Shell({ children }: { children: ReactNode }) {
	return (
		<div className="drawer">
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<header className="bg-base-100 sticky top-0 z-40">
					<div className=" max-w-7xl mx-auto">
						<div className="w-full navbar py-0 items-center justify-between">
							<div className="flex-none lg:hidden">
								<label
									htmlFor="my-drawer-3"
									className="btn btn-ghost px-2"
								>
									<Logo />
								</label>
							</div>
							<div className="flex-none hidden lg:block px-2">
								<Link href="/">
									<Logo />
								</Link>
							</div>
							<div>
								<div className="flex-none hidden lg:flex">
									<Link
										className="btn btn-ghost h-16 w-16 rounded-none"
										href="/recipes"
										title="alle Rezepte"
									>
										<IconSearch />
									</Link>
									<ToggleTheme />
									<Link
										className="btn btn-ghost h-16 w-16 rounded-none"
										href="/settings"
										title="neues Rezept"
									>
										<IconSettings />
									</Link>
								</div>
								<UserDropdown />
							</div>
						</div>
						<hr className="mx-4 border-neutral" />
					</div>
				</header>
				<main className="p-4 max-w-7xl w-full mx-auto">{children}</main>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 bg-base-100">
					<li><NavLink icon={<IconHome />} href="/">
						Start
					</NavLink></li>
					<div className="flex gap-2 items-center mb-2 mt-4">
						Rezepte <hr className="w-full border-neutral" />
					</div>
					<li><NavLink icon={<IconSearch />} href="/recipes">
						Alle Rezepte
					</NavLink></li>
					<li><NavLink icon={<IconBook />} href="/recipes/my">
						Meine Rezepte
					</NavLink></li>
					<li><NavLink icon={<IconPlus />} href="/recipes/new">
						Neues Rezept
					</NavLink></li>
					<div className="flex gap-2 items-center mb-2 mt-4">
						Einstellungen <hr className="w-full border-neutral" />
					</div>
					<li><NavLink icon={<IconUserCog />} href="/settings/profile">
						Profil
					</NavLink></li>
					<li><NavLink icon={<IconPalette />} href="/settings/appearance">
						Darstellung
					</NavLink></li>
				</ul>
			</div>
		</div>
	);
}

function Logo() {
	return (
		<div className="flex gap-2 items-center">
			<IconToolsKitchen2 />
			<div className="uppercase font-semibold text-2xl">
				CookBook
				<sup className="text-primary lowercase font-light">alpha</sup>
			</div>
		</div>
	);
}



export default Shell;
