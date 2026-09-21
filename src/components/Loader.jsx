import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ---------------------------------------------------------------------------
    // NOTE FOR PRODUCTION: Uncomment the 4 lines below ONLY when deploying live!
    // While developing locally, keep it commented out so you can see your loader.
    // ---------------------------------------------------------------------------
    // const hasLoaded = sessionStorage.getItem("has_seen_loader");
    // if (hasLoaded) {
    //   setIsLoading(false);
    //   return;
    // }

    let isMounted = true;
    const startTime = Date.now();
    const MIN_LOAD_TIME = 1600; // Guarantees loader stays visible for 1.6 seconds

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);

      setTimeout(() => {
        if (isMounted) {
          sessionStorage.setItem("has_seen_loader", "true");
          setIsLoading(false);
        }
      }, remainingTime);
    };

    // Wait for DOM and Web Fonts to settle
    const handleActualLoad = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch (e) {
        console.warn("Font loading check skipped:", e);
      }
      finishLoading();
    };

    if (document.readyState === "complete") {
      handleActualLoad();
    } else {
      window.addEventListener("load", handleActualLoad);
      return () => {
        isMounted = false;
        window.removeEventListener("load", handleActualLoad);
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // --- BRAND THEME PALETTE ---
  const colors = {
    background: "#F9F9F9",
    navy: "#0A1425",
    gold: "#C5A059",
    textGray: "#5C667B",
    goldGradient:
      "linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%)",
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: colors.background,
      // Subtle radial glow in the center to make the logo pop against the white
      backgroundImage:
        "radial-gradient(circle at center, rgba(197, 160, 89, 0.08) 0%, transparent 70%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999999,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    },
    logoContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "220px",
      height: "220px",
    },
    logo: {
      width: "130px",
      height: "auto",
      objectFit: "contain",
      zIndex: 2,
      // Soft luxury shadow tailored for light backgrounds
      filter: "drop-shadow(0 15px 30px rgba(10, 20, 37, 0.12))",
    },
    outerSpinRing: {
      position: "absolute",
      width: "190px",
      height: "190px",
      borderRadius: "50%",
      border: "2px solid rgba(197, 160, 89, 0.15)", // Subtle gold track
      borderTopColor: colors.gold, // Solid gold leading edge
      borderRightColor: "#E8C881", // Bright gold gradient transition
      zIndex: 1,
    },
    innerPulseRing: {
      position: "absolute",
      width: "155px",
      height: "155px",
      borderRadius: "50%",
      border: `1px dashed rgba(10, 20, 37, 0.15)`, // Subtle navy contrast ring
      zIndex: 1,
    },
    textContainer: {
      marginTop: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    },
    title: {
      margin: 0,
      fontSize: "0.95rem",
      fontWeight: "700",
      letterSpacing: "3px",
      textTransform: "uppercase",
      background: colors.goldGradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      margin: 0,
      fontSize: "0.8rem",
      fontWeight: "500",
      color: colors.textGray,
      letterSpacing: "0.5px",
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <div style={styles.logoContainer}>
            {/* Outer Gold Spinning Ring */}
            <motion.div
              style={styles.outerSpinRing}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner Reverse Navy Dashed Ring */}
            <motion.div
              style={styles.innerPulseRing}
              animate={{ rotate: -360, scale: [0.98, 1.02, 0.98] }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Premium Breathing Logo */}
            <motion.img
              src={logo}
              alt="Shree Rajkot Lohana Boarding House"
              style={styles.logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.95, 1.03, 0.95],
                opacity: 1,
              }}
              transition={{
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5 },
              }}
            />
          </div>

          {/* Elegant Text Underneath */}
          <motion.div
            style={styles.textContainer}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p style={styles.title}>Est. 1896</p>
            <p style={styles.subtitle}>Crafting a Second Home for Students</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
