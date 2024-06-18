import { useParams } from "react-router-dom"
import { posts } from "./postdata";

export default function PostDetails() {

    const { id } = useParams()

    const PostDetailsData = posts.filter((value) => (value.id == id))
    console.log(PostDetailsData);
    return (
        <ul>

            {PostDetailsData.map((value, index) =>

                <div class="card mt-5 w-50" style={{ width: "18rem" }} key={index}>
                    <img src={value.postImage} class="card-img-top" alt="postimage" />
                    <div class="card-body">
                        <h5 class="card-title fs-3">{value.title}</h5>
                        <p class="card-text fs-4">{value.caption}</p>
                        <h6 className="card-subtitle mb-4 fs-5 text-body-secondary">{value.user}</h6>
                        <h6 className="card-subtitle mb-4 fs-5 text-body-secondary">{value.date}</h6>
                    </div>
                </div>
            )}
        </ul>
    )
}