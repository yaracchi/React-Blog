import { useEffect, useState } from 'react';
import Blog from './BlogList';


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
    const [blogs, setBlogs] = useState([
        {title:'Machine learning introduction', body: 'hey......', author:'yara', id:1},
        {title:'Machine learning introduction', body: 'hey......', author:'sara', id:2},
        {title:'Machine learning introduction', body: 'hey......', author:'yara', id:3}

    ])  
    const [name, setName] = useState('yara')
    const handleDelete = (id) => {
        //set new value of blogs to all except the id one deleted 
        const newblogs = blogs.filter(blog=> blog.id !== id )
        setBlogs(newblogs)
    }

    useEffect(() => {
        console.log("useeffect runs")

    }, [name]); 
    return ( 
       <div className="home">
            <Blog blogs ={blogs} title = "All blogs" handleDelete = {handleDelete}/>
            <h2>{name}</h2>
            <button onClick={() => setName("lamia")}>change name</button>
       </div>
     );
}
 
export default Home;