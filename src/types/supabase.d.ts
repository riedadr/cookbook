import { Url } from "url";

export type TRecipe = {
	author: string | null;
	content: string;
	created_at: string;
	description: string | null;
	recipe_id: string;
	title: string;
	updated_at: string;
};

export type TProfile = {
	profile_id: string;
	created_at: string;
	email: string;
	avatar: string;
	name: string;
};

export type TJwt = {
	aud: "authenticated";
	exp: number;
	sub: string;
	email: `${string}@${string}.${string}`;
	phone: "";
	app_metadata: { provider: "github"; providers: ["github"] };
	user_metadata: {
		avatar_url: Url;
		email: `${string}@${string}.${string}`;
		email_verified: boolean;
		iss: Url;
		preferred_username: string;
		provider_id: string;
		sub: string;
		user_name: string;
	};
	role: "authenticated";
	aal: "aal1";
	amr: [{ method: "oauth"; timestamp: number }];
	session_id: string;
};
