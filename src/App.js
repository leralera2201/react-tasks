import React from "react";
import { Switch, Route } from "react-router-dom";

import { Footer, Header } from "./components";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/books"} exact component={Books} />
          <Route path={"/books/:id"} exact component={Book} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
