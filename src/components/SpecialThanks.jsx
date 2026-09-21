import React, { useState, useEffect } from "react";
import { Quote, Sparkles } from "lucide-react";

// ==========================================
// UPLOAD YOUR IMAGES HERE:
// ==========================================
import exPresidentImg from "../assets/t0.png";
import logo from "../assets/circle-logo.png"; // Boarding logo for the background

export default function SpecialThanks() {
  const [isMobile, setIsMobile] = useState(false);

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

  // Premium White & Gold Palette
  const colors = {
    bgWhite: "#FFFFFF",
    bgMuted: "#FAFAFA",
    textNavy: "#0B1B3D",
    textSlate: "#475569",
    goldPrimary: "#D4AF37",
    goldBright: "#FBBF24",
  };

  // Full-screen background glowing particles array
  const bgParticles = [
    { left: "5%", size: 6, dur: 12, delay: 0 },
    { left: "15%", size: 4, dur: 15, delay: 2 },
    { left: "25%", size: 8, dur: 11, delay: 5 },
    { left: "35%", size: 5, dur: 14, delay: 1 },
    { left: "45%", size: 9, dur: 13, delay: 4 },
    { left: "55%", size: 6, dur: 16, delay: 7 },
    { left: "65%", size: 5, dur: 12, delay: 3 },
    { left: "75%", size: 10, dur: 14, delay: 6 },
    { left: "85%", size: 4, dur: 11, delay: 2 },
    { left: "95%", size: 7, dur: 15, delay: 8 },
    { left: "10%", size: 5, dur: 13, delay: 9 },
    { left: "30%", size: 8, dur: 12, delay: 1.5 },
    { left: "50%", size: 6, dur: 14, delay: 4.5 },
    { left: "70%", size: 5, dur: 11, delay: 6.5 },
    { left: "90%", size: 7, dur: 16, delay: 3.5 },
  ];

  const styles = {
    section: {
      backgroundColor: colors.bgWhite,
      padding: isMobile ? "60px 15px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      color: colors.textNavy,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      minHeight: "85vh",
    },
    // Elegant Ambient Background Layer
    bgAmbient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(250, 248, 245, 1) 100%)",
      zIndex: 0,
      pointerEvents: "none",
    },
    // Full Screen Particles Container
    particlesContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      pointerEvents: "none",
      overflow: "hidden",
    },
    // Reduced & Refined Watermark Background Logo
    bgLogoWrapper: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: isMobile ? "120%" : "40vw",
      opacity: 0.04,
      pointerEvents: "none",
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bgLogo: {
      width: "100%",
      height: "auto",
      objectFit: "contain",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
      width: "100%",
    },
    // --- SECTION TITLE STYLES ---
    sectionHeader: {
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "90px",
      position: "relative",
      zIndex: 10,
      padding: "0",
    },
    mainSectionTitle: {
      fontFamily: "'Playfair Display', serif",
      // Forces text to fit perfectly on ONE line in mobile without ever wrapping
      fontSize: isMobile ? "clamp(1.9rem, 5vw, 1.5rem)" : "3.5rem",
      whiteSpace: isMobile ? "nowrap" : "normal",
      fontWeight: "800",
      lineHeight: "1.2",
      color: colors.textNavy,
      margin: "0 0 16px 0",
      letterSpacing: "-0.5px",
    },
    titleDivider: {
      width: "70px",
      height: "4px",
      background: `linear-gradient(90deg, transparent, ${colors.goldPrimary}, transparent)`,
      margin: "0 auto",
      borderRadius: "2px",
    },
    // --------------------------------
    heroWrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "50px" : "90px",
      alignItems: "center",
    },
    imageColumn: {
      flex: "0 0 auto",
      width: isMobile ? "100%" : "40%",
      display: "flex",
      justifyContent: isMobile ? "center" : "flex-end",
    },
    imageWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: isMobile ? "300px" : "420px",
    },
    // Luxurious Golden Aura Glow
    imageGlowEffect: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "130%",
      height: "130%",
      background:
        "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(251, 191, 36, 0.08) 45%, transparent 70%)",
      filter: "blur(30px)",
      zIndex: -1,
      borderRadius: "50%",
    },
    // Premium Museum-Quality Frame
    imageFrame: {
      width: "100%",
      aspectRatio: "3/4",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow:
        "0 40px 80px rgba(11, 27, 61, 0.12), 0 15px 35px rgba(212, 175, 55, 0.15)",
      border: "12px solid #FFFFFF",
      outline: "1px solid rgba(212, 175, 55, 0.4)", // Inner gold trim
      outlineOffset: "-12px",
      backgroundColor: "#FFFFFF",
      position: "relative",
      zIndex: 2,
    },
    photoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    textColumn: {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "column",
      padding: isMobile ? "0" : "0",
    },
    overlineWrapper: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 24px",
      background:
        "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(251, 191, 36, 0.04) 100%)",
      border: "1px solid rgba(212, 175, 55, 0.25)",
      borderRadius: "50px",
      marginBottom: "28px",
      width: "fit-content",
      boxShadow: "0 4px 15px rgba(212, 175, 55, 0.05)",
    },
    overline: {
      fontSize: isMobile ? "0.75rem" : "0.85rem",
      fontWeight: "800",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: colors.goldPrimary,
      margin: 0,
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2.6rem" : "4.5rem",
      fontWeight: "800",
      lineHeight: "1.1",
      color: colors.textNavy,
      margin: "0 0 14px 0",
      letterSpacing: "-1px",
    },
    designation: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontSize: isMobile ? "1.25rem" : "1.8rem",
      color: colors.goldPrimary,
      margin: "0 0 40px 0",
      lineHeight: "1.4",
      opacity: 0.9,
    },
    // Glassmorphism Premium Quote Card
    quoteBox: {
      position: "relative",
      padding: isMobile ? "30px 20px" : "45px 50px",
      background: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderRadius: "24px",
      border: "1px solid rgba(212, 175, 55, 0.15)",
      borderLeft: `6px solid ${colors.goldPrimary}`,
      boxShadow: "0 25px 50px rgba(11, 27, 61, 0.05)",
    },
    paragraph: {
      fontSize: isMobile ? "1rem" : "1.15rem",
      lineHeight: "1.9",
      color: colors.textSlate,
      margin: "0 0 20px 0",
    },
    highlightText: {
      fontWeight: "700",
      color: colors.textNavy,
      background: "linear-gradient(120deg, #D4AF37 0%, #FBBF24 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
          
          /* --- ONGOING CONTINUOUS ANIMATIONS ONLY --- */

          /* Majestic background rotation for Watermark */
          @keyframes majestic-bg {
            0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.03; }
            50% { transform: translate(-50%, -50%) rotate(2deg) scale(1.02); opacity: 0.06; }
            100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.03; }
          }
          .ongoing-bg-anim {
            animation: majestic-bg 20s ease-in-out infinite;
          }

          /* Majestic Aura pulsing behind image */
          @keyframes majestic-pulse {
            0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.95); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
            100% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.95); }
          }
          .ongoing-glow-anim {
            animation: majestic-pulse 6s ease-in-out infinite;
          }

          /* Full Screen Rising Glowing Background Particles */
          @keyframes float-up-bg {
            0% { transform: translateY(0) scale(0.5); opacity: 0; }
            20% { opacity: 0.9; }
            80% { opacity: 0.7; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
          }
          .bg-glowing-particle {
            position: absolute;
            bottom: -20px;
            background: #FBBF24;
            border-radius: 50%;
            box-shadow: 0 0 15px 4px rgba(251, 191, 36, 0.6);
            opacity: 0;
            animation-name: float-up-bg;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.bgAmbient}></div>

        {/* FULL SCREEN MAGICAL GLOWING PARTICLES */}
        <div style={styles.particlesContainer}>
          {bgParticles.map((p, i) => (
            <div
              key={i}
              className="bg-glowing-particle"
              style={{
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.dur}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Background Boarding Logo - Beautifully animated */}
        <div style={styles.bgLogoWrapper} className="ongoing-bg-anim">
          {logo && (
            <img src={logo} alt="Boarding Background" style={styles.bgLogo} />
          )}
        </div>

        <div style={styles.container}>
          {/* UPDATED SECTION TITLE (Guaranteed one line on mobile) */}
          <div style={styles.sectionHeader}>
            <h2 style={styles.mainSectionTitle}>The Pillar of Our Legacy</h2>
            <div style={styles.titleDivider}></div>
          </div>

          <div style={styles.heroWrapper}>
            {/* Left: Portrait Image with luxurious framing & glowing effects */}
            <div style={styles.imageColumn}>
              <div style={styles.imageWrapper}>
                {/* Glowing Aura */}
                <div
                  style={styles.imageGlowEffect}
                  className="ongoing-glow-anim"
                ></div>

                {/* Museum Frame */}
                <div style={styles.imageFrame}>
                  <img
                    src={exPresidentImg}
                    alt="Shri Harkishorbhai Barchha"
                    style={styles.photoImg}
                  />
                </div>
              </div>
            </div>

            {/* Right: Text Content in Premium Glassmorphism Card */}
            <div style={styles.textColumn}>
              <div style={styles.overlineWrapper}>
                <Sparkles size={15} color={colors.goldPrimary} />
                <p style={styles.overline}>A Special Tribute</p>
              </div>

              <h2 style={styles.title}>
                Shri Harkishorbhai
                <br />
                Barchha
              </h2>
              <p style={styles.designation}>
                Ex-President, Shree Rajkot Lohana Boarding House
              </p>

              <div style={styles.quoteBox}>
                {/* PERFECTLY STRAIGHT QUOTE ICON (No Tilt) */}
                <Quote
                  size={isMobile ? 35 : 55}
                  color={colors.goldPrimary}
                  style={{
                    position: "absolute",
                    top: isMobile ? "-15px" : "-20px",
                    left: isMobile ? "20px" : "30px",
                    opacity: 0.15,
                    transform: "rotate(0deg)" /* Removed any rotation/tilt */,
                  }}
                />
                <p style={styles.paragraph}>
                  For over{" "}
                  <span style={styles.highlightText}>30 remarkable years</span>,
                  Shri Harkishorbhai Barchha served our boarding house with
                  unparalleled dedication and an immense, undeniable love for
                  our community. His relentless hard work laid the unshakable
                  foundation we stand upon today.
                </p>
                <p style={{ ...styles.paragraph, marginBottom: 0 }}>
                  We proudly acknowledge that the boarding house standing at its
                  majestic stage today is{" "}
                  <span style={styles.highlightText}>
                    solely due to his visionary leadership
                  </span>
                  . Without him, this baording would not be what it is today. We
                  offer our deepest, most special thanks to our ultimate guiding
                  light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
