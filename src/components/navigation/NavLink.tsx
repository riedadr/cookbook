import Link from "next/link";
import { ReactNode } from "react";

function NavLink({
	href,
	icon,
	children,
}: {
	href: string;
	icon?: ReactNode;
	children: ReactNode;
}) {
	return (
			<Link href={href}>
				<div className="flex gap-4">
					{icon}
					{children}
				</div>
			</Link>
	);
}

export default NavLink