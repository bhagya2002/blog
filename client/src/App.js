import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from "./Context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={user ? Home : Login} />
        <Route path="/post/:postId" component={Single} />
        <Route path="/write" component={user ? Write : Register} />
        <Route path="/register" component={user ? Home : Register} />
        <Route path="/settings" component={user ? Settings : Register} />
      </Switch>
    </Router>
  );
}

export default App;
