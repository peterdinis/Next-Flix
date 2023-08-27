"use client"

import { useRouter } from 'next/navigation';
import { useEffect, ComponentType } from 'react';
import { useAuth } from '@/hooks/useAuth';

const PrivateRoute = <T extends object>(WrappedComponent: ComponentType<T>) => {
  return (props: T) => {
    const router = useRouter();

    const {currentUser} = useAuth();

    useEffect(() => {
      if (!currentUser) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default PrivateRoute;