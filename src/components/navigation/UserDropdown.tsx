import { useSupabase } from "@/contexts/supabaseCtx";
import { IconBook, IconPlus, IconUser, IconUserCog } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function UserDropdown() {
	const { session, signIn, signOut, profile } = useSupabase();

	return (
		<div className="dropdown-end dropdown">
			<label
				tabIndex={0}
				className="btn-ghost avatar btn h-16 w-16 rounded-none "
			>
				<div className="rounded-full">
					{session && profile ? (
						<Image
							src={profile.avatar}
							alt="profile"
							height={32}
							width={32}
						/>
					) : (
						<IconUser />
					)}
				</div>
			</label>
			{session ? (
				<LoggedInMenu action={signOut} />
			) : (
				<LoggedOutMenu action={signIn} />
			)}
		</div>
	);
}
function LoggedInMenu({ action }: { action: VoidFunction }) {
	return (
		<ul
			tabIndex={0}
			className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
		>
			<li>
				<NavLink icon={<IconUserCog />} href="/settings/profile">
					Mein Profil
				</NavLink>
			</li>
			<li>
				<NavLink icon={<IconBook />} href="/recipes/my">
					Meine Rezepte
				</NavLink>
			</li>
			<hr className="my-2" />
			<li>
				<button
					className="btn-outline btn-error btn-md btn"
					onClick={action}
				>
					abmelden
				</button>
			</li>
		</ul>
	);
}

function LoggedOutMenu({ action }: { action: VoidFunction }) {
	return (
		<ul
			tabIndex={0}
			className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
		>
			<li>
				<button
					className="btn-primary btn text-green-900"
					onClick={action}
				>
					anmelden
				</button>
			</li>
		</ul>
	);
}
