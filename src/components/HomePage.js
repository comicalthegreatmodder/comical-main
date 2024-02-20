import Navbar from "./Navbar";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Tharun was here - 2/17/24</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </>
  )
}

export default HomePage;