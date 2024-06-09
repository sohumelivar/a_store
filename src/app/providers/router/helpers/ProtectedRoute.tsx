import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'app/providers/StoreProvider';
import { setIsAuthModal } from 'features/AuthByUsername';
import { Loader } from 'shared/ui/Loader/Loader';
import { checkUser } from 'entities/User';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { authData, isLoading } = useSelector((state: RootState) => state.user);

    if (isLoading) {
        return <Loader />;
    }

    if (!authData) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
