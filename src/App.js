import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "@components/Header";

import Buttons from "./pages/Buttons";
import Typography from "./pages/Typography";
import Dropdown from "./pages/Dropdown";
import Select from "./pages/Select";
import Alert from "./pages/Alert";
import SwitchPage from "./pages/Switch";
import Spin from "./pages/Spin";
import Progress from "./pages/Progress";
import Modal from "./pages/Modal";
import Notification from "./pages/Notification";


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
            <Route path="/switch" exact component={SwitchPage}/>
            <Route path="/spin" exact component={Spin}/>
            <Route path="/progress" exact component={Progress}/>
            <Route path="/modal" exact component={Modal}/>
            <Route path="/notification" exact component={Notification}/>
        </Switch>
    </div>
  );
}

export default App;
