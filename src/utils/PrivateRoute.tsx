import React from 'react';
import { useAppSelector } from '../hookt';
import { RootState } from '../store';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const isAuthenticated = useAppSelector((state: RootState) => state.user.token !== '');

    return isAuthenticated ? children : <Navigate to="/404" replace />;
}

export default PrivateRoute;
