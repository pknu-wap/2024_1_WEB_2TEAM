import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token) => {
    localStorage.setItem('rasyueToken', token);
};

export const getToken = () => {
    return localStorage.getItem('rasyueToken');
};

export function RequireToken({ children }) {
    const token = getToken();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}
