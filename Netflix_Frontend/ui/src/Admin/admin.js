import React from "react";
import styled from "styled-components";
import AdminNavbar from "../Components/AdminComponents/AdminNavbar";
import Sidebar from "../Components/AdminComponents/Sidebar";
import Home from "../Components/AdminComponents/Home";

const Admin = () => {
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

export default Admin;
