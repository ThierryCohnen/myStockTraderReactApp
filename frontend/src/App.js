// import "./App.css";
import {
    Switch,
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
function App() {
    return (
        <div className="App" style={{ backgroundColor: "white" }}>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    {/* <Redirect from="/home" to="/" /> */}
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;