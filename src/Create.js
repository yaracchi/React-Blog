import { useState } from "react";
import { useHistory } from "react-router-dom"; 

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)//when submit the form become true
    const history = useHistory() //go back to a certain level to redirect the user to a new route
   
   
    const handleSubmit = (e) => {
        //prevent the default action to refresh the page when submit
        e.preventDefault()
        const blog = {title, body, author}
        //set it true when we submit, means it loads what we gave as data
        setIsPending(true)
        
        //here send a post request to add the enw object to our data file
       //can add this part to fetch hook
        fetch('http://localhost:8000/blogs', { //endpoint we need to use to make a post request
            method: 'POST',
            headers: {"Content-Type": "application/json"},//we sending Json data with the methode request
            body: JSON.stringify(blog) //the actuel data we sendign with this requets
        }) /////this is asychronist bloc
        .then(() => {
            console.log("new blog added")
            setIsPending(false)//when compleet uploading
              // history.go(-1)
            history.push('/') //redirect to home page
        }) 
     
    }

    return (  
        <div className="create"> 
            <h2> Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                 type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog body</label>
                <textarea required 
                 value={body} 
                 onChange={(e) => setBody(e.target.value)} />

                <label>Blog author</label>
                <select 
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="yara">yara</option>
                    <option value="lamia">lamia</option>
                </select>

                { !isPending && <button> Add blog</button>}
                { isPending && <button> Adding blog...</button>}

            </form>
        </div>
    );
}
 
export default Create;