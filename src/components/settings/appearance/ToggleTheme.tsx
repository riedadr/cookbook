"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/contexts/themeCtx";

function ToggleTheme() {
	const {theme, toggleTheme } = useTheme()
	return (
		<>
			<button
				data-set-theme={theme === "dark" ? "light" : "dark"}
				className="btn btn-circle btn-ghost"
				title="Theme wechseln"
				onClick={() => toggleTheme()}
			>
				{theme === "dark" ? <IconSun /> : <IconMoon />}
			</button>
		</>
	);
}

export default ToggleTheme;
