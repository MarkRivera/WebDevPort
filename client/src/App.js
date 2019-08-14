import React, { Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Resume from "./components/layout/Resume";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <section>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
