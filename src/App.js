import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import SigUp from './pages/SignUp';
import Booking from './pages/Booking';
import ListBooking from './pages/ListBooking';
import RoomMap from './pages/RoomMap';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signup">
          <SigUp />
        </Route>
        <Route path="/search/:keyword/:id">
          <Search />
        </Route>
        <Route path="/room_map">
          <RoomMap />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/listbooking">
          <ListBooking />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
