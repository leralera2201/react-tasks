import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "@components/Header";

import Buttons from "./pages/Buttons";
import Typography from "./pages/Typography";
import Dropdown from "./pages/Dropdown";
import Select from "./pages/Select";
import Alert from "./pages/Alert";


function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/" exact component={Buttons}/>
            <Route path="/typography" exact component={Typography}/>
            <Route path="/dropdown" exact component={Dropdown}/>
            <Route path="/select" exact component={Select}/>
            <Route path="/alert" exact component={Alert}/>
        </Switch>
    </div>
  );
}

export default App;
