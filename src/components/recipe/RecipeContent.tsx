import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function RecipeContent({ fileUrl }: { fileUrl: string }) {
	let recipeContent = "Rezept wird geladen ...";
	const recipeFile = await fetch(fileUrl);
	if (recipeFile) recipeContent = await recipeFile.text();

	return (
		<article className="prose">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>
				{recipeContent}
			</ReactMarkdown>
		</article>
	);
}

export default RecipeContent;
