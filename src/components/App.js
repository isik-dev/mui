import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Create } from "./Create";
import { Notes } from "./Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Create} />
      <Route path="/notes" exact component={Notes} />
    </BrowserRouter>
  );
};

export default App;
