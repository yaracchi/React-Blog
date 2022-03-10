import Blog from './BlogList';
import useFetch from './useFetch';
 

const Home = () => {
    /*const handleClickArgument = (name, e) => {
        console.log(name, e.target)
    }
     <button onClick ={(e)=> {handleClickArgument('meow',e)} }>click me</button>
     const handleClick = (e) => {
         setName("lamia")
         setAge(23)
     }
     <button onClick = {handleClick}>click me</button>
     */
     //const [name, setName] = useState('yara');
     //<Blog blogs ={blogs.filter( (blog) => blog.author === "yara" )} title = "Yara's blogs" />
     // <button onClick={() => setName("lamia")}>change name</button>
     //const [name, setName] = useState('yara')
    /*const handleDelete = (id) => {
        //set new value of blogs to all except the id one deleted 
        const newblogs = blogs.filter(blog=> blog.id !== id )
        setBlogs(newblogs)
    }*/
    const {data :blogs,isPending,error} = useFetch('http://localhost:8000/blogs')

    //conditional rending: 2nd thing will run only id 1st is true
    return ( 
       <div className="home">
           {error && <div>{error}</div> }
           {isPending && <div>is loading...</div> }
           {blogs && <Blog blogs ={blogs} title = "All blogs" />}
       </div>
     );
}
 
export default Home;