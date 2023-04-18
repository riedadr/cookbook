import ProfileForm from "@/components/settings/profile/ProfileForm";
import ProfileFormLoading from "@/components/settings/profile/ProfileFormLoading";
import { TJwt, TProfile } from "@/types/supabase";
import getSession from "@/utils/getSession";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
	const session = getSession();
	if (!session) redirect("/settings");

	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: profiles } = await supabase
		.from("profiles")
		.select()
		.eq("profile_id", session.sub);
	const profile = profiles?.at(0) as TProfile;

	if (profile)
		return (
			<>
				<section>
					<ProfileForm profile={profile} />
				</section>
			</>
		);
}
