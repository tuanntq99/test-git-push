import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React, { useEffect, useState } from "react";

function App() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the Navigation component
    const navigationHeight = document.getElementById("navigation").offsetHeight;
    setNavHeight(navigationHeight);
  }, []);

  return (
    <main>
      <Navigation />
      <Main isFixed={navHeight < 96} />
      <Footer />
    </main>
  );
}

export default App;
