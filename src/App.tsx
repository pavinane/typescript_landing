import NavBar from "@/Scenes/navbar"
import { useEffect, useState } from "react"
import Home from "@/Scenes/Home";
import { SelectedPage } from "./shared/types"
import Benefits from "./Scenes/Benefits";
import OurClasses from "./Scenes/OurClasses";
import ContactUs from "./Scenes/Contact";




// tsrafce  => create typescript component


function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="App bg-gray-20">
       <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home  setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} selectedPage={""}  />
      <OurClasses  setSelectedPage={setSelectedPage} />
      <ContactUs  setSelectedPage={setSelectedPage}/>
    </div>
  )
}
export default App
