

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
                <a href="/" >Home</a>
                <a href="/create" >New Blog</a>
            </div>
        </nav>

     );
}
 
export default Navbar;