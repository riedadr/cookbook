import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { TRecipe } from "@/types/supabase";
import RecipeCard from "./RecipeCard";

export const revalidate = 60;

export default async function RecipeList() {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});
	const { data: recipes } = (await supabase
		.from("recipes")
		.select()) as unknown as { data: TRecipe[] };

	return (
		<div className="grid grid-cols-auto-fill gap-4">
			{recipes &&
				[
					...recipes,
					...recipes,
					...recipes,
					...recipes,
					...recipes,
					...recipes,
					...recipes,
					...recipes,
				].map((recipe) => (
					<>
						{/* @ts-expect-error Async Server Component */}
						<RecipeCard key={recipe.recipe_id} recipe={recipe} />
					</>
				))}
		</div>
	);
}
