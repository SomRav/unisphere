import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default RootLayout;
