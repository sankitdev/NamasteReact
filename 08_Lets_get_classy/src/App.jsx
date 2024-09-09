import "./index.css"
import About from "./Components/AboutClass";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div style={{backgroundColor:"black", height:"100vh",color:"white"}}>
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
