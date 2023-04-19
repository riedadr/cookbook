"use client";
import {
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
} from "react";

type TThemeContext = {
	theme: "dark" | "light";
	changeTheme: (newTheme: "dark" | "light") => void;
	toggleTheme: VoidFunction;
};

const Context = createContext<TThemeContext | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<TThemeContext["theme"]>("dark");

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		changeTheme(newTheme);
	};

	const changeTheme = (newTheme: "dark" | "light") => {
		document.body.setAttribute("data-theme", newTheme);
		
		if (newTheme === "dark") document.body.classList.add("dark");
		else document.body.classList.remove("dark");
		
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			const clientTheme = localStorage.getItem("theme");
			if (clientTheme) changeTheme(clientTheme as TThemeContext["theme"]);
		}
	}, []);

	return (
		<Context.Provider value={{ theme, toggleTheme, changeTheme }}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error("useTheme must be used inside ThemeProvider");
	}

	return context;
};
