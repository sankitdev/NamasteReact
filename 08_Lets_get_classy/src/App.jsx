import "./index.css"
import Profile from "./Components/Profile";
import ProfileClass from "./Components/ProfileClass"
function App() {

  return (
    <div style={{backgroundColor:"black", height:"100vh",color:"white"}}>
      <h1>Hello there</h1>
      <Profile hello={"I am here too"}/>
      <ProfileClass hello={"I am here Class-Based Props"}/>
    </div>
  )
}

export default App
