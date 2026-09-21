import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, Users, Heart } from "lucide-react";

export default function PremiumTrustStrip() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- PREMIUM BoardingAL PALETTE ---
  const colors = {
    navy: "#1B2A4A",
    gold: "#CE9438",
    pearl: "#FCFAF5",
    cardBg: "#FFFFFF",
    textGray: "#4A5568",
    borderLight: "rgba(27, 42, 74, 0.12)",
    goldGlow: "rgba(206, 148, 56, 0.25)",
  };

  // --- EXACT CONTENT ---
  const trustItems = [
    {
      id: 1,
      title: "A Second Home",
      text: "A place where students feel comfortable, supported, and at home.",
      icon: Home,
      delay: 0,
    },
    {
      id: 2,
      title: "Education First",
      text: "A peaceful environment that helps students focus on their goals.",
      icon: BookOpen,
      delay: 0.3,
    },
    {
      id: 3,
      title: "Caring Community",
      text: "A welcoming place where students live, learn, and grow together.",
      icon: Users,
      delay: 0.6,
    },
    {
      id: 4,
      title: "Trusted by Families",
      text: "A safe and comfortable environment parents can feel confident about.",
      icon: Heart,
      delay: 0.9,
    },
  ];

  // --- INLINE STYLES ---
  const styles = {
    section: {
      position: "relative",
      width: "100%",
      backgroundColor: colors.pearl,
      padding: isMobile ? "60px 20px 90px" : "100px 5% 130px",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      overflow: "hidden",
      zIndex: 10,
    },
    // Background Ambient Glows
    ambientLightLeft: {
      position: "absolute",
      top: "15%",
      left: "-5%",
      width: "45vw",
      height: "45vw",
      background:
        "radial-gradient(circle, rgba(206,148,56,0.12) 0%, rgba(252,250,245,0) 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      filter: "blur(70px)",
      zIndex: 1,
    },
    ambientLightRight: {
      position: "absolute",
      bottom: "10%",
      right: "-5%",
      width: "45vw",
      height: "45vw",
      background:
        "radial-gradient(circle, rgba(27,42,74,0.08) 0%, rgba(252,250,245,0) 70%)",
      borderRadius: "50%",
      pointerEvents: "none",
      filter: "blur(80px)",
      zIndex: 1,
    },
    container: {
      position: "relative",
      maxWidth: "1400px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      zIndex: 2,
    },
    headerWrapper: {
      textAlign: "center",
      marginBottom: isMobile ? "45px" : "64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    subtitleWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "14px",
    },
    sideLine: {
      width: "45px",
      height: "2px",
      background: `linear-gradient(90deg, transparent, ${colors.gold})`,
      borderRadius: "4px",
    },
    sideLineRight: {
      width: "45px",
      height: "2px",
      background: `linear-gradient(90deg, ${colors.gold}, transparent)`,
      borderRadius: "4px",
    },
    subtitleText: {
      color: colors.gold,
      textTransform: "uppercase",
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "3.5px",
      margin: 0,
    },
    sectionTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2.4rem" : "3.6rem",
      color: colors.navy,
      margin: 0,
      lineHeight: "1.15",
      fontWeight: "700",
      letterSpacing: "-0.5px",
    },
    grid: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: isMobile ? "24px" : "32px",
    },
    card: {
      backgroundColor: colors.cardBg,
      borderRadius: "24px",
      // Extra bottom padding (85px) leaves room so text NEVER overlaps the visible waves
      padding: isMobile ? "45px 24px 85px" : "50px 32px 95px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      border: `1px solid ${colors.borderLight}`,
      boxShadow: "0 15px 35px rgba(27, 42, 74, 0.06)",
      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
    },
    // Top Gold & Navy Accent Line
    topBannerAccent: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "5px",
      background: `linear-gradient(90deg, ${colors.navy}, ${colors.gold}, ${colors.navy})`,
      zIndex: 5,
    },
    // Boardingal Crest-Style Icon Box
    iconWrapper: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "#FAF6EE",
      border: `2px solid ${colors.gold}`,
      boxShadow: `0 0 0 6px rgba(206, 148, 56, 0.1)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: colors.navy,
      marginBottom: "24px",
      transition: "all 0.4s ease",
      position: "relative",
      zIndex: 3,
    },
    cardTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.6rem",
      fontWeight: "700",
      color: colors.navy,
      margin: "0 0 10px 0",
      letterSpacing: "0px",
      position: "relative",
      zIndex: 3,
    },
    // Elegant Gold Divider Under Title
    titleDivider: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "16px",
      position: "relative",
      zIndex: 3,
    },
    miniLine: {
      width: "20px",
      height: "1.5px",
      backgroundColor: colors.gold,
      opacity: 0.6,
    },
    description: {
      fontSize: "1.02rem",
      color: colors.textGray,
      lineHeight: "1.7",
      margin: 0,
      fontWeight: "400",
      position: "relative",
      zIndex: 3,
    },
    // HIGH VISIBILITY BOTTOM WAVES CONTAINER
    bottomWaveContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "75px",
      overflow: "hidden",
      lineHeight: 0,
      zIndex: 1,
      pointerEvents: "none",
    },
  };

  return (
    <>
      {/* Import Playfair Display for prestigious serif headings & Plus Jakarta Sans for body */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        `}
      </style>

      <section style={styles.section} aria-label="Our Promise and Values">
        {/* Continuous Ambient Background Motion */}
        <motion.div
          style={styles.ambientLightLeft}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={styles.ambientLightRight}
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div style={styles.container}>
          {/* SECTION HEADER */}
          <div style={styles.headerWrapper}>
            <div style={styles.subtitleWrapper}>
              <div style={styles.sideLine} />
              <h2 style={styles.subtitleText}>Our Promise</h2>
              <div style={styles.sideLineRight} />
            </div>
            <h3 style={styles.sectionTitle}>
              A Place Parents Can{" "}
              <span style={{ color: colors.gold, fontStyle: "italic" }}>
                Trust
              </span>
            </h3>
          </div>

          {/* CARD GRID */}
          <div style={styles.grid}>
            {trustItems.map((item) => (
              <motion.div
                key={item.id}
                style={styles.card}
                whileHover={{
                  scale: 1.03,
                  y: -14,
                  boxShadow: "0 25px 50px rgba(27, 42, 74, 0.12)",
                  borderColor: colors.gold,
                }}
                onHoverStart={(e) => {
                  const icon = e.currentTarget.querySelector(".icon-wrapper");
                  const wave1 = e.currentTarget.querySelector(".wave-layer-1");
                  const wave2 = e.currentTarget.querySelector(".wave-layer-2");
                  const wave3 = e.currentTarget.querySelector(".wave-layer-3");

                  if (icon) {
                    icon.style.backgroundColor = colors.navy;
                    icon.style.color = "#FFF";
                    icon.style.borderColor = colors.navy;
                    icon.style.transform = "scale(1.1) rotate(5deg)";
                    icon.style.boxShadow = `0 10px 25px rgba(27, 42, 74, 0.3)`;
                  }
                  // Surge waves upward and make colors rich on hover
                  if (wave1) {
                    wave1.style.opacity = "0.6";
                    wave1.style.fill = colors.gold;
                  }
                  if (wave2) {
                    wave2.style.opacity = "0.25";
                    wave2.style.fill = colors.navy;
                  }
                  if (wave3) {
                    wave3.style.opacity = "1";
                    wave3.style.strokeWidth = "4";
                  }
                }}
                onHoverEnd={(e) => {
                  const icon = e.currentTarget.querySelector(".icon-wrapper");
                  const wave1 = e.currentTarget.querySelector(".wave-layer-1");
                  const wave2 = e.currentTarget.querySelector(".wave-layer-2");
                  const wave3 = e.currentTarget.querySelector(".wave-layer-3");

                  if (icon) {
                    icon.style.backgroundColor = "#FAF6EE";
                    icon.style.color = colors.navy;
                    icon.style.borderColor = colors.gold;
                    icon.style.transform = "scale(1) rotate(0deg)";
                    icon.style.boxShadow = `0 0 0 6px rgba(206, 148, 56, 0.1)`;
                  }
                  if (wave1) {
                    wave1.style.opacity = "0.35";
                    wave1.style.fill = colors.gold;
                  }
                  if (wave2) {
                    wave2.style.opacity = "0.12";
                    wave2.style.fill = colors.navy;
                  }
                  if (wave3) {
                    wave3.style.opacity = "0.5";
                    wave3.style.strokeWidth = "2";
                  }
                }}
              >
                {/* Top Gold & Navy Accent Border */}
                <div style={styles.topBannerAccent} />

                {/* Crest-Style Icon */}
                <div className="icon-wrapper" style={styles.iconWrapper}>
                  <item.icon size={34} strokeWidth={1.8} />
                </div>

                {/* Boardingal Serif Title */}
                <h4 style={styles.cardTitle}>{item.title}</h4>

                {/* Elegant Gold Divider */}
                <div style={styles.titleDivider}>
                  <div style={styles.miniLine} />
                  <span style={{ color: colors.gold, fontSize: "0.7rem" }}>
                    ✦
                  </span>
                  <div style={styles.miniLine} />
                </div>

                {/* Description */}
                <p style={styles.description}>{item.text}</p>

                {/* HIGH VISIBILITY 3-LAYER BOTTOM WAVES */}
                <div style={styles.bottomWaveContainer}>
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}
                  >
                    {/* Layer 1: Highly Visible Gold Wave (35% Opacity) */}
                    <path
                      className="wave-layer-1"
                      d="M0,50 C150,150 350,-40 500,60 L500,150 L0,150 Z"
                      style={{
                        fill: colors.gold,
                        opacity: 0.35,
                        transition: "all 0.5s ease",
                      }}
                    />
                    {/* Layer 2: Deep Navy Wave (12% Opacity) */}
                    <path
                      className="wave-layer-2"
                      d="M0,80 C200,-20 300,160 500,70 L500,150 L0,150 Z"
                      style={{
                        fill: colors.navy,
                        opacity: 0.12,
                        transition: "all 0.5s ease",
                      }}
                    />
                    {/* Layer 3: Solid Gold Crest Line (Makes the wave pop!) */}
                    <path
                      className="wave-layer-3"
                      d="M0,50 C150,150 350,-40 500,60"
                      style={{
                        fill: "none",
                        stroke: colors.gold,
                        strokeWidth: "2",
                        opacity: 0.5,
                        transition: "all 0.5s ease",
                      }}
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
