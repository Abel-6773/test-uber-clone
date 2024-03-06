import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/HomePage/AboutUs";
import AppSection from "../Components/HomePage/AppSection";
import Hero from "../Components/HomePage/Hero";
import Input from "../Components/HomePage/Input";
import ToTopBtn from "../Components/HomePage/ToTopBtn";

export default function HomePage({ HamMenuActive }) {
  console.log(HamMenuActive);
  return (
    !HamMenuActive && (
      <main>
        <Hero />
        {/* <ToTopBtn /> */}
        <AboutUs />
        <AppSection />
        <Footer />
      </main>
    )
  );
}
