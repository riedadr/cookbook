import { useSupabase } from "@/contexts/supabaseCtx";
import { IconBook, IconPlus, IconUser, IconUserCog } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function UserDropdown() {
	const { session, signIn, signOut, profile } = useSupabase();

	return (
		<div className="dropdown dropdown-end">
			<label
				tabIndex={0}
				className="btn btn-ghost h-16 w-16 rounded-none avatar "
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
			className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
			<hr className="my-2"/>
			<li>
				<button className="btn btn-error btn-outline btn-md" onClick={action}>
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
			className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
		>
			<li>
				<button
					className="btn btn-primary text-green-900"
					onClick={action}
				>
					anmelden
				</button>
			</li>
		</ul>
	);
}
