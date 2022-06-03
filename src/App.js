import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import ReactDOM from "react-dom";
import Movies from "./Movies";
import MoviesDetail from "./MoviesDetail";

function App() {
  return (
    <div className="app">
   
      <div class="w3-bar w3-large w3-theme-d4">
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-bars"></i></a>
  <span class="w3-bar-item">   <Link to="/">Home</Link></span>
  <span class="w3-bar-item">   <Link to="/movies">Movies</Link></span>
  
</div>

      <Switch>
        <Route exact path="/"  >
        <Home /></Route>
        
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route path="/detail/:id">
          <MoviesDetail />
        </Route>
      </Switch>
      {/*
                Route between 2 components depending on the path:
                1. Home page ("/")
                2. Products Page ("/products")
                
                ** Home Page **
                • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself as a developer
                
                ** Products Page **
                • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
            */}
    </div>
  );
}

export default App;
