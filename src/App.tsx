import NavBar from "@/scenes/NavBar";
import Home from "@/scenes/Home";
import OurClasses from "./scenes/OurClasses";
import Benefits from "./scenes/Benefits";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  const [isTopOfPage, setTopOfPage] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        if (window.scrollY !== 0) setTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
