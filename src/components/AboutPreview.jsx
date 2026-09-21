import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/circle-logo.png";
import circle1 from "../assets/circle1.jpeg";
import circle2 from "../assets/circle2.PNG";
import { useNavigate } from "react-router-dom";
export default function AboutUsInteractive() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeImgId, setActiveImgId] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 992);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navigate = useNavigate();
  const colors = {
    background: "#F9F9F9",
    navy: "#0A1425",
    gold: "#C5A059",
    textGray: "#5C667B",
    goldGradient:
      "linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%)",
  };

  const images = [
    {
      id: 0,
      src: circle2,
      alt: "Boarding Campus",
    },
    {
      id: 1,
      src: circle1,
      alt: "Students Dining Hall",
    },
  ];

  const styles = {
    section: {
      backgroundColor: colors.background,
      padding: isMobile ? "80px 24px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
      position: "relative",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: isMobile ? "60px" : "80px",
    },
    leftCol: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      maxWidth: isMobile ? "100%" : "560px",
      zIndex: 10,
    },
    rightCol: {
      flex: 1,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: isMobile ? "450px" : "600px",
    },
    headerFlexRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      gap: isMobile ? "15px" : "30px",
      marginBottom: "28px",
    },
    headingContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    spinningBadge: {
      position: "relative",
      width: isMobile ? "100px" : "140px",
      height: isMobile ? "100px" : "140px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: 1,
      flexShrink: 0,
      zIndex: 20,
    },
    badgeIcon: {
      width: "45%",
      height: "45%",
      objectFit: "contain",
      position: "absolute",
      zIndex: 2,
    },
    svgText: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
    overlineWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "20px",
    },
    overlineLine: {
      width: "40px",
      height: "2px",
      background: colors.goldGradient,
      borderRadius: "2px",
    },
    overline: {
      fontSize: "0.875rem",
      fontWeight: "700",
      letterSpacing: "2.5px",
      textTransform: "uppercase",
      color: colors.gold,
      margin: 0,
    },
    heading: {
      fontSize: isMobile ? "2.5rem" : "3.6rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: colors.navy,
      margin: "0",
      letterSpacing: "-1px",
    },
    serifHighlight: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: "600",
      background: colors.goldGradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      paddingRight: "8px",
    },
    paragraphWrapper: {
      borderLeft: `2px solid rgba(197, 160, 89, 0.3)`,
      paddingLeft: "24px",
      marginBottom: "36px",
    },
    paragraph: {
      fontSize: "1.125rem",
      lineHeight: "1.75",
      color: colors.textGray,
      marginBottom: "20px",
    },
    button: {
      background: colors.goldGradient,
      color: colors.navy,
      padding: "16px 36px",
      fontSize: "1.05rem",
      fontWeight: "700",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 25px rgba(197, 160, 89, 0.25)",
    },
    bgShapeDots: {
      position: "absolute",
      top: isMobile ? "5%" : "0%",
      right: isMobile ? "0%" : "5%",
      width: isMobile ? "220px" : "320px",
      height: isMobile ? "220px" : "320px",
      backgroundImage: `radial-gradient(${colors.navy} 2px, transparent 2px)`,
      backgroundSize: "24px 24px",
      opacity: 0.15,
      borderRadius: "50%",
      zIndex: 1,
    },
  };

  const getStyleForImage = (isMain) => {
    if (isMain) {
      return {
        width: isMobile ? "270px" : "440px",
        height: isMobile ? "270px" : "440px",
        top: isMobile ? "5%" : "10%",
        right: isMobile ? "0%" : "5%",
        left: "auto",
        bottom: "auto",
        zIndex: 10,
        filter: "brightness(1) blur(0px)",
        cursor: "default",
        boxShadow: "0 25px 50px -12px rgba(10, 20, 37, 0.25)",
      };
    } else {
      return {
        width: isMobile ? "180px" : "300px",
        height: isMobile ? "180px" : "300px",
        top: isMobile ? "auto" : "45%",
        bottom: isMobile ? "15%" : "auto",
        left: isMobile ? "15%" : "auto",
        right: isMobile ? "auto" : "40%",
        zIndex: 5,
        filter: "brightness(1) blur(0px)",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(10, 20, 37, 0.15)",
      };
    }
  };

  const sparkles = [
    { id: 1, size: 8, color: colors.gold, top: "20%", left: "10%", delay: 0 },
    {
      id: 2,
      size: 12,
      color: colors.navy,
      top: "80%",
      left: "80%",
      delay: 0.5,
    },
    {
      id: 3,
      size: 6,
      color: colors.gold,
      top: "10%",
      right: "20%",
      delay: 1.2,
    },
    { id: 4, size: 10, color: colors.gold, top: "60%", left: "5%", delay: 0.8 },
    {
      id: 5,
      size: 7,
      color: colors.navy,
      top: "40%",
      right: "10%",
      delay: 1.5,
    },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
          
          @keyframes continuous-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .spinning-svg-element {
            animation: continuous-spin 15s linear infinite;
            transform-origin: center center;
            will-change: transform;
          }

          .btn-premium:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 30px rgba(197, 160, 89, 0.4) !important;
            filter: brightness(1.1);
          }
          
          .btn-premium:hover .arrow-icon {
            transform: translateX(4px);
          }

          .arrow-icon {
            transition: transform 0.3s ease;
          }

          .interactive-circle-img {
            transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        height 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        top 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        bottom 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        left 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        right 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                        filter 0.6s ease, 
                        box-shadow 0.6s ease;
            will-change: width, height, top, bottom, left, right;
            background-color: #E8E8E8;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* STATIC LEFT COLUMN */}
          <div style={styles.leftCol}>
            <div style={{ width: "100%" }}>
              <div style={styles.headerFlexRow}>
                <div style={styles.headingContainer}>
                  <div style={styles.overlineWrapper}>
                    <div style={styles.overlineLine} />
                    <p style={styles.overline}>Our Heritage</p>
                  </div>

                  <h2 style={styles.heading}>
                    Crafting a <br />
                    <span style={styles.serifHighlight}>Second Home</span>{" "}
                    <br />
                    for Students.
                  </h2>
                </div>

                <div style={styles.spinningBadge}>
                  <img src={logo} alt="Static Logo" style={styles.badgeIcon} />
                  {/* Pure CSS Spin - Never freezes on route change */}
                  <svg
                    viewBox="0 0 120 120"
                    style={styles.svgText}
                    className="spinning-svg-element"
                  >
                    <path
                      id="circlePath"
                      d="M 60, 60 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                      fill="none"
                    />
                    <text>
                      <textPath
                        href="#circlePath"
                        fill={colors.gold}
                        fontSize="10"
                        fontWeight="700"
                        letterSpacing="3.5px"
                        fontFamily="'Inter', sans-serif"
                        dominantBaseline="central"
                      >
                        COMMUNITY • EDUCATION • VALUES •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              <div style={styles.paragraphWrapper}>
                <p style={styles.paragraph}>
                  For over a century, Shree Rajkot Lohana Boarding House has
                  stood as a trusted foundation for our community. We open our
                  doors to students arriving in Rajkot, giving them a secure,
                  welcoming environment where they can truly thrive.
                </p>
                <p style={{ ...styles.paragraph, marginBottom: 0 }}>
                  We provide all the essential facilities students need to focus
                  entirely on their academic aspirations while feeling deeply
                  cared for.
                </p>
              </div>

              <button
                className="btn-premium"
                style={styles.button}
                onClick={() => navigate("/contact")}
              >
                Contact Us
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke={colors.navy}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={styles.rightCol}>
            <div style={styles.bgShapeDots} />

            {sparkles.map((sparkle) => (
              <motion.div
                key={`sparkle-${sparkle.id}`}
                style={{
                  position: "absolute",
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  backgroundColor: sparkle.color,
                  borderRadius: "50%",
                  top: sparkle.top,
                  left: sparkle.left,
                  right: sparkle.right,
                  zIndex: 2,
                  pointerEvents: "none",
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: sparkle.delay,
                  ease: "easeInOut",
                }}
              />
            ))}

            {images.map((img) => {
              const isMain = activeImgId === img.id;
              const dynamicStyle = getStyleForImage(isMain);

              return (
                <motion.img
                  key={img.id}
                  className="interactive-circle-img"
                  src={img.src}
                  alt={img.alt}
                  onClick={() => !isMain && setActiveImgId(img.id)}
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    objectFit: "cover",
                    ...dynamicStyle,
                  }}
                  whileHover={
                    !isMain
                      ? { scale: 1.05, filter: "brightness(1) blur(0px)" }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
