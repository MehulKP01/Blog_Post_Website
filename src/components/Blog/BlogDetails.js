import { useParams } from "react-router-dom"
import { blogs } from "./blogdata"

export default function BlogDetails() {

    const { id } = useParams()

    const blogDetailsData = blogs.filter((value) => (value.id == id))
    return (
        <ul>

            {blogDetailsData.map((value, index) =>

                <div className="card mt-5 w-100 text-center p-5" style={{ width: "18rem" }} key={index}>
                    <div className="card-body">
                        <h5 className="card-title mb-4 fs-3">{value.title}</h5>
                        <h6 className="card-subtitle mb-4 fs-5 text-body-secondary">{value.author}</h6>
                        <h6 className="card-subtitle mb-4 fs-5 text-body-secondary">{value.date}</h6>
                        <p className="card-text fs-5">{value.content}</p>

                    </div>
                </div>
            )}
        </ul>
    )
}