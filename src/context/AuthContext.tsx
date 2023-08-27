import { auth } from "@/lib/firebase";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  User
} from "firebase/auth";
import {
  AuthContextType,
  AuthProviderProps,
  Unsubscribe,
  EmailAndPasswordCredentials,
} from "@/types/authTypes";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
  
    useEffect(() => {
      const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user ? (user as User) : null);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    useEffect(() => {
      console.log('The user is', currentUser);
    }, [currentUser]);
  
    function login(credentials: EmailAndPasswordCredentials) {
      return signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    }
  
    function register(credentials: EmailAndPasswordCredentials) {
      return createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
    }
  
    function forgotPassword(email: string) {
      return sendPasswordResetEmail(auth, email, {
        url: `http://localhost:3000/login`,
      });
    }
  
    function resetPassword(oobCode: string, newPassword: string) {
      return confirmPasswordReset(auth, oobCode, newPassword);
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
      forgotPassword,
      resetPassword,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };
  
  export default AuthContextProvider;