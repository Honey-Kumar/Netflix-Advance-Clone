import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Netflix from "./Pages/Netflix";
import ForoFor from "./Pages/ForoFor";
import MovieInfomation from "./Pages/MovieInfomation";
import Kids from "./Pages/Kids";
import TvShows from "./Pages/TvShows";
import Offers from "./Pages/Offers";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Admin from "./Admin/admin";
import Adminlogin from "./Admin/Adminlogin";
import MyList from "./Pages/MyList";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route extact path="/login" element={<Login />} />
          <Route extact path="/signup" element={<SignUp />} />
          <Route extact path="/" element={<Netflix />} />
          <Route extact path="/*" element={<ForoFor />} />
          <Route
            extact
            path="/movieinformation/:id"
            element={<MovieInfomation />}
          />
          <Route extact path="/kids" element={<Kids />} />
          <Route extact path="/mylist" element={<MyList />} />
          <Route extact path="/tv" element={<TvShows />} />
          <Route extact path="/offers" element={<Offers />} />
          <Route extact path="/movies" element={<Movies />} />
          <Route extact path="/search" element={<Search />} />
          <Route extact path="/profile" element={<Profile />} />
          <Route extact path="/adminlogin/admin" element={<Admin />} />
          <Route extact path="/adminlogin" element={<Adminlogin />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
