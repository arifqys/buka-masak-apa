import Image from "next/image";

import { Recipe } from "@/types/recipe";

interface RecipeItemProps {
  recipe: Recipe;
}

export default function RecipeItem({ recipe }: RecipeItemProps) {
  return (
    <div className="w-72 overflow-hidden rounded-lg bg-white">
      <Image
        key={recipe.image}
        src={recipe.image}
        alt={recipe.label}
        width={300}
        height={300}
      />
      <div className="p-4">
        <h2 className="truncate text-xl font-bold" title={recipe.label}>
          {recipe.label}
        </h2>
      </div>
    </div>
  );
}
