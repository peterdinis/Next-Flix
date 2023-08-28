import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
  client: {
    FIREBASE_API_KEY: z.string().min(1),
    FIREBASE_AUTH_DOMAIN: z.string().min(1),
    FIREBASE_PROJECT_ID: z.string().min(1),
    FIREBASE_STORAGE_BUCKET: z.string().min(1),
    FIREBASE_MESSAGINGSENDER_ID: z.string().min(1),
    FIREBASE_APP_ID: z.string().min(1),
    FIREBASE_MEASUREMENT_ID: z.string().min(1)
  },
  runtimeEnv: {
    TMDB_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    TMDB_READ_ACCESS_TOKEN: process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN,
    FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGINGSENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER_ID,
    FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  },
});