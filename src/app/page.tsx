import { headers, cookies } from "next/headers";
import RecipesList from "@/components/recipes/RecipesList";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

/**
 * Issue with async Server Components: https://beta.nextjs.org/docs/configuring/typescript#async-server-component-typescript-error
 */

export default async function Home() {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});
	const { data: recipes } = await supabase.from("recipes").select();
	return (
		<>
			<section className="min-h-section" id="search">Home</section>
			<section className="min-h-section" id="recipes">
				{/* @ts-expect-error Async Server Component */}
				<RecipesList />
			</section>
		</>
	);
}
