import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contacts">CONTACTS</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contacts" component={Contacts} />
              <Redirect path="/" to="/home" exact/>
              <Route render={() => <div>Page is not found</div>} />
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
