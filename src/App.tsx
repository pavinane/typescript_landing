import NavBar from "@/Scenes/navbar"
import { useState } from "react"
import { SelectedPage } from "./shared/types"




function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <div className="App bg-gray-20">
      <NavBar
         selectedPage={selectedPage}  
         setSelectedPage={setSelectedPage} 
      />
    </div>
  )
}
export default App
