import { TRecipe } from "@/types/supabase";
import Image from "next/image";

async function RecipeCard({ recipe }: { recipe: TRecipe }) {
	const getBadgeColor = () => {
		let color = "";
		switch (recipe.course) {
			case "Salat":
				color = "bg-green-500 text-green-900 dark:text-green-100";
				break;
			case "Vorspeise":
				color = "bg-blue-500 text-blue-900 dark:text-blue-100";
				break;
			case "Haupgericht":
				color = "bg-amber-500 text-amber-900 dark:text-amber-100";
				break;
			case "Süßspeise":
				color = "bg-red-500 text-red-900 dark:text-red-100";
				break;
		}
		return color;
	};

	return (
		<div className="card w-full bg-base-100 shadow-xl">
			{recipe.image_url && (
				<figure>
					<Image
						src={recipe.image_url}
						width={400}
						height={300}
						alt="Shoes"
					/>
				</figure>
			)}
			<div className="card-body p-4 lg:p-8">
				<h2 className="card-title flex items-start justify-between">
					<span>{recipe.title}</span>
					{recipe.course && (
						<div
							className={`badge badge-sm bg-opacity-30 border-none ${getBadgeColor()}`}
						>
							{recipe.course}
						</div>
					)}
				</h2>
				<p>{recipe.description}</p>
				<div className="mt-4 flex flex-wrap gap-2">
					{recipe.tags &&
						recipe.tags.split(",").map((tag) => (
							<div key={tag} className="badge badge-sm">
								{tag}
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
