"use client";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/contexts/themeCtx";

function ToggleTheme() {
	const { theme, changeTheme } = useTheme();
	return (
		<>
			{theme === "light" ? (
				<button
					data-set-theme="dark"
					className="btn btn-ghost h-16 w-16 rounded-none"
					title="dunkles Theme"
					onClick={() => changeTheme("dark")}
				>
					<IconMoon />
				</button>
			) : (
				<button
					data-set-theme="light"
					className="btn btn-ghost h-16 w-16 rounded-none"
					title="helles Theme"
					onClick={() => changeTheme("light")}
				>
					<IconSun />
				</button>
			)}
		</>
	);
}

export default ToggleTheme;
