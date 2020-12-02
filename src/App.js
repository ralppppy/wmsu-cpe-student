import "./App.css";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import StudentLayout from "./components/layout/StudentLayout/StudentLayout";

import Home from "./views/Home";
import Forum from "./views/Forum";
import ForumSingle from "./components/forum/ForumSingle";

function App() {
  document.querySelector("#root").classList.add("dark:bg-gray-background");
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <StudentLayout>
                <Home />
              </StudentLayout>
            )}
          />
          <Route
            exact
            path="/forum"
            component={() => (
              <StudentLayout>
                <Forum />
              </StudentLayout>
            )}
          />
          <Route
            exact
            path="/forum/:forumCategory/:forumName"
            component={() => (
              <StudentLayout>
                <ForumSingle />
              </StudentLayout>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
