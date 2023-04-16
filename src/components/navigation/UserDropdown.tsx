import { useSupabase } from "@/contexts/supabaseCtx";
import { IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function UserDropdown() {
	const { session, signIn, signOut } = useSupabase();


	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
				<div className="rounded-full">
					{session ? (
						<Image
							src={session.user.user_metadata.avatar_url}
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
				<span>Meine Rezepte</span>
			</li>
			<li>
				<Link href="/settings/account">Mein Profil</Link>
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
