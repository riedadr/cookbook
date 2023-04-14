"use client";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";
import { IconToolsKitchen2, IconPlus } from "@tabler/icons-react";
import ToggleTheme from "./ToggleTheme";

function Shell({ children }: { children: ReactNode }) {
	return (
		<div>
			<div className="drawer">
				<input
					id="my-drawer-3"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content flex flex-col">
					<header className="bg-base-100 sticky top-0 z-40">
						<div className=" max-w-7xl mx-auto">
							<div className="w-full navbar items-center justify-between">
								<div className="flex-none lg:hidden">
									<label
										htmlFor="my-drawer-3"
										className="btn btn-ghost px-2"
									>
										<Logo />
									</label>
								</div>
								<div className="flex-none hidden lg:block px-2">
									<Logo />
								</div>
								<div>
									<div className="flex-none hidden lg:flex px-2">
										<Link
											className="btn btn-ghost btn-circle"
											href="/recipes/new"
											title="neues Rezept"
										>
											<IconPlus />
										</Link>
										<ToggleTheme />
									</div>
									<div className="dropdown dropdown-end">
										<label
											tabIndex={0}
											className="btn btn-ghost btn-circle avatar"
										>
											<div className="rounded-full">
												<Image
													src="https://github.com/riedadr.png"
													alt="profile"
													height={32}
													width={32}
												/>
											</div>
										</label>
										<ul
											tabIndex={0}
											className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
										>
											<li>
												<span>Meine Rezepte</span>
											</li>
											<li>
												<span className="text-error">
													abmelden
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<hr className="mx-4 border-neutral" />
						</div>
					</header>
					<main className="p-4 max-w-7xl mx-auto">{children}</main>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-3"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 bg-base-100">
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

function Logo() {
	return (
		<div className="flex gap-2 items-center">
			<IconToolsKitchen2 />
			<span className="uppercase font-semibold text-2xl">Kochbuch</span>
		</div>
	);
}

export default Shell;
