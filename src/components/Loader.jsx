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
          try {
            sessionStorage.setItem("has_seen_loader", "true");
          } catch (e) {
            // Storage can be blocked (private mode) - safe to ignore
          }
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
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
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
      // Keep the overlay on its own GPU layer so fading it is smooth
      willChange: "opacity",
      transform: "translateZ(0)",
      overflow: "hidden",
    },
    logoContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "220px",
      height: "220px",
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
    <>
      {/*
        SMOOTHNESS NOTES
        - All loops below animate ONLY transform/opacity in plain CSS. The browser
          runs these on the GPU compositor thread, so they stay smooth even while
          the main thread is busy loading/hydrating the page (JS-driven
          animations stutter in exactly that situation on phones).
        - No blur/drop-shadow filters are animated (very expensive on mobile GPUs).
      */}
      <style>
        {`
          @keyframes ldrSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes ldrSpinReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes ldrPulse {
            0%, 100% { transform: scale(0.98); }
            50% { transform: scale(1.02); }
          }
          @keyframes ldrBreathe {
            0%, 100% { transform: scale(0.95); }
            50% { transform: scale(1.03); }
          }
          @keyframes ldrFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes ldrTextIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .ldr-layer {
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            margin: 0;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            will-change: transform;
            transform: translateZ(0);
          }

          /* Outer gold spinning ring */
          .ldr-outer-ring {
            width: 190px;
            height: 190px;
            margin-top: -95px;
            margin-left: -95px;
            border: 2px solid rgba(197, 160, 89, 0.15);
            border-top-color: ${colors.gold};
            border-right-color: #E8C881;
            box-sizing: border-box;
            z-index: 1;
            animation: ldrSpin 1.5s linear infinite;
          }

          /* Inner reverse dashed ring: wrapper rotates, child pulses */
          .ldr-inner-wrap {
            width: 155px;
            height: 155px;
            margin-top: -77.5px;
            margin-left: -77.5px;
            z-index: 1;
            animation: ldrSpinReverse 25s linear infinite;
          }
          .ldr-inner-ring {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px dashed rgba(10, 20, 37, 0.15);
            box-sizing: border-box;
            will-change: transform;
            animation: ldrPulse 3s ease-in-out infinite;
          }

          /* Static soft shadow under the logo (replaces animated drop-shadow) */
          .ldr-logo-shadow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 120px;
            height: 120px;
            margin-top: -50px;
            margin-left: -60px;
            border-radius: 50%;
            background: radial-gradient(
              circle at center,
              rgba(10, 20, 37, 0.14) 0%,
              rgba(10, 20, 37, 0.06) 45%,
              transparent 72%
            );
            z-index: 1;
            pointer-events: none;
          }

          /* Logo: wrapper fades in once, image breathes forever */
          .ldr-logo-wrap {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: ldrFadeIn 0.5s ease-out 0s forwards;
          }
          .ldr-logo {
            width: 130px;
            height: auto;
            object-fit: contain;
            display: block;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            animation: ldrBreathe 2.5s ease-in-out infinite;
          }

          .ldr-text {
            opacity: 0;
            animation: ldrTextIn 0.5s ease-out 0.2s forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .ldr-outer-ring { animation-duration: 3s; }
            .ldr-inner-wrap, .ldr-inner-ring, .ldr-logo { animation: none; }
          }
        `}
      </style>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            style={styles.overlay}
            initial={{ opacity: 1 }}
            // Opacity-only exit = smooth on every phone (blur/scale on a
            // full-screen layer was the main cause of the lag)
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div style={styles.logoContainer}>
              {/* Outer Gold Spinning Ring */}
              <div className="ldr-layer ldr-outer-ring" />

              {/* Inner Reverse Navy Dashed Ring */}
              <div className="ldr-layer ldr-inner-wrap">
                <div className="ldr-inner-ring" />
              </div>

              {/* Static soft shadow */}
              <div className="ldr-logo-shadow" />

              {/* Premium Breathing Logo */}
              <div className="ldr-logo-wrap">
                <img
                  src={logo}
                  alt="Shree Rajkot Lohana Boarding House"
                  className="ldr-logo"
                  decoding="async"
                  loading="eager"
                  fetchpriority="high"
                  draggable={false}
                />
              </div>
            </div>

            {/* Elegant Text Underneath */}
            <div style={styles.textContainer} className="ldr-text">
              <p style={styles.title}>Est. 1896</p>
              <p style={styles.subtitle}>Crafting a Second Home for Students</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}