import { Navigate } from "react-router-dom";
import { loginContext } from "../App";
import { useContext } from "react";

export default function Protected({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useContext(loginContext)

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }
    else {
        return children;
    }

    
}