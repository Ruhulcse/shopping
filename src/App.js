import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./screens/Login";
import MainScreen from "./screens/MainScreen";
import Registration from "./screens/Registration";



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;
