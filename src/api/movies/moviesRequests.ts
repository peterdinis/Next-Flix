import {
  BASE_URL,
  API_KEY,
  initialMovieData,
} from "@/constants/applictionConstants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAllMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

  const { data, error } = useQuery(
    ["allMovies"],
    async () => {
      const allMoviesRequests = await axios.get(url);

      return allMoviesRequests.data;
    },
    {
      initialData: initialMovieData,
      refetchOnMount: true,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTopTrendingMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;
  const { data, error } = useQuery(
    ["topTrendingMovies"],
    async () => {
      const topTrendingMoviesRequest = await axios.get(url);

      return topTrendingMoviesRequest.data;
    },
    {
      initialData: initialMovieData,
      refetchOnMount: true,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function useFetchTrendingMovies() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

  const {data, error} = useQuery(["trendingMovies"], async() =>{
    const trendingMovies = await axios.get(url);

    return trendingMovies.data;
  }, {
      initialData: initialMovieData,
      refetchOnMount: true,
  })

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
