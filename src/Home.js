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
     // <button onClick={() => setName("lamia")}>change name</button>

    const [blogs, setBlogs] = useState(null)  
    const [isPending,setIsPending] = useState(true)
    //const [name, setName] = useState('yara')
    /*const handleDelete = (id) => {
        //set new value of blogs to all except the id one deleted 
        const newblogs = blogs.filter(blog=> blog.id !== id )
        setBlogs(newblogs)
    }*/
    useEffect(() => {
        //can use async function and await to fitch
        //get request
        //its asynchronis
        setTimeout(() => { //simulate a real get request that takes time
            fetch('http://localhost:8000/blogs') //return a promise
        .then(res => {
            return res.json() //its asynchronis

        }) //access promise
        .then( (data) => {
             setBlogs(data)
             setIsPending(false)
        })
        }, 1000);
        

    }, []);
    //conditunal rending: 2nd thing will run only id 1st is true
    return ( 
       <div className="home">
            {isPending && <div>is loading...</div> }
            { blogs && <Blog blogs ={blogs} title = "All blogs" />}
       </div>
     );
}
 
export default Home;