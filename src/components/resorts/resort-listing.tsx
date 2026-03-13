"use client";

import { useState, useMemo } from "react";
import { SearchFilterBar } from "@/components/shared/search-filter-bar";
import { ResortCard } from "@/components/resorts/resort-card";
import type { Resort } from "@/types";

const atollFilters = [
  { label: "All", value: "all" },
  { label: "Noonu Atoll", value: "Noonu Atoll" },
  { label: "North Malé", value: "North Malé Atoll" },
  { label: "Raa Atoll", value: "Raa Atoll" },
  { label: "Baa Atoll", value: "Baa Atoll" },
];

interface ResortListingProps {
  resorts: Resort[];
}

export function ResortListing({ resorts }: ResortListingProps) {
  const [search, setSearch] = useState("");
  const [atoll, setAtoll] = useState("all");

  const filtered = useMemo(() => {
    return resorts.filter((r) => {
      const matchesSearch =
        !search ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.location.atoll.toLowerCase().includes(search.toLowerCase()) ||
        r.location.island.toLowerCase().includes(search.toLowerCase());
      const matchesAtoll =
        atoll === "all" || r.location.atoll === atoll;
      return matchesSearch && matchesAtoll;
    });
  }, [resorts, search, atoll]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <SearchFilterBar
        searchPlaceholder="Search resorts..."
        filters={atollFilters}
        activeFilter={atoll}
        searchQuery={search}
        onFilterChange={setAtoll}
        onSearchChange={setSearch}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No resorts found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setAtoll("all");
            }}
            className="mt-4 text-sm font-medium text-foreground underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          {/* Featured — first result as large card */}
          <div className="mb-10">
            <ResortCard resort={featured} variant="large" />
          </div>

          {/* Rest in grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {rest.map((resort, i) => (
                <ResortCard key={resort.id} resort={resort} index={i} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
