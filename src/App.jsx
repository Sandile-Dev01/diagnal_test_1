import React from "react";
import Navbar from "./components/navbar/Navbar";
import Content from "./pages/Content";
import "./app.css";
import Img from "./pages/assets/poster4.jpg";
import Img2 from "./pages/assets/poster2.jpg";
import Img3 from "./pages/assets/poster3.jpg";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <div className="movie_content">
        <Content src={Img} />
        <Content src={Img2} />
        <Content src={Img3} />
      </div>
    </div>
  );
};

export default App;
