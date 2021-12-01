import "./App.css";
import { Homepage } from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Details } from "./Details";
import "./Homepage.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} className="home-page" />
                    <Route path="/planets" >
                        <Route path=":planet" element={<Details />} />
                    </Route>
                </Routes>
            </Router>
            
        </div>
    );
}

export default App;
