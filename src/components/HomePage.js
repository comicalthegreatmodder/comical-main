import Navbar from "./Navbar";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
      >
        <Navbar />
        <h1>Tharun was here - 2/17/24</h1>
      
        this is the test of framer motion fade-in: 2/20/24
      </motion.div>
    </>
  )
}

export default HomePage;