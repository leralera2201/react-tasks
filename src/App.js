import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer, Header } from "@components";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import BookForm from "./pages/Book/BookForm";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="wrapper">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/books"} exact component={Books} />
          <Route path={"/books/create"} exact component={BookForm} />
          <Route path={"/books/:id"} exact component={Book} />
          <Route path={"/books/:id/update"} exact component={BookForm} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
