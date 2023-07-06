import React from "react";
import Navbar from "./components/navbar/Navbar";
import Content from "./pages/Content";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="movie_content">
        <Content />
        <Content />
        <Content />
      </div>
    </>
  );
};

export default App;
