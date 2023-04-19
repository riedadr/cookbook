"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "@/contexts/themeCtx";

function ToggleTheme() {
	const { theme, toggleTheme } = useTheme();
	return (
		<>
			<button
					className="btn-ghost btn h-16 w-16 rounded-none"
					title={(theme === "light") ? "dunkles Theme" : "helles Theme"}
					onClick={() => toggleTheme()}
				>
					{(theme === "light") ? <IconMoon /> : <IconSun />}
				</button>
		</>
	);
}

export default ToggleTheme;
