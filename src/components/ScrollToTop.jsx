import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp"; // Using your exact logo

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track window scrolling & screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      // Show button only after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate how far down the user has scrolled (0 to 100%)
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress =
        totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --- BRAND COLOR PALETTE ---
  const colors = {
    navy: "#0A1425",
    gold: "#C5A059",
    white: "#FFFFFF",
    shadow: "rgba(10, 20, 37, 0.15)",
    goldGradient:
      "linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%)",
  };

  const buttonSize = isMobile ? 52 : 62; // Compact on mobile, statement size on desktop
  const strokeWidth = 3;
  const radius = (buttonSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  const styles = {
    container: {
      position: "fixed",
      bottom: isMobile ? "20px" : "35px",
      right: isMobile ? "20px" : "35px",
      zIndex: 9999, // Sits comfortably above footers and content
      cursor: "pointer",
      width: `${buttonSize}px`,
      height: `${buttonSize}px`,
      borderRadius: "50%",
      backgroundColor: colors.white,
      boxShadow: "0 10px 25px rgba(10, 20, 37, 0.2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      outline: "none",
      padding: 0,
      overflow: "hidden",
    },
    svgRing: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transform: "rotate(-90deg)", // Starts scroll track from 12 o'clock
    },
    logoWrapper: {
      width: "60%",
      height: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2,
    },
    logoImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          style={styles.container}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 15px 35px rgba(197, 160, 89, 0.4)",
          }}
          whileTap={{ scale: 0.92 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {/* Circular Scroll Progress Ring */}
          <svg style={styles.svgRing} width={buttonSize} height={buttonSize}>
            {/* Background Track */}
            <circle
              stroke="rgba(197, 160, 89, 0.15)"
              cx={buttonSize / 2}
              cy={buttonSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Active Gold Progress Track */}
            <circle
              stroke={colors.gold}
              cx={buttonSize / 2}
              cy={buttonSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>

          {/* Center Boarding House Logo */}
          <motion.div
            style={styles.logoWrapper}
            whileHover={{ y: -2 }} // Subtle nudge up on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={logo} alt="Scroll to top" style={styles.logoImage} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
