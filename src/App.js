import "./App.css";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Recipe from "./components/Recipe/Recipe";
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Results />
        <Recipe />
      </div>
    </Router>

  );
}

export default App;
