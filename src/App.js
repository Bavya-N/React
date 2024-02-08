import AboutUs from "./About-us/About-us";
// import logo from "./assests/1.jpeg"
import Banner from "./Banner/Banner";
import ContactUs from "./Contact&Map/Contact";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Why from "./why-Choose-Us/why-choose";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <AboutUs />
      <Why />
      <Services />
      <Projects />
      <Testimonial />
      <ContactUs/>
      <Footer/>
      {/* <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/Bannercomp" element={<Banner />} />
        <Route path="/AboutUscomp" element={<AboutUs />} />
      </Routes> */}

      {/* <img className="h-12 w-12" src={logo} alt="ChitChat Logo"/> */}
    </div>
  );
}

export default App;
