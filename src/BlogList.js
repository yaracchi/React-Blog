

const Blog = ({blogs, title,handleDelete}) => {
    //const blogs = props.blogs
    //const title = props.title
    return ( 
       <div className='blog-list'>
        <h2>{title}</h2>   
        {blogs.map((blog)=> (
            <div className="blog" key={blog.id}>
                 <h2>{blog.title}</h2>   
                <p> written by {blog.body }</p>
                <p>{blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        )) } 
       </div>
          

     );
}
 
export default Blog;