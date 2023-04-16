import { headers, cookies } from "next/headers";
import { Database } from "@/types/supabase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function RecipesList() {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});
	const { data: recipes } = await supabase.from("recipes").select();
	return (
		<>
			<h1>Rezepte</h1>
			{recipes &&
				recipes.map((recipe) => (
					<li key={recipe.recipe_id}>{recipe.title}</li>
				))}
		</>
	);
}
