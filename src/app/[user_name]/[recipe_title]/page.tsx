import { type TRecipeDetails } from "@/types/supabase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { IconError404 } from "@tabler/icons-react";
import { cookies, headers } from "next/headers";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const testRezept = `
# Test

Erdbeerjoghurt einfach selber machen.

## Zutaten

- Naturjoghurt
- Erdbeermarmelade

## Zubereitung

1. Den Joghurtbecher öffnen
2. Erbeermarmelade nach Belieben hinzugeben
3. Mit einem Löffel vermischen
4. Essen
`;

async function RecipePage({
	params,
}: {
	params: { user_name: string; recipe_title: string };
}) {
	let recipeContent = "Rezept wird geladen ...";
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: recipes, error } = (await supabase.rpc("get_recipe_details", {
		recipe_title: params.recipe_title,
		user_name: params.user_name,
	})) as unknown as { data: TRecipeDetails[]; error: PostgrestError };
	const recipe = recipes.at(0);

	if (error) console.log(error);
	else console.log(recipes);

	if (recipe) {
		const url = recipe.file_url;
		const recipeFile = await fetch(url);
		recipeContent = await recipeFile.text();
	}

	return (
		<>
			{recipe ? (
				<h1>
					Rezept {recipe?.title} von {params.user_name}
				</h1>
			) : (
				<section className="mt-10 flex flex-col items-center font-bold text-error">
					<IconError404 size={32} />
					<p>Rezept wurde nicht gefunden</p>
				</section>
			)}

			{recipe && (
				<article className="prose">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{recipeContent}
					</ReactMarkdown>
				</article>
			)}
		</>
	);
}

export default RecipePage;
