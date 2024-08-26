import { motion } from "framer-motion";
import watch_logo from "../../assets/images/watch_logo.png";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 0], // Fade in and out
          scale: [1, 1.2, 1.2, 1, 1], // Zoom in and out
        }}
        transition={{
          duration: 5, // Duration of the animation
          ease: "easeInOut",
          // repeat: Infinity, // Repeat the animation infinitely
        }}
        className="flex justify-center items-center"
      >
        <img src={watch_logo} alt="Watch Logo" className="h-28 w-28" />
      </motion.div>
      <h1 className="text-xl font-bold mt-10 text-center">
        Welcome to Vikiasmy's
      </h1>
    </div>
  );
};

export default LoadingScreen;
