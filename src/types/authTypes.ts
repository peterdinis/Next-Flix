import { UserCredential } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  signInWithGoogle: () => Promise<UserCredential>;
  login: (credentials: EmailAndPasswordCredentials) => Promise<UserCredential>;
  register: (credentials: EmailAndPasswordCredentials) => Promise<UserCredential>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (oobCode: string, newPassword: string) => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface User extends UserCredential {}

export interface Unsubscribe {
  (): void;
}

export interface EmailAndPasswordCredentials {
  email: string;
  password: string;
}

export interface Auth {}