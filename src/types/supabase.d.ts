import { Url } from "url";

export type TRecipe = {
	recipe_id: string;
	author_id: string | null;
	created_at: string;
	updated_at: string;
	title: string;
	description: string | null;
	file_url: string;
	image_url: string;
	course: "Vorspeise" | "Salat" | "Haupgericht" | "Süßspeise" | null;
	tags: "string";
};

export type TRecipeDetails = TRecipe & {
	author_user_name: string;
	author_name: string;
	author_avatar: string;
};

export type TProfile = {
	profile_id: string;
	created_at: string;
	email: string;
	avatar: string;
	name: string;
	user_name: string;
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
