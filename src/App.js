import React, { useState } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import YourAccount from "./components/youracc";
import Fashion from "./components/fashion";
import Wear from "./components/fashionWear";
import Groceries from "./components/groceries";
import Food from "./components/food";
import GrocList1 from "./components/grocList1";
import FoodList1 from "./components/foodList1";
import Books from "./components/books";
import Saloon from "./components/saloon";
import Saloon1 from "./components/Saloon1";

function App() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <Router>
      <div className="App p-0">
        <ScrollToTop>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/YourAccount">
              <YourAccount />
            </Route>
            <Route path="/Fashion">
              <Fashion />
            </Route>
            <Route path="/Wear">
              <Wear />
            </Route>
            <Route path="/Groceries">
              <Groceries />
            </Route>
            <Route path="/Food">
              <Food />
            </Route>
            <Route path="/GrocList1">
              <GrocList1 />
            </Route>
            <Route path="/FoodList1">
              <FoodList1 />
            </Route>
            <Route path="/Books">
              <Books />
            </Route>
            <Route path="/Saloon">
              <Saloon />
            </Route>
            <Route path="/Saloon1">
              <Saloon1 />
            </Route>
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
