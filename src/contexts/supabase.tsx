"use client"
import {
	createBrowserSupabaseClient,
	type Session,
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
	session: Session | null;
	signIn: VoidFunction;
	signOut: VoidFunction;
};

const Context = createContext<TSupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
}: {
	children: ReactNode;
}) {
	const router = useRouter();
	const [supabase] = useState(() => createBrowserSupabaseClient<Database>());
	const [session, setSession] = useState<Session | null>(null);


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

	useEffect(() => {
		async function getSession() {
			const { data, error } = await supabase.auth.getSession();
			console.log(data);

			return !error && data ? data.session : null;
		}

		getSession().then((s) => setSession(s));
	}, [supabase]);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((e, s) => {
			setSession(s)
			router.push("/");
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [supabase, router]);

	return (
		<Context.Provider value={{ supabase, session, signIn, signOut }}>
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