import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')


    return (  
        <div className="create"> 
            <h2> Add a new blog</h2>
            <form >
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

                <button> Add blog</button>
            </form>
        </div>
    );
}
 
export default Create;