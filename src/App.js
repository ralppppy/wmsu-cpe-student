import "./App.css";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import StudentLayout from "./components/layout/StudentLayout/StudentLayout";

import { Home, Forum, Profile } from "./views";

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
            path="/profile/:userName"
            component={() => (
              <StudentLayout isProfile={true}>
                <Profile />
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
                <Forum />
              </StudentLayout>
            )}
          />
          <Route
            exact
            path="/forum/:forumCategory/:forumName/:threadName"
            component={() => (
              <StudentLayout>
                <Forum />
              </StudentLayout>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
