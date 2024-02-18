"use client";

import { useSearchParams } from "next/navigation";
import { ChangeEventHandler } from "react";

import { revalidateHome } from "@/actions";

export default function RecipeSearch() {
  const searchParams = useSearchParams();

  const handleSearchInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", e.target.value);

    if (e.target.value === "") {
      window.history.pushState(null, "", "/");
    } else {
      window.history.pushState(null, "", `?${params}`);
    }
  };

  return (
    <div className="mb-10 flex flex-col">
      <h2 className="mb-4 text-4xl font-bold">Buka Hari Ini, Masak Apa?</h2>

      <form action={revalidateHome} className="flex gap-4">
        <input
          className="w-full rounded-lg border border-gray-300 px-6 py-3 text-lg"
          onChange={handleSearchInput}
          type="text"
          placeholder="Masukkan kata kunci pencarian..."
          defaultValue={searchParams.get("q") ?? ""}
        />

        <button
          type="submit"
          className="rounded-lg bg-sky-500 px-6 py-3 font-bold text-white"
          aria-label="Cari resep"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
