import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import App from "./App.jsx";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="pageWrapper">
        <Nav />
        <main className="mainContent">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);