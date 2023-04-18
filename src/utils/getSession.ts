import { TJwt } from "@/types/supabase";
import { cookies } from "next/headers";

export default function getSession() {
	const cookie = cookies();
	const supabaseCookie = cookie.get("supabase-auth-token");

	if (supabaseCookie) {
		const jwt: string[] = JSON.parse(
			supabaseCookie.value
		);

		const token = jwt.at(0);
		const tokenData: TJwt = JSON.parse(
			Buffer.from(token!.split(".")[1], "base64").toString()
		);

		return tokenData;
	} else return null;
}
