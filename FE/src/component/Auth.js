import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token) => {
    localStorage.setItem('rasyueToken', token);
};

export const getToken = () => {
    return localStorage.getItem('rasyueToken');
};

export function RequireToken({ children }) {
    let auth = getToken(); // getToken을 사용하여 토큰 가져오기
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}
