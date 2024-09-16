import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { ContactUsPage } from "./pages/ContactUs"
import { Product } from "./pages/Product"
import { NotFoundPage } from "./pages/NotFoundPage"
import NavBar from "./components/global/NavBar"
import { AboutUs } from "./pages/AboutUs"
import { Products } from "./pages/Products"
import { Footer } from "./components/global/Footer"
import { TermsUse } from "./pages/TermsUse"
import { TermsSale } from "./pages/TermsSale"
import { Privacy } from "./pages/Privacy"
import { CheckoutPage } from "./pages/CheckoutPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FlowButtons } from "./components/global/FlowButtons"
import { useContext } from "react"
import { ThemeContext } from "./contextApp/themeMode"
import CookieConsent from "react-cookie-consent";
import { IStaticMethods } from 'preline/preline';


function App() {
  document.addEventListener("livewire:navigating", () => {
    IStaticMethods.autoInit();
});

document.addEventListener("livewire:navigated", () => {
  IStaticMethods.autoInit();
});




  const {theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<ContactUsPage />} path="/contactUs" />
        <Route element={<Products />} path="/products" />
        <Route element={<Product />} path="/products/:id" />
        <Route element={<NotFoundPage />} path="/*" />
        <Route element={<TermsUse />} path="/Terms-of-use" />
        <Route element={<Privacy />} path="/Privacy-and-Policy" />
        <Route element={<TermsSale />} path="/Terms-of-sale" />
        <Route element={<CheckoutPage />} path="/checkout/:name/:price/:id" />
        <Route element={<NotFoundPage />} path="/*" />
      </Routes>
      <Footer/>
      <ToastContainer />
      <FlowButtons />
      <CookieConsent
  buttonText="I understand"
  cookieName="myAwesomeCookieName2"
  style={{
    background: "#e74823",
    zIndex:'500000000',
    borderTop: '5px solid #181b50'
  }}
  buttonStyle={{
    background: "white",
    color: "#e74823",
    borderRadius:"25px",
    fontWeight: "bolder",
  }}
>
  This website uses cookies to enhance the user experience.{" "}
</CookieConsent>
    </div>
  )
}

export default App
