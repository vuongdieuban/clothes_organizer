import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Clothing from "./components/clothing";
import OutfitForm from "./components/outfitForm";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/outfit/:id" component={OutfitForm} />
          <Route exact path="/" component={Clothing} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
