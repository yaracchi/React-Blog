import { useState } from 'react';
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
     const [blogs, setBlogs] = useState([
        {title:'Machine learning introduction', body: 'hey......', author:'yara', id:1},
        {title:'Machine learning introduction', body: 'hey......', author:'yara', id:2},
        {title:'Machine learning introduction', body: 'hey......', author:'yara', id:3}

    ])  
    return ( 
    
       <Blog blogs ={blogs} title = "All blogs" />
       <Blog blogs ={blogs.filter( (blog) => blog.author=== "yara")} title = "All blogs" />

     );
}
 
export default Home;