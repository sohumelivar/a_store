import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { setIsAuthModal } from 'features/AuthByUsername';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const dispatch: AppDispatch = useDispatch();
    const { authData } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (!authData) {
            dispatch(setIsAuthModal(true));
        }
    }, [authData, dispatch]);

    if (!authData) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
