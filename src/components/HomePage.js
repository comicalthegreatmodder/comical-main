import Navbar from "./Navbar";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Tharun was here - 2/17/24</h1>
      <motion.div exit={{ opacity: 0 }}>
        ... content
      </motion.div> 
    </>
  )
}

export default HomePage;