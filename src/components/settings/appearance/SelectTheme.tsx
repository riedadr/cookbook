"use client";
import { useTheme } from "@/contexts/themeCtx";
import { ChangeEvent } from "react";

function SelectTheme() {
	const { theme, changeTheme } = useTheme();

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		changeTheme(e.target.value as "dark" | "light");
	};

	return (
		<select
			value={theme}
			className="select select-sm"
			onChange={(e) => handleSelect(e)}
		>
			<option value="dark">dunkel</option>
			<option value="light">hell</option>
		</select>
	);
}

export default SelectTheme;
