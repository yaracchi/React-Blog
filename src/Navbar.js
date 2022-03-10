
import {Link} from "react-router-dom"; // so reacts handle routing and not browser

const Navbar = () => {
    /*inside styling*/
    const css_object ={
        color : "white",
        backgroundColor : '#f1356d',
        borderRadius : '8px'
    }
    
    return ( 
        //tempalte
        <nav className="navbar">
            <h1>The Ninja Cat Blog</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>

     );
}
 
export default Navbar;