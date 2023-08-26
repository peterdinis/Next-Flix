import { QueryClient } from "@tanstack/react-query";
import { queryCache } from "./cache/queryCache";

const twentyFourHoursInMs: number = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      staleTime: twentyFourHoursInMs,
    },
  },
});