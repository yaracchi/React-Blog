import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  //const name = "yara";
  //const goal = "i will master react js"
  //var array_goal = ["blog, ","portfolio, ","food app, ","pet journaling", "personal budget"];
 // const link = "http://localhost:3000/"
  //router surround our entire application so all component inside it have access to route
  //switch where we want our page contetnt to go when we go to different pages
  //create a route for each page that we have
  //the navbar always shows so itrs outside
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="conetnt">
           <Switch>
             <Route exact path ="/">
                  <Home />
             </Route>
             <Route exact path ="/create">
                  <Create/>
             </Route>
             <Route exact path ="/blogs/:id">
                  <BlogDetails/>
             </Route>
             <Route exact path ="*">
                  <NotFound/>
             </Route>
           </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
