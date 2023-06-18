import React from "react";
import styled from "styled-components";
import UserProfile from "../Components/UserProfile";
import AdminNavbar from "../Components/AdminComponents/AdminNavbar";
import Home from "../Components/AdminComponents/Home";
import Sidebar from "../Components/AdminComponents/Sidebar";

const Profile = () => {
  return (
    <Container>
      <AdminNavbar />
      <div className="flex ">
        <Sidebar />
        <Home />
      </div>
    </Container>
  );
};

export const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

export default Profile;
