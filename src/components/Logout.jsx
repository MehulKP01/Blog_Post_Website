import { useNavigate } from "react-router-dom"
import { loginContext } from "../App"
import { useContext } from "react"

export default function Logout() {
    const [isLoggedIn, setIsLoggedIn] = useContext(loginContext)

    const navigate = useNavigate()
    localStorage.removeItem("LoggedUser")
    setIsLoggedIn(false)

    return navigate("/login")

}