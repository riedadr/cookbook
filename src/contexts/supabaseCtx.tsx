"use client";
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
	type SetStateAction,
	type Dispatch,
} from "react";
import { useRouter } from "next/navigation";
import { TProfile } from "@/types/supabase";

type TSupabaseContext = {
	supabase: SupabaseClient;
	session: Session | null;
	signIn: VoidFunction;
	signOut: VoidFunction;
	profile: TProfile | null;
	setProfile: Dispatch<SetStateAction<TProfile | null>>;
	updateProfile: Function;
};

const Context = createContext<TSupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
	children,
}: {
	children: ReactNode;
}) {
	const router = useRouter();
	const [supabase] = useState(() => createBrowserSupabaseClient());
	const [session, setSession] = useState<Session | null>(null);
	const [profile, setProfile] = useState<TProfile | null>(null);

	const signIn = () => {
		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: window.location.origin,
			},
		});
	};

	const signOut = () => {
		supabase.auth.signOut();
		router.push("/");
	};

	const updateProfile = async () => {
		if (session) {
			const pid = session.user.id;
			const { data, error } = await supabase
				.from("profiles")
				.select()
				.eq("profile_id", pid);
			let p = null;
			if (!error && data) {
				p = data.at(0) as TProfile;
				setProfile(p);
			}
			return p;
		} else return null;
	};

	useEffect(() => {
		async function getSession() {
			const { data, error } = await supabase.auth.getSession();
			return !error && data ? data.session : null;
		}
		async function getProfile(pid: string) {
			const { data, error } = await supabase
				.from("profiles")
				.select()
				.eq("profile_id", pid);
			let p = null;
			if (!error && data) {
				p = data.at(0) as TProfile;
				setProfile(p);
			}
			return p;
		}

		getSession().then((s) => {
			if (s) getProfile(s.user.id).then((p) => setProfile(p));
			setSession(s);
		});
	}, [supabase]);

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((e, s) => {
			setSession(s);
			router.refresh();
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [supabase, router]);

	return (
		<Context.Provider
			value={{
				supabase,
				session,
				signIn,
				signOut,
				profile,
				setProfile,
				updateProfile,
			}}
		>
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
