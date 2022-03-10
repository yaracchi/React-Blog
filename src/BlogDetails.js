import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams() //grap params from the route
    const {data :blog,isPending,error} = useFetch('http://localhost:8000/blogs/'+id)

    return ( 
        <div className="blog-details" >
            {isPending && <div>Loading...</div> }
            {error && <div>{error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>   
                    <p>{blog.body }</p>               
                    <p>written by{blog.author}</p>
                </article>

            )}
               
        </div>
     );
}
 
export default BlogDetails ;