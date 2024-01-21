import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SiteRoute from "./SiteRoute";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <SiteRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
