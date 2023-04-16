"use client"
import {
	createBrowserSupabaseClient,
	type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import {
	type ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
} from "react";
import { useRouter } from "next/navigation";
import { Database } from "@/types/supabase";

type TSupabaseContext = {
	supabase: SupabaseClient;
};

const Context = createContext<TSupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
}: {
	children: ReactNode;
}) {
	const router = useRouter();
	const [supabase] = useState(() => createBrowserSupabaseClient<Database>());

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			router.refresh();
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [supabase, router]);

	const signIn = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo:
					process.env.NODE_ENV === "development"
						? "http://localhost:3000"
						: "https://cook.riedadr.dev",
			},
		});
	};
	const signOut = () => {
		supabase.auth.signOut();
	};

	return (
		<Context.Provider value={{ supabase }}>
			<>{children}</>
		</Context.Provider>
	);
}

export const useSupabase = () => {
	const context = useContext(Context);

	if (context === undefined) {
		throw new Error("useSupabase must be used inside SupabaseProvider");
	}

	return context;
};