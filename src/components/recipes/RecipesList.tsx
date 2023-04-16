import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { TRecipe } from "@/types/supabase";



export default async function RecipesList() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});
	const { data : recipes} = await supabase.from("recipes").select() as unknown as {data: TRecipe[]};

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
