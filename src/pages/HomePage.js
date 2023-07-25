import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Main2 from "../components/Main2";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
        <Nav/>
        <Main />
        <Main2 />
        <Footer />
    </div>
  )
}

export default HomePage;
