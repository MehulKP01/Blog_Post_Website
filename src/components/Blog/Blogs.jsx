import { Link } from "react-router-dom";
import { blogs } from "./blogdata";

export default function Blogs() {

    return (
        <div className="container d-flex flex-column align-items-center">
            {
                blogs.map((data, index) =>

                    <div className="card w-50 my-5 p-4 shadow-sm" key={index}>
                        <div className="card-header bg-transparent border-secondary"> <h5> {data.title}</h5></div>
                        <div className="card-body my-3">
                            <p className="card-text">{data.content}</p>
                        </div>
                        <div className="card-footer bg-transparent border-secondary">
                            <div className="d-flex justify-content-between">
                                <small className="text-body-secondary">{data.author}</small>
                                <small className="text-body-secondary">{data.date}</small>
                                <Link to={`${data.id}`} className="link-underline link-underline-opacity-0"> Click Here -- </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}