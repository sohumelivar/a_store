import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'app/providers/StoreProvider';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProtectedRouteAuthProps {
    children: React.ReactNode;
}

export const ProtectedRouteAuth = ({ children }: ProtectedRouteAuthProps) => {
    const { authData, isLoading } = useSelector((state: RootState) => state.user);

    if (isLoading) {
        return <Loader />;
    }

    if (authData) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};
