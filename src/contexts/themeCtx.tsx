"use client";
import {
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
} from "react";
import { themeChange } from "theme-change";

type TThemeContext = {
	theme: "dark" | "light";
	toggleTheme: VoidFunction;
};

const Context = createContext<TThemeContext | undefined>(undefined);

export default function ThemeProvider({
	children,
}: {
	children: ReactNode;
}) {

	const [theme, setTheme] = useState<TThemeContext["theme"]>("dark");

	const toggleTheme = () => {
		if (theme === "dark") setTheme("light")
		else setTheme("dark")
	};


	useEffect(() => {
		if (typeof window !== "undefined") {
			const clientTheme = localStorage.getItem("theme");
			if (clientTheme) setTheme(clientTheme as TThemeContext["theme"]);
		}

		themeChange(false);
	}, []);

	return (
		<Context.Provider value={{ theme, toggleTheme }}>
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
