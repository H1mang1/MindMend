import Navbar from "./components/Navigation/Navbar";
import Hero from "./components/Hero";
import Patients from "./components/Patients";
import Providers from "./components/Providers";
import Testimonials from "./components/Testimonials";
import Offers from "./components/Offers";
import Faqs from "./components/Faqs";
import Buy from "./components/Buy";
import Footer from "./components/Footer";
import SideDrawer from "./components/Navigation/SideDrawer";
function Home() {
    return (
      <>
      <SideDrawer/>
        <Navbar/>
        <Hero/>
        <Patients/>
        <Providers/>
        <Testimonials/>
        <Offers/>
        <Faqs/>
        <Buy/>
        <Footer/>
      </>
    )
  }
  
  export default Home;
  