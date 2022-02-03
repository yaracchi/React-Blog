import Navbar from './Navbar';
import Home from './Home';

function App() {
  const name = "yara";
  const goal = "i will master react js"
  var array_goal = ["blog, ","portfolio, ","food app, ","pet journaling", "personal budget"];
  const link = "http://localhost:3000/"

  return (
    <div className="App">
      <Navbar />
      <div className="conetnt">
         <Home />
      </div>
    </div>
  );
}

export default App;
