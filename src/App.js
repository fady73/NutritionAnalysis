import React from "react";
import { Route } from "react-router-dom";
import Home from "./component/Home/Home";
import NutritionAnalysis from "./component/NutritionAnalysis/NutritionAnalysis";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class BooksApp extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/summary" render={() => <NutritionAnalysis />} />
      </div>
    );
  }
}

export default BooksApp;
