import React from "react";
import ScrollTop from "./componentsHome/ScrollTop";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import CemartGroup from "./pages/CemartGroup";
import ContactUs from "./pages/ContactUs";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import NavBar from "./componentsHome/NavBar";
import Project1 from "./pages/Projects/Project1";
import Project2 from "./pages/Projects/Project2";


function App() {
  // const { t, i18n } = useTranslation();

  // const toggleLanguage = () => {
  //   const newLang = i18n.language === 'ar' ? 'en' : 'ar';
  //   i18n.changeLanguage(newLang);
  //   document.body.className = newLang === 'ar' ? 'rtl' : 'ltr';
  // };

  // useEffect(() => {
  //   document.body.className = i18n.language === 'ar' ? 'rtl' : 'ltr';
  // }, [i18n.language]);

  return (
    
    <BrowserRouter>
    <ScrollTop />
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutUs />}/>
    <Route path="/work" element={<Work />}/>
    <Route path="/cemart" element={<CemartGroup />}/>
    <Route path="/PromoContent-DWOC" element={<Project1/>}/>
    <Route path="/DOWC-Highlights" element={<Project2/>}/>
    <Route path="/contact" element={<ContactUs />}/>
    <Route path="/policy" element={<Policy />}/>
    <Route path="/terms" element={<Terms />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

// {/* <h1>{t('welcome')}</h1>
//       <p>{t('description')}</p>
//       <button onClick={toggleLanguage}>
//         {i18n.language === 'ar' ? 'English' : 'العربية'}
//       </button> */}
