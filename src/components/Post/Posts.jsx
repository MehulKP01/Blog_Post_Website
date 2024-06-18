import { Link } from "react-router-dom"
import { posts } from "./postdata"

export default function Posts() {

    return (
        <div className="container text-center d-flex flex-column align-items-center">
            {
                posts.map((data, index) =>

                    <div className="card w-50 my-5 shadow-sm" key={index} style={{ maxWidth: "25rem" }}>
                        <img src={data.postImage} className="card-img-top mb-4" alt="postimage"></img>
                        <div className="card-header bg-transparent border-secondary"> <h5> {data.title}</h5></div>
                        <div className="card-body my-3">
                            <p className="card-text">{data.caption}</p>
                        </div>
                        <div className="card-footer bg-transparent border-secondary">
                            <div className="d-flex justify-content-between">
                                <small className="text-body-secondary">{data.user}</small>
                                <small className="text-body-secondary">{data.date}</small>
                            </div>
                            <Link to={`${data.id}`} className="link-underline link-underline-opacity-0"> Click Here -- </Link>
                        </div>
                    </div>

                )
            }
        </div>
    )
}