import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams() //grap params from the route
    return ( 
        <div className="blog-details">
            <h2>Blog Details</h2>
        </div>
     );
}
 
export default BlogDetails ;