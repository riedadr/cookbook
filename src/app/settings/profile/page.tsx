import ProfileForm from "@/components/settings/profile/ProfileForm";
import ProfileFormLoading from "@/components/settings/profile/ProfileFormLoading";
import { TJwt, TProfile } from "@/types/supabase";
import getSession from "@/utils/getSession";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
	const token = getSession();
	if (!token) redirect("/settings");

	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: profiles } = await supabase
		.from("profiles")
		.select()
		.eq("profile_id", token.sub);
	const profile = profiles?.at(0) as TProfile;

	function parseToken(cookie: ReadonlyRequestCookies) {
		console.log(cookie);
		if (!cookie.get("supabase-auth-toke")) return null;

		const jwt: string[] = JSON.parse(
			cookie.get("supabase-auth-token")?.value as unknown as string
		);

		const token = jwt.at(0);
		const tokenData: TJwt = JSON.parse(
			Buffer.from(token!.split(".")[1], "base64").toString()
		);

		return tokenData;
	}

	if (profile)
		return (
			<>
				<section>
					<ProfileForm profile={profile} />
				</section>
			</>
		);
}
