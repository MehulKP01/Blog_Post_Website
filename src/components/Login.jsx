import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../App";



export default function Login() {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useContext(loginContext)

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("RegisterUser", JSON.stringify([{ name: "vishal", password: 123 }, { name: "jay", password: 111 }]))
  }, [])


  function handleLogin(e) {
    e.preventDefault()

    let loginDetails = JSON.parse(localStorage.getItem("RegisterUser"))

    if (loginDetails.find((value) => (value.name === username && value.password === parseInt(password)))) {

      localStorage.setItem("LoggedUser", true)
      setIsLoggedIn(true)
      navigate("/")
    }
    else {
      setUserName("")
      setPassword("")

    }
  }

  return (
    <div className="container border rounded-4 mt-5 w-50 p-5 shadow-sm bg-light">
      <h4>Login Form</h4>
      <div className="row">
        <div className="col-12">
          <div className="w-50 mt-5 ms-5 ">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="btn btn-secondary" onClick={handleLogin}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

