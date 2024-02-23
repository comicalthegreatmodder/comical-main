import Navbar from "./Navbar";
import "./css/HomePage.css";
import { Link } from "react-router-dom"

function HomePage() {
  return (
    <>
      <div className="homePageGrid">
        <div className="blackBox slide-out-top">
        
        </div>
      
        <h1 className="comicalonetext play-animations center-page ">comical.one</h1>

        <h2 className="slide-in-bck-top">On a mission to make the most beautiful website.</h2>

        <h3 className="slide-in-bck-left aboutText"><Link to="/about">About</Link></h3>
        
        <h3 className="slide-in-bck-right testnav2">Test Element</h3>
      </div>
        
    </>
  )
}

export default HomePage;