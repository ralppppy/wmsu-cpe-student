import "./App.css";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Temp from "./Temp";

function App() {
  document.querySelector("#root").classList.add("dark:bg-black");
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Temp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
