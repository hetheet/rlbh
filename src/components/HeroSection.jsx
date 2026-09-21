import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/circle-logo.png";
import boardingImg from "../assets/boarding.png";
import { Link } from "react-router-dom";
export default function PremiumHeroSection() {
  // FIX: Initialize isMobile immediately to prevent the 2-second layout shift
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 992 : false,
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Mouse Parallax Effect for Desktop
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    setMousePosition({ x: moveX, y: moveY });
  };

  // --- PREMIUM COLOR PALETTE ---
  const colors = {
    navy: "#1B2A4A",
    gold: "#CE9438",
    pearl: "#FCFAF5",
    glassBorder: "rgba(255, 255, 255, 0.5)",
    glassBg: "rgba(255, 255, 255, 0.7)",
    textGray: "#4A5568",
  };

  // --- INLINE STYLES ---
  const styles = {
    section: {
      position: "relative",
      minHeight: isMobile ? "auto" : "100vh",
      width: "100%",
      backgroundColor: colors.pearl,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      padding: isMobile ? "30px 20px 60px" : "120px 5% 60px",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      marginTop: isMobile ? "0px" : "-20px",
    },
    lightLeak1: {
      position: "absolute",
      top: "-10%",
      left: "-5%",
      width: "60vw",
      height: "60vw",
      background:
        "radial-gradient(circle, rgba(206,148,56,0.12) 0%, rgba(252,250,245,0) 70%)",
      borderRadius: "50%",
      zIndex: 1,
      pointerEvents: "none",
      filter: "blur(80px)",
    },
    lightLeak2: {
      position: "absolute",
      bottom: "-20%",
      right: "-10%",
      width: "70vw",
      height: "70vw",
      background:
        "radial-gradient(circle, rgba(27,42,74,0.06) 0%, rgba(252,250,245,0) 70%)",
      borderRadius: "50%",
      zIndex: 1,
      pointerEvents: "none",
      filter: "blur(100px)",
    },
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "1450px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 3,
      gap: isMobile ? "30px" : "40px",
    },
    textCol: {
      width: isMobile ? "100%" : "48%",
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
      zIndex: 4,
    },
    imageCol: {
      width: isMobile ? "100%" : "48%",
      position: "relative",
      height: isMobile ? "480px" : "700px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      zIndex: 4,
    },
    trustBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 20px",
      background: colors.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid rgba(206,148,56,0.3)`,
      borderRadius: "100px",
      color: colors.navy,
      fontWeight: "700",
      fontSize: "0.8rem",
      textTransform: "uppercase",
      letterSpacing: "2px",
      boxShadow: "0 10px 30px rgba(206,148,56,0.08)",
      marginBottom: isMobile ? "20px" : "28px",
    },
    seoTitle: {
      display: "block",
      fontSize: isMobile ? "1.1rem" : "1.4rem",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: "700",
      color: colors.textGray,
      marginBottom: "8px",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "3rem" : "5.8rem",
      lineHeight: "1.05",
      color: colors.navy,
      fontWeight: "600",
      margin: "0 0 24px 0",
      letterSpacing: "-1.5px",
    },
    headingItalic: {
      fontStyle: "italic",
      color: colors.gold,
      fontWeight: "500",
      letterSpacing: "-1px",
    },
    paragraph: {
      fontSize: isMobile ? "1.05rem" : "1.25rem",
      color: colors.textGray,
      lineHeight: "1.6",
      margin: "0 0 40px 0",
      maxWidth: "500px",
      fontWeight: "400",
    },
    buttonGroup: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "16px",
      width: isMobile ? "100%" : "auto",
    },
    btnPrimary: {
      backgroundColor: colors.navy,
      color: "#FFF",
      padding: "18px 42px",
      borderRadius: "100px",
      fontSize: "1.05rem",
      fontWeight: "600",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 20px 40px rgba(27, 42, 74, 0.25)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    btnSecondary: {
      backgroundColor: "transparent",
      color: colors.navy,
      padding: "18px 42px",
      borderRadius: "100px",
      fontSize: "1.05rem",
      fontWeight: "600",
      border: `2px solid ${colors.navy}`,
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
    },
    imgWrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    mainArchImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "350px 350px 24px 24px",
      boxShadow: "0 40px 80px rgba(27, 42, 74, 0.15)",
    },
    floatingCard: {
      position: "absolute",
      bottom: isMobile ? "-20px" : "40px",
      left: isMobile ? "5%" : "-50px",
      background: colors.glassBg,
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: `1px solid ${colors.glassBorder}`,
      padding: "18px 28px",
      borderRadius: "24px",
      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      gap: "18px",
      zIndex: 5,
    },
    cardAvatar: {
      width: "55px",
      height: "55px",
      borderRadius: "50%",
      objectFit: "cover",
      border: `2px solid ${colors.gold}`,
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          body { background-color: #FCFAF5; margin: 0; padding: 0; }
        `}
      </style>

      <section
        style={styles.section}
        onMouseMove={handleMouseMove}
        aria-label="Welcome to Shree Rajkot Lohana Boarding House"
      >
        <motion.div
          style={styles.lightLeak1}
          animate={{
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
            scale: [1, 1.05, 1],
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.8,
            scale: { duration: 8, repeat: Infinity },
          }}
        />
        <motion.div
          style={styles.lightLeak2}
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
            scale: [1, 1.1, 1],
          }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.8,
            scale: { duration: 10, repeat: Infinity },
          }}
        />

        <div style={styles.container}>
          <div style={styles.textCol}>
            <div style={styles.trustBadge}>
              <span style={{ color: colors.gold, fontSize: "1.1rem" }}>✦</span>A
              Trusted Lohana Boarding
            </div>

            <h1 style={styles.heading}>
              <span style={styles.seoTitle}>
                Shree Rajkot Lohana Boarding House
              </span>
              Welcome to <br />
              Your <span style={styles.headingItalic}>Second Home.</span>
            </h1>

            <p style={styles.paragraph}>
              More than just accommodation. At Shree Rajkot Lohana Boarding
              House, we provide a safe, disciplined, and nurturing environment
              where Lohana students can thrive academically and personally.
            </p>

            <div style={styles.buttonGroup}>
              {/* 1. Apply for Admission -> Links to /contact */}
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <motion.button
                  style={styles.btnPrimary}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    boxShadow: "0 25px 45px rgba(27, 42, 74, 0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Apply for Admission"
                >
                  Apply for Admission
                </motion.button>
              </Link>

              {/* 2. Explore Campus -> Links to /gallery */}
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <motion.button
                  style={styles.btnSecondary}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                    backgroundColor: colors.navy,
                    color: "#FFF",
                    boxShadow: "0 20px 40px rgba(27, 42, 74, 0.15)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  aria-label="Explore Campus"
                >
                  Explore Campus
                </motion.button>
              </Link>
            </div>

            <div
              style={{
                marginTop: "40px",
                borderLeft: `2px solid ${colors.gold}`,
                paddingLeft: "16px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  color: colors.textGray,
                  fontStyle: "italic",
                  lineHeight: "1.5",
                }}
              >
                *Admissions are exclusively reserved for students <br />{" "}
                belonging to the Lohana community.
              </p>
            </div>
          </div>

          <div style={styles.imageCol}>
            <motion.div
              style={styles.imgWrapper}
              animate={{
                x: mousePosition.x * -0.015,
                y: mousePosition.y * -0.015,
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
            >
              <img
                src={boardingImg}
                alt="Shree Rajkot Lohana Boarding House Campus"
                style={styles.mainArchImg}
              />

              <motion.div
                style={styles.floatingCard}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={logo}
                  alt="Shree Rajkot Lohana Boarding House Logo"
                  style={styles.cardAvatar}
                />
                <div>
                  <h4
                    style={{
                      margin: "0 0 2px 0",
                      color: colors.navy,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.4rem",
                    }}
                  >
                    390+
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: colors.textGray,
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Students Capacity
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
