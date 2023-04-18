import { useSupabase } from "@/contexts/supabaseCtx";
import { IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function UserDropdown() {
	const { session, signIn, signOut, profile } = useSupabase();	

	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
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
				<Link href="/settings/profile">Mein Profil</Link>
			</li>
			<li>
				<Link href="/recipes/my">Meine Rezepte</Link>
			</li>
			<li>
				<button className="bnt btn-error btn-outline" onClick={action}>
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
