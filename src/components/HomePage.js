import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "./css/HomePage.css";

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }} 
        transition={{ duration: 2 }}
        animate= {{ opacity: 0 }}
      >
        <div className="blackBox">
          
        </div>
        
      </motion.div>
      
      <Navbar />
      <h1>Tharun was here - 2/17/24</h1>
      
      this is the test of framer motion fade-in: 2/20/24
    </>
  )
}

export default HomePage;