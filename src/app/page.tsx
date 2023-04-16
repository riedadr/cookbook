import RecipesList from "@/components/recipes/RecipesList";

/**
 * Issue with async Server Components: https://beta.nextjs.org/docs/configuring/typescript#async-server-component-typescript-error
 */

export default async function Home() {
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
