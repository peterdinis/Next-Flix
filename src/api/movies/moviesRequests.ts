import useSWR, { Fetcher } from "swr";

export const baseUrl = "https://image.tmdb.org/t/p/original";

const initialMovieData = {
  name: "Custom Name",
  description: "Custom Description",
};

const BASE_URL = "https://api.themoviedb.org/3";

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;


export function useFetchTopTrendingSlovakiaMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=sk-SK`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTopTrendingMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTrendingMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchNetflixOriginals() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTopRated() {
  const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTopActionMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`;

  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchComedyMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useHororMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchRomanceMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`;

  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchDocumentaries() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`;
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: initialMovieData,
    revalidateOnMount: true,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}