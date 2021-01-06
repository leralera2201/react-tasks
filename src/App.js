import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "@components/Header";

import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((options) => (
            <Route {...options} key={options.path} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
