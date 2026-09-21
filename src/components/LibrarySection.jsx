import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  VolumeX,
  BookOpen,
  Clock,
  Wifi,
  Sun,
  Sparkles,
  CheckCircle2,
  Home,
  Power,
} from "lucide-react";
import lib1 from "../assets/lib1.jpeg";
import lib2 from "../assets/lib2.jpeg";
import lib3 from "../assets/lib3.jpeg";

export default function LibrarySection() {
  const [isMobile, setIsMobile] = useState(false);
  const [lampOn, setLampOn] = useState(true);

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

  // Warm, Authentic Library Palette (No navy or black)
  const colors = {
    bgIlluminated: "#FFFDF7", // Warm, illuminated parchment
    bgMuted: "#EFECE6", // Muted sepia stone when lamp is dimmed
    walnut: "#3A2E2B", // Deep warm walnut for headings
    walnutLight: "#63524C", // Medium brown for body text
    gold: "#D4A017", // Rich golden yellow
    goldBright: "#FCE588",
    lightBeam:
      "linear-gradient(180deg, rgba(255, 223, 0, 0.6) 0%, rgba(255, 235, 100, 0.25) 50%, rgba(255, 245, 200, 0.05) 100%)",
    cardIlluminated: "#FFFFFF",
    cardMuted: "#F5F2EC",
  };

  // Updated with reliable, permanent high-resolution library CDN endpoints
  const libraryImages = [
    {
      id: 1,
      src: lib1,
      alt: "Students studying in pin-drop silence",
      isMain: true,
    },
    {
      id: 2,
      src: lib2,
      alt: "Curated reference books and newspaper stacks",
      isMain: false,
    },
    {
      id: 3,
      src: lib3,
      alt: "Well-ventilated reading hall with natural light",
      isMain: false,
    },
  ];

  // Authentic boarding house library features
  const authenticFeatures = [
    {
      icon: <VolumeX size={26} />,
      title: "Pin-Drop Silence Culture",
      desc: "A strictly monitored, disciplined atmosphere within our boarding house where students respect shared quiet hours for deep, uninterrupted concentration.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "24/7 CCTV Surveillance",
      desc: "Comprehensive HD camera monitoring across all reading halls and corridors, ensuring total student safety and security at all times.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Meditation & Reflection Area",
      desc: "A dedicated corner within the library set aside for moments of calm, mindfulness, and mental clarity amidst rigorous study schedules.",
    },
    {
      icon: <Sun size={26} />,
      title: "Natural Light & Ventilation",
      desc: "Traditional high-ceiling architecture designed with large cross-ventilated windows for fresh air and abundant daylight for all our residents.",
    },
    {
      icon: <Clock size={26} />,
      title: "Extended Reading Hours",
      desc: "Open early morning until late night, providing a reliable, peaceful sanctuary within the boarding house for exam preparation and revision.",
    },
    {
      icon: <Home size={26} />,
      title: "Heritage Boarding Legacy",
      desc: "An atmosphere steeped in our boarding house's century-old legacy, where the quiet, classic surroundings inspire students to uphold the values of their predecessors.",
    },
  ];

  const styles = {
    section: {
      backgroundColor: lampOn ? colors.bgIlluminated : colors.bgMuted,
      padding: isMobile ? "60px 20px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      color: colors.walnut,
      position: "relative",
      overflow: "hidden",
      transition: "background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
    },
    // 1. TOP HERO SECTION: IMAGES LEFT | DESCRIPTION RIGHT
    heroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
      gap: isMobile ? "36px" : "60px",
      alignItems: "center",
      marginBottom: isMobile ? "60px" : "80px",
    },
    // REDESIGNED: Responsive Bento Collage Layout
    imageCollage: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "1.1fr 0.9fr",
      gridTemplateRows: isMobile ? "auto auto" : "190px 190px",
      gap: "16px",
      position: "relative",
      width: "100%",
    },
    photoCard: (isMain, index) => {
      // Fixes row misalignment: explicitly maps items to row 1 and row 2
      const isSecondImage = index === 1;

      return {
        gridColumn: isMobile
          ? isMain
            ? "1 / span 2"
            : "span 1"
          : isMain
            ? "1 / span 1"
            : "2 / span 1",
        gridRow: isMobile
          ? isMain
            ? "1 / span 1"
            : "2 / span 1"
          : isMain
            ? "1 / span 2"
            : isSecondImage
              ? "1 / span 1"
              : "2 / span 1",
        height: isMobile
          ? isMain
            ? "230px"
            : "140px"
          : isMain
            ? "100%"
            : "190px",
        minHeight: isMain ? (isMobile ? "230px" : "396px") : "140px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 14px 32px rgba(58, 46, 43, 0.10)",
        border: "3px solid #FFFFFF",
        backgroundColor: "#EFECE6",
        position: "relative",
        display: "flex",
      };
    },
    photoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    // Right side library description
    narrativeBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    overlineWrapper: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 16px",
      backgroundColor: lampOn ? "#FFF3C4" : "#E2DDD5",
      borderRadius: "50px",
      marginBottom: "18px",
      width: "fit-content",
      transition: "background-color 0.4s ease",
    },
    overline: {
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: lampOn ? "#B8860B" : colors.walnutLight,
      margin: 0,
    },
    heading: {
      fontSize: isMobile ? "2.2rem" : "3.4rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: colors.walnut,
      margin: "0 0 18px 0",
      letterSpacing: "-1px",
    },
    serifHighlight: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: "600",
      color: lampOn ? colors.gold : colors.walnutLight,
      transition: "color 0.4s ease",
    },
    paragraph: {
      fontSize: "1.05rem",
      lineHeight: "1.8",
      color: colors.walnutLight,
      marginBottom: "20px",
    },
    listGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "14px",
      marginTop: "10px",
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "0.95rem",
      fontWeight: "600",
      color: colors.walnut,
    },
    // 2. THE REALISTIC LAMP STAGE
    lampStage: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "50px",
    },
    lampContainer: {
      position: "relative",
      zIndex: 30,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lampSvgWrapper: {
      filter: lampOn
        ? "drop-shadow(0 15px 30px rgba(212, 160, 23, 0.45))"
        : "drop-shadow(0 8px 16px rgba(58, 46, 43, 0.15))",
      transition: "filter 0.4s ease",
    },
    switchPill: {
      marginTop: "14px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 22px",
      borderRadius: "50px",
      backgroundColor: lampOn ? "#22C55E" : "#64748B",
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: "0.85rem",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease",
    },
    // The Light Beam Reflecting Downward
    lightCone: {
      position: "absolute",
      top: isMobile ? "135px" : "165px",
      left: "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "100vw" : "1240px",
      height: isMobile ? "1050px" : "750px",
      background: colors.lightBeam,
      clipPath: isMobile
        ? "polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%)"
        : "polygon(44% 0%, 56% 0%, 96% 100%, 4% 100%)",
      opacity: lampOn ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity 0.5s ease-in-out",
      zIndex: 1,
    },
    // 3. THE REFLECTED DETAILS SECTION
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      position: "relative",
      zIndex: 10,
    },
    featureCard: (isIlluminated) => ({
      backgroundColor: isIlluminated
        ? colors.cardIlluminated
        : colors.cardMuted,
      padding: "32px 28px",
      borderRadius: "24px",
      border: isIlluminated ? "2px solid #FCE588" : "2px solid #E5E0D8",
      boxShadow: isIlluminated
        ? "0 20px 40px rgba(212, 160, 23, 0.15), 0 0 20px rgba(255, 235, 100, 0.2)"
        : "0 8px 20px rgba(58, 46, 43, 0.04)",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }),
    iconBox: (isIlluminated) => ({
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      background: isIlluminated
        ? "linear-gradient(135deg, #FFDF00 0%, #D4A017 100%)"
        : "#E9E4DC",
      color: isIlluminated ? "#2A201D" : colors.walnutLight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      boxShadow: isIlluminated ? "0 8px 16px rgba(212, 160, 23, 0.3)" : "none",
      transition: "all 0.4s ease",
    }),
    featureTitle: {
      fontSize: "1.2rem",
      fontWeight: "700",
      color: colors.walnut,
      margin: "0 0 10px 0",
    },
    featureDesc: {
      fontSize: "0.95rem",
      lineHeight: "1.65",
      color: colors.walnutLight,
      margin: 0,
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
          
          .lib-photo-card:hover .lib-photo-img {
            transform: scale(1.06);
          }

          .lamp-feature-card:hover {
            transform: translateY(-6px);
          }
          
          @keyframes gentle-pulse {
            0% { opacity: 0.85; }
            50% { opacity: 1; }
            100% { opacity: 0.85; }
          }
          
          .pulsing-beam {
            animation: gentle-pulse 3s infinite ease-in-out;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* 1. TOP HERO: LEFT LIBRARY IMAGES | RIGHT DESCRIPTION */}
          <div style={styles.heroGrid}>
            {/* Left Column: Multi-Image Library Collage */}
            <div style={styles.imageCollage}>
              {libraryImages.map((img, idx) => (
                <div
                  key={img.id}
                  className="lib-photo-card"
                  style={styles.photoCard(img.isMain, idx)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="lib-photo-img"
                    style={styles.photoImg}
                  />
                </div>
              ))}
            </div>

            {/* Right Column: Library Description */}
            <div style={styles.narrativeBox}>
              <div style={styles.overlineWrapper}>
                <Sparkles
                  size={16}
                  color={lampOn ? "#B8860B" : colors.walnutLight}
                />
                <p style={styles.overline}>Reading Room & Library</p>
              </div>

              <h2 style={styles.heading}>
                A Quiet Sanctuary for <br />
                <span style={styles.serifHighlight}>Deep Concentration.</span>
              </h2>

              <p style={styles.paragraph}>
                For over a century, Shree Rajkot Lohana Boarding House has
                maintained a disciplined study culture. We open our doors to
                students arriving in Rajkot, giving them a secure, welcoming
                environment where they can truly thrive.
              </p>
              <p style={{ ...styles.paragraph, marginBottom: "24px" }}>
                We provide all the essential reading room facilities students
                need to focus entirely on their academic aspirations,
                competitive exams, and daily university revisions while feeling
                deeply cared for.
              </p>

              <div style={styles.listGrid}>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.gold} />
                  <span>Pin-Drop Silence Protocol</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.gold} />
                  <span>24/7 CCTV Monitoring</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.gold} />
                  <span>Academic Focus</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.gold} />
                  <span>Airy, Cross-Ventilated Halls</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. REALISTIC ARCHITECTURAL DESK LAMP STAGE */}
          <div style={styles.lampStage}>
            {/* The Light Cone Reflecting Downward */}
            <div
              style={styles.lightCone}
              className={lampOn ? "pulsing-beam" : ""}
            />

            {/* Realistic Brass & Matte Black Reading Lamp Vector */}
            <motion.div
              style={styles.lampContainer}
              onClick={() => setLampOn(!lampOn)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              title="Click to toggle Reading Room Lamp"
            >
              <div style={styles.lampSvgWrapper}>
                <svg
                  width={isMobile ? "160" : "200"}
                  height={isMobile ? "145" : "175"}
                  viewBox="0 0 220 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Weighted Architectural Base with Metallic Sheen */}
                  <ellipse cx="110" cy="175" rx="50" ry="11" fill="#292321" />
                  <ellipse cx="110" cy="173" rx="46" ry="8" fill="#4A3F39" />
                  <path
                    d="M65 175 C65 162, 155 162, 155 175 Z"
                    fill="url(#baseGradient)"
                  />

                  {/* Dual Articulated Brass Stems */}
                  <path
                    d="M105 165 L78 95 L118 48"
                    stroke="url(#brassGradient)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M105 165 L88 100 L118 48"
                    stroke="#292321"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Mechanical Hinge Joints & Tension Screw Bolts */}
                  <circle cx="78" cy="95" r="9" fill="#292321" />
                  <circle cx="78" cy="95" r="5" fill="url(#brassGradient)" />
                  <circle cx="105" cy="165" r="8" fill="#292321" />
                  <circle cx="105" cy="165" r="4" fill="url(#brassGradient)" />
                  <circle cx="118" cy="48" r="7" fill="#292321" />

                  {/* Classic Bell Reading Shade with Metallic Gold Trim */}
                  <g transform="rotate(22, 118, 48)">
                    <path
                      d="M96 38 L164 24 C175 22, 186 36, 174 58 L128 70 Z"
                      fill="url(#shadeGradient)"
                    />
                    {/* Inner Reflector & Glowing LED Bulb Core */}
                    <path
                      d="M116 66 L170 54 C174 61, 162 72, 144 72 Z"
                      fill={lampOn ? "#FFDF00" : "#786C66"}
                    />
                    {lampOn && (
                      <circle
                        cx="150"
                        cy="63"
                        r="12"
                        fill="#FFFFFF"
                        filter="drop-shadow(0 0 12px #FFDF00)"
                      />
                    )}
                  </g>

                  {/* Vector Gradients for Realism */}
                  <defs>
                    <linearGradient
                      id="baseGradient"
                      x1="65"
                      y1="165"
                      x2="155"
                      y2="175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#3A2E2B" />
                      <stop offset="50%" stopColor="#63524C" />
                      <stop offset="100%" stopColor="#292321" />
                    </linearGradient>
                    <linearGradient
                      id="brassGradient"
                      x1="0"
                      y1="0"
                      x2="220"
                      y2="190"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#D4A017" />
                      <stop offset="50%" stopColor="#FCE588" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                    <linearGradient
                      id="shadeGradient"
                      x1="96"
                      y1="24"
                      x2="174"
                      y2="70"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#4A3F39" />
                      <stop offset="60%" stopColor="#292321" />
                      <stop offset="100%" stopColor="#1A1514" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Interactive Pill Switch */}
              <div style={styles.switchPill}>
                <Power size={14} />
                <span>
                  {lampOn
                    ? "Lamp Glowing • Click to Dim"
                    : "Lamp Off • Click to Illuminate"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 3. THE REFLECTED DETAILS SECTION */}
          <div style={styles.featuresGrid}>
            {authenticFeatures.map((item, idx) => (
              <div
                key={idx}
                className="lamp-feature-card"
                style={styles.featureCard(lampOn)}
              >
                <div style={styles.iconBox(lampOn)}>{item.icon}</div>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
