import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Items from "./Items";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [image, setImages] = useState("");
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://xivapi.com/Item");

    const items = await data.json();

    console.log(items.Results);

    setImages(items.Results[5].Icon);
  };

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/items" exact component={Items} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
