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
				<header className="sticky top-0 z-40 bg-base-100">
					<div className=" mx-auto max-w-7xl">
						<div className="navbar w-full items-center justify-between py-0">
							<div className="flex-none lg:hidden">
								<label
									htmlFor="my-drawer-3"
									className="btn-ghost btn px-2"
								>
									<Logo />
								</label>
							</div>
							<div className="hidden flex-none px-2 lg:block">
								<Link href="/">
									<Logo />
								</Link>
							</div>
							<div>
								<div className="hidden flex-none lg:flex">
									<Link
										className="btn-ghost btn h-16 w-16 rounded-none"
										href="/recipes"
										title="alle Rezepte"
									>
										<IconSearch />
									</Link>
									<ToggleTheme />
									<Link
										className="btn-ghost btn h-16 w-16 rounded-none"
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
				<main className="mx-auto w-full max-w-7xl p-4">{children}</main>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu w-80 bg-base-100 p-4">
					<li>
						<NavLink icon={<IconHome />} href="/">
							Start
						</NavLink>
					</li>
					<div className="mb-2 mt-4 flex items-center gap-2">
						Rezepte <hr className="w-full border-neutral" />
					</div>
					<li>
						<NavLink icon={<IconSearch />} href="/recipes">
							Alle Rezepte
						</NavLink>
					</li>
					<li>
						<NavLink icon={<IconBook />} href="/recipes/my">
							Meine Rezepte
						</NavLink>
					</li>
					<li>
						<NavLink icon={<IconPlus />} href="/recipes/new">
							Neues Rezept
						</NavLink>
					</li>
					<div className="mb-2 mt-4 flex items-center gap-2">
						Einstellungen <hr className="w-full border-neutral" />
					</div>
					<li>
						<NavLink
							icon={<IconUserCog />}
							href="/settings/profile"
						>
							Profil
						</NavLink>
					</li>
					<li>
						<NavLink
							icon={<IconPalette />}
							href="/settings/appearance"
						>
							Darstellung
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Logo() {
	return (
		<div className="flex items-center gap-2">
			<IconToolsKitchen2 />
			<div className="text-2xl font-semibold uppercase">
				CookBook
				<sup className="font-light lowercase text-primary">alpha</sup>
			</div>
		</div>
	);
}

export default Shell;
