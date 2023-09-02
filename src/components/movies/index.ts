import dynamic from "next/dynamic";

export const FilmsWrapper = dynamic(() => import("./films/FilmsWrapper"));
export const ListWrapper = dynamic(() => import("./myList/ListWrapper"));
export const PopularWrapper = dynamic(() => import("./popular/PopularWrapper"));
export const SearchFilms = dynamic(() => import("./search/SearchFilms"));
export const SearchPopular = dynamic(() => import("./search/SearchPopular"));
export const SearchSeries = dynamic(() => import("./search/SearchSeries"));
export const SeriesWrapper = dynamic(() => import("./series/SeriesWrapper"));
export const Thumbnail = dynamic(() => import("./Thumbnail"));
export const MovieRow = dynamic(() => import("./MovieRow"));