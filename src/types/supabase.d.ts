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
