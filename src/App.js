import React, { createContext, useState } from 'react';


import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Events from './Component/Events/Events';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { Form } from 'react-bootstrap';
import Forms from './Component/Forms/Forms';
import SelectedEvent from './Component/SelectedEvent/SelectedEvent';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
<Router>
<Header></Header>
<Switch>

<Route path="/home">
<Home/>
</Route>
<Route path="/donation">
<Donation/>
</Route>
<Route path="/events">
<Events/>
</Route>
<Route path="/blog">
<Blog/>
</Route>
<Route path="/selectedEvent">
<SelectedEvent></SelectedEvent>
</Route>
<Route path="/login">
<Login></Login>
</Route>
<PrivateRoute path="/forms/:btn">
<Forms></Forms>
</PrivateRoute>
<Route exact path="/">
<Home/>
</Route>
</Switch>
</Router>
  
  
</UserContext.Provider>
</div>
  );
}

export default App;
