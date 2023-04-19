import RecipesList from "@/components/recipes/RecipeList";

export default async function RecipesPage() {
	return (
		<>
			<h1>Rezepte</h1>
			{/* @ts-expect-error Async Server Component */}
			<RecipesList />
		</>
	);
}
