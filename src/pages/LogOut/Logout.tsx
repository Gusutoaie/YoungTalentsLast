import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hookt';
import { clearUser } from '../../slices/userSlice';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector((state: RootState) => state.user.token !== '');
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearUser());
        navigate('/login');
    }, [dispatch, navigate]);

    if (!isAuthenticated) {
        return <div>Logging out...</div>;
    }

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
}

export default LogoutPage;
