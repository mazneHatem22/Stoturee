import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./componentsHome/i18n"; // استيراد ملف الإعدادات
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./responsive.css"
AOS.init(); // Initialize AOS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
