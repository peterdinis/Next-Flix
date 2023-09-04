"use client";

import { auth } from "@/firebase";
import { FC, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import {
  AuthContextType,
  AuthProviderProps,
  Unsubscribe,
  EmailAndPasswordCredentials,
} from "@/types/authTypes";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? (user as User) : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function login(credentials: EmailAndPasswordCredentials) {
    return signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
  }

  function register(credentials: EmailAndPasswordCredentials) {
    return createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
  }

  function logout() {
    return signOut(auth);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const value: AuthContextType = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
