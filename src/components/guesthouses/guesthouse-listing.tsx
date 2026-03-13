"use client";

import { useState, useMemo } from "react";
import { SearchFilterBar } from "@/components/shared/search-filter-bar";
import { GuesthouseGrid } from "@/components/guesthouses/guesthouse-grid";
import type { Guesthouse } from "@/types";

const categoryFilters = [
  { label: "All", value: "all" },
  { label: "Boutique", value: "boutique" },
  { label: "Budget", value: "budget" },
  { label: "Romantic", value: "romantic" },
];

interface GuesthouseListingProps {
  guesthouses: Guesthouse[];
}

export function GuesthouseListing({ guesthouses }: GuesthouseListingProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return guesthouses.filter((g) => {
      const matchesSearch =
        !search ||
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.location.island.toLowerCase().includes(search.toLowerCase()) ||
        g.location.atoll.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "all" || g.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [guesthouses, search, category]);

  return (
    <>
      <SearchFilterBar
        searchPlaceholder="Search guesthouses..."
        filters={categoryFilters}
        activeFilter={category}
        searchQuery={search}
        onFilterChange={setCategory}
        onSearchChange={setSearch}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No guesthouses found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
            }}
            className="mt-4 text-sm font-medium text-foreground underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <GuesthouseGrid guesthouses={filtered} />
      )}
    </>
  );
}
