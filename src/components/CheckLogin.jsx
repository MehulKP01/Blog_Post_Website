import { Navigate } from "react-router-dom";

export default function CheckLogin({ children }) {

    let data = localStorage.getItem("LoggedUser")
    if (!data) {
        return children;
    }
    else {
        return <Navigate to="/" />
    }
}
