import { TRecipeDetails } from "@/types/supabase";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

async function RecipeTitleCard({ recipe }: { recipe: TRecipeDetails }) {
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

	const creationDateString = dayjs(recipe.created_at).format(
		"DD. MMMM YYYY"
	);

	return (
		<div className="flex items-start justify-between rounded bg-base-300">
			<div className="flex w-full justify-between p-4">
				<div>
					<h1 className="mb-2 text-3xl font-bold">{recipe.title}</h1>
					<p className="flex gap-2 items-center text-sm">
						<Link href={`/${recipe.author_user_name}`}>
							<div className="badge flex items-center gap-1 p-0 pr-2">
								<div className="avatar">
									<div className="h-5 w-5 rounded-full">
										<Image
											src={recipe.author_avatar}
											width={32}
											height={32}
											alt="avatar"
										/>
									</div>
								</div>
								{recipe.author_name}
							</div>
						</Link>
						{creationDateString}
					</p>
				</div>
				{recipe.course && (
					<div
						className={`badge border-none bg-opacity-30 ${getBadgeColor()}`}
					>
						{recipe.course}
					</div>
				)}
			</div>
			<Image
				className="w-2/5 rounded-r"
				src={recipe.image_url}
				height={300}
				width={400}
				alt={recipe.title}
			/>
		</div>
	);
}

export default RecipeTitleCard;
