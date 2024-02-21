import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,    
  },
};

const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="blackBox"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />      
    </div>
  );
};

export default InitialTransition;