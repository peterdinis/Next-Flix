import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { toast } from "react-hot-toast";
import prismadb from "@/lib/prisma";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || credentials.password) {
          toast.error("Email and password are required");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.hashPassword) {
          toast.error("Email does not exists");
          throw new Error("Email does not exists");
        }

        const isCorrectPassword = await compare(
          credentials?.password as unknown as string,
          user.hashPassword
        );

        if (!isCorrectPassword) {
          toast.error("Incorret password");
          throw new Error("Incorrect password");
        }

        return {
          id: user.id as unknown as string,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prismadb),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
