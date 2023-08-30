import { Fetcher } from "swr";

export const TOP_OFFSET: number = 66;
export const BASE_URL: string = "https://api.themoviedb.org/3";
export const baseUrl: string = "https://image.tmdb.org/t/p/original";
export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY as unknown as string;

export const initialMovieData = {
    name: "Custom Name",
    description: "Custom Description",
}

export const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());