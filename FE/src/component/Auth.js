/* 토큰 setter와 getter? */
import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token) => {
    localStorage.setItem('rasyueToken', token)
}
export const getToken = (token) => {
    return localStorage.getItem('rasyueToken')
}
export function RequireToken({ children }) {

    let auth = fetch();/* fetchToken() */
    let location = useLocation();

    if (!auth) {

        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}