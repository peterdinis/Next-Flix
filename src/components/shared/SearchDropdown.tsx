"use client";

import { FC, useState, useMemo, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  usePaginatedFilms,
  usePaginatedPopular,
  usePaginatedSeries,
} from "@/api/queries/movies/moviesRequests";
import useDebounce from "@/hooks/useDebounce";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";

const SearchDropdown: FC = () => {
  const pathname = usePathname();
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = usePaginatedSeries(pageIndex);
  const { data: filmsData } = usePaginatedFilms(pageIndex);
  const { data: popularData } = usePaginatedPopular(pageIndex);

  const initialSearchValue: never[] = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any>(initialSearchValue);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (debouncedSearchTerm && pathname === "series") {
      setIsSearching(true);
      setResults(data);
    } else if (debouncedSearchTerm && pathname === "films") {
      setIsSearching(true);
      setResults(filmsData);
    } else if (debouncedSearchTerm && pathname === "popular") {
      setIsSearching(true);
      setResults(popularData);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="relative Typography-gray-600">
      <input
        type="search"
        name="serch"
        placeholder="Search"
        className="bg-transparent h-10 px-5 pr-10 rounded-full text-sm focus:outline-none text-blue-50"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && (
        <div className="text-center mt-4 font-bold text-xl">
          <Box sx={{ display: "flex" }}>
            <CircularProgress variant="soft" value={progress} />
          </Box>
          <Typography>Vyhľadám...</Typography>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
