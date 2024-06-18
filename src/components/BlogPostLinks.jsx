import { useContext } from "react";
import { Link, Outlet } from "react-router-dom"
import { loginContext } from "../App";

export default function BlogPostLinks() {

    const [isLoggedIn, setIsLoggedIn] = useContext(loginContext)
    
    return (
        <>
            <nav className='navbar navbar-responsive position-sticky bg-secondary top-0 z-3'>
                <ul className="container list-unstyled p-2 fs-4">
                    <div className="row">
                        <div className="col-6 d-flex gap-4">
                            <li>
                                <Link to="/" className='link-underline link-underline-opacity-0 text-light'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link-underline link-underline-opacity-0 text-light'>About</Link>
                            </li>
                            {
                                (isLoggedIn) &&
                                <>
                                    <li>
                                        <Link to="/blogs" className='link-underline link-underline-opacity-0 text-light'>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/posts" className='link-underline link-underline-opacity-0 text-light'>Posts</Link>
                                    </li>
                                </>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {
                                (isLoggedIn) ?
                                    <li>
                                        <Link to="/logout" className='link-underline link-underline-opacity-0 text-light'>Logout</Link>
                                    </li>
                                    :
                                    <li>
                                        <Link to="/login" className='link-underline link-underline-opacity-0 text-light'>Login</Link>
                                    </li>
                            }
                        </div>
                    </div>
                </ul>
            </nav>

            <Outlet />
        </>



    );
}
