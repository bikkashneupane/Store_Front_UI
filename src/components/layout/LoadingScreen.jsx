import { motion } from "framer-motion";
import watch_logo from "../../assets/images/watch_logo.png";
const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:mt-52 lg:justify-start flex-col z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0], // Fade in and out
          scale: [1, 1.2, 1.2, 1, 1], // Zoom in and out
        }}
        transition={{
          duration: 5, // Duration of the animation
          ease: "easeInOut",
          repeat: Infinity, // Repeat the animation infinitely
        }}
        className="flex justify-center items-center"
      >
        <img src={watch_logo} alt="Watch Logo" className="h-40 w-40" />
      </motion.div>
      <span className="text-2xl font-bold mt-16">Welcome to Vikiasmy's</span>
    </div>
  );
};

export default LoadingScreen;
