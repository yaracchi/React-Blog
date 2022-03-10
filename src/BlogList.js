import {Link} from "react-router-dom"; // so reacts handle routing and not browser


const Blog = ({blogs, title}) => {
    //const blogs = props.blogs
    //const title = props.title
    // a template string === `
    return ( 
       <div className='blog-list'>
        <h2>{title}</h2>   
        {blogs.map((blog)=> (
            <div className="blog" key={blog.id}>
                <Link to ={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>   
                <p>{blog.body }</p>
                </Link>
               
                <p> written by {blog.author}</p>
            </div>
        )) } 
       </div>

     );
}
 
export default Blog;