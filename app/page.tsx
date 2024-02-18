import RecipeList from "@/components/recipe-list";
import RecipeSearch from "@/components/recipe-search";

interface HomeProps {
  searchParams: {
    q: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="w-full max-w-5xl">
        <RecipeSearch />

        <RecipeList searchParams={searchParams} />
      </div>
    </main>
  );
}
