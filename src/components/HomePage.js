import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "./css/HomePage.css";
import InitialTransition from "./InitialTransition"

function HomePage() {
  return (
    <>
      <InitialTransition />
      
      <Navbar />
      <h1>Tharun was here - 2/17/24</h1>
      
      this is the test of framer motion fade-in: 2/20/24
    </>
  )
}

export default HomePage;