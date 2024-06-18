import React from "react";
import Home from "./Home";
import Footer from "../containers/Footer";
import NavigationBar from "../containers/NavigationBar";

export default function Layout() {
  return (
    <div className="">
        <NavigationBar/>
        <Home/>
        <Footer/>
    </div>
  );
}