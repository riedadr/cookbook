"use client";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { IconMoon, IconSun } from "@tabler/icons-react";

function ToggleTheme() {
	const [theme, setTheme] = useState(localStorage.getItem("theme"));
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<>
			{theme === "light" ? (
				<button
					data-set-theme="dark"
					className="btn btn-circle btn-ghost"
					title="dunkles Theme"
					onClick={() => setTheme("dark")}
				>
					<IconMoon />
				</button>
			) : (
				<button
					data-set-theme="light"
					className="btn btn-circle btn-ghost"
					title="helles Theme"
					onClick={() => setTheme("light")}
				>
					<IconSun />
				</button>
			)}
		</>
	);
}

export default ToggleTheme;
