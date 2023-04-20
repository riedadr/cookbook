import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
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

const aiquery = "create a postresql function get_recipe_details with the parameters recipe_title and author_user_name which returns the rows of the table recipes joined with the table profiles on recipes.author_id = profiles.profile_id where recipes.title = recipe_title and profiles.user_name = profile_user_name";


async function RecipePage({ params }: { params: { author_user_name: string, recipe_title: string } }) {
	const supabase = createServerComponentSupabaseClient({
		headers,
		cookies,
	});

	const { data: recipe } = await supabase
		.from("recipes")
		.select()
		console.log(recipe);
		
	return (
		<>
			<h1>Rezept {params.recipe_title} von {params.author_user_name}</h1>

			<article className="prose">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>
				{testRezept}
			</ReactMarkdown>
			</article>
		</>
	);
}

export default RecipePage;
