import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { setIsAuthModal } from 'features/AuthByUsername';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { authData, isLoading } = useSelector((state: RootState) => state.user);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (!authData) {
            dispatch(setIsAuthModal(true));
        }
    }, [authData, dispatch]);

    if (isLoading) {
        return <Loader />;
    }

    if (!authData) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
