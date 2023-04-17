import ProfileForm from "@/components/settings/profile/ProfileForm";
import { TProfile } from "@/types/supabase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export default async function ProfilePage() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});
	const { data: userData } = await supabase.auth.getUser();
	const user_id = userData.user?.id;

	const { data: profiles } = await supabase
		.from("profiles")
		.select()
		.eq("profile_id", user_id);
	const profile = profiles?.at(0) as TProfile;

	return (
		<>
			{profile ? (
				<section>
					<ProfileForm profile={profile} />
				</section>
			) : (
				<progress className="progress"></progress>
			)}
		</>
	);
}


