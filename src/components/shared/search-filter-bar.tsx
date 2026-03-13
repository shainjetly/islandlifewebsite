"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterOption {
  label: string;
  value: string;
}

interface SearchFilterBarProps {
  searchPlaceholder?: string;
  filters: FilterOption[];
  activeFilter: string;
  searchQuery: string;
  onFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export function SearchFilterBar({
  searchPlaceholder = "Search by name...",
  filters,
  activeFilter,
  searchQuery,
  onFilterChange,
  onSearchChange,
}: SearchFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
      {/* Search */}
      <div className="relative w-full sm:w-80">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full h-11 pl-11 pr-10 text-sm bg-[#f5f5f4] dark:bg-white/5 border-0 rounded-full outline-none focus:ring-2 focus:ring-foreground/10 placeholder:text-muted-foreground/60 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={cn(
              "px-4 py-2 text-[12px] font-medium tracking-[0.02em] rounded-full transition-all",
              activeFilter === filter.value
                ? "bg-foreground text-background"
                : "bg-[#f5f5f4] dark:bg-white/5 text-muted-foreground hover:text-foreground hover:bg-[#ebebea] dark:hover:bg-white/10"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
