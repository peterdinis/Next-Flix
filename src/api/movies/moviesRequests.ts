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

  const { data, error } = useQuery(
    ["trendingMovies"],
    async () => {
      const trendingMovies = await axios.get(url);

      return trendingMovies.data;
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

export function useFetchNetflixOriginals() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`;

  const { data, error } = useQuery(
    ["netflixOriginals"],
    async () => {
      const originalMovies = await axios.get(url);

      return originalMovies.data;
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

export function useFetchTopRated() {
  const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

  const { data, error } = useQuery(
    ["topRatedMovies"],
    async () => {
      const topRatedMoviesRequest = await axios.get(url);

      return topRatedMoviesRequest.data;
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

export function useFetchTopActionMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`;

  const { data, error } = useQuery(
    ["topActionMovies"],
    async () => {
      const topActionMoviesRequest = await axios.get(url);

      return topActionMoviesRequest.data;
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

export function useFetchComedyMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`;

  const { data, error } = useQuery(
    ["topComedyMovies"],
    async () => {
      const topComedyMoviesRequest = await axios.get(url);

      return topComedyMoviesRequest.data;
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

export function useHororMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`;

  const { data, error } = useQuery(
    ["hororMovies"],
    async () => {
      const horrorMoviesRequest = await axios.get(url);

      return horrorMoviesRequest.data;
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

export function useFetchRomanceMovies() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`;

  const { data, error } = useQuery(
    ["romanceMovies"],
    async () => {
      const romanceMoviesRequest = await axios.get(url);

      return romanceMoviesRequest.data;
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

export function useFetchDocumentaries() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`;

  const { data, error } = useQuery(
    ["fetchDocumentaries"],
    async () => {
      const documentariesMoviesRequest = await axios.get(url);

      return documentariesMoviesRequest.data;
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

export function usePaginatedSeries(pageIndex: number) {
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageIndex}`;

  const { data, error } = useQuery(
    ["pagintedSeries", pageIndex],
    async () => {
      const pagintedSeriesRequest = await axios.get(url);

      return pagintedSeriesRequest.data;
    },
    {
      keepPreviousData: true,
      initialData: initialMovieData,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function usePaginatedPopular(pageIndex: number) {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageIndex}`;

  const { data, error } = useQuery(
    ["paginatedPopular"],
    async () => {
      const paginatedPopularRequest = await axios.get(url);

      return paginatedPopularRequest.data;
    },
    {
      keepPreviousData: true,
      initialData: initialMovieData,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export function usePaginatedFilms(pageIndex: number) {
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageIndex}`;

  const { data, error } = useQuery(
    ["paginatedFilms"],
    async () => {
      const paginatedFilmsRequest = await axios.get(url);

      return paginatedFilmsRequest.data;
    },
    {
      keepPreviousData: true,
      initialData: initialMovieData,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
