import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bed,
  Wind,
  Droplets,
  Users,
  Home,
  DoorOpen,
  ShieldCheck,
  Power,
} from "lucide-react";

export default function RoomsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isBreezy, setIsBreezy] = useState(true);

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

  // Fresh Breeze & Warm Boarding Palette
  const colors = {
    bgFresh: "#F4F9FC",
    bgWarm: "#FDFBF7",
    walnut: "#3A2E2B",
    walnutLight: "#63524C",
    gold: "#D4A017",
    breezeBlue: "#0284C7",
    breezeCone:
      "linear-gradient(180deg, rgba(186, 230, 253, 0.35) 0%, rgba(224, 242, 254, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
    cardFresh: "#FFFFFF",
    cardMuted: "#F7F5F0",
  };

  // Exact room details reflecting your specific instructions perfectly
  const roomDetails = [
    {
      icon: <Users size={26} />,
      title: "4 to 6 Beds Per Room",
      desc: "Thoughtfully arranged shared living that fosters lifelong brotherhood, giving every student dedicated personal space without ever feeling overcrowded.",
    },
    {
      icon: <Wind size={26} />,
      title: "Natural Cross-Ventilation",
      desc: "High ceilings and traditional windows ensure continuous fresh airflow and abundant morning sunlight to keep the atmosphere energized.",
    },
    {
      icon: <Droplets size={26} />,
      title: "24/7 Hot & Cold Water",
      desc: "Equipped with heavy-duty solar water heaters and geysers, guaranteeing reliable access to hot and cold water in all seasons.",
    },
    {
      icon: <DoorOpen size={26} />,
      title: "Boarding Corridor Toilets",
      desc: "Common toilets and bathrooms are provided along the main boarding corridor, conveniently accessible among the many student rooms on each floor.",
    },
    {
      icon: <Home size={26} />,
      title: "Community Living Culture",
      desc: "Our boarding house promotes a nurturing environment where students live as a close-knit community, learning values of mutual respect, cooperation, and collective growth.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Disciplined & Safe Vibe",
      desc: "Regular warden supervision and structured quiet hours guarantee a peaceful, homely environment for resting after study sessions.",
    },
  ];

  const styles = {
    section: {
      backgroundColor: isBreezy ? colors.bgFresh : colors.bgWarm,
      padding: isMobile ? "80px 20px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      color: colors.walnut,
      position: "relative",
      overflow: "hidden",
      transition: "background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    container: {
      maxWidth: "1240px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
    },
    headerRow: {
      textAlign: "center",
      maxWidth: "760px",
      margin: "0 auto 40px auto",
      position: "relative",
      zIndex: 20,
    },
    overlineWrapper: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 16px",
      backgroundColor: isBreezy ? "#E0F2FE" : "#F2EDE4",
      borderRadius: "50px",
      marginBottom: "16px",
      transition: "all 0.5s ease",
    },
    overline: {
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: isBreezy ? colors.breezeBlue : colors.gold,
      margin: 0,
    },
    heading: {
      fontSize: isMobile ? "2.4rem" : "3.6rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: colors.walnut,
      margin: "0 0 16px 0",
      letterSpacing: "-1px",
    },
    serifHighlight: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: "600",
      color: isBreezy ? colors.breezeBlue : colors.gold,
      transition: "color 0.5s ease",
    },
    headerDesc: {
      fontSize: "1.1rem",
      lineHeight: "1.75",
      color: colors.walnutLight,
      margin: 0,
    },
    // STAGE & INTERACTIVE SVG
    stageWrapper: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "60px",
    },
    visualContainer: {
      position: "relative",
      zIndex: 30,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    svgWrapper: {
      filter: isBreezy
        ? "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.2))"
        : "drop-shadow(0 10px 25px rgba(58, 46, 43, 0.08))",
      transition: "filter 0.5s ease",
    },
    switchPill: {
      marginTop: "16px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 24px",
      borderRadius: "50px",
      backgroundColor: isBreezy ? "#0284C7" : "#64748B",
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: "0.85rem",
      boxShadow: isBreezy
        ? "0 8px 20px rgba(2, 132, 199, 0.3)"
        : "0 4px 15px rgba(0,0,0,0.15)",
      transition: "all 0.4s ease",
    },
    breezeCone: {
      position: "absolute",
      top: isMobile ? "120px" : "150px",
      left: "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "100vw" : "1200px",
      height: isMobile ? "1050px" : "750px",
      background: colors.breezeCone,
      clipPath: isMobile
        ? "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)"
        : "polygon(40% 0%, 60% 0%, 95% 100%, 5% 100%)",
      opacity: isBreezy ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity 0.7s ease-in-out",
      zIndex: 1,
    },
    // FEATURE CARDS
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      position: "relative",
      zIndex: 10,
    },
    featureCard: (isActive) => ({
      backgroundColor: isActive ? colors.cardFresh : colors.cardMuted,
      padding: "36px 30px",
      borderRadius: "24px",
      border: isActive ? "2px solid #BAE6FD" : "2px solid #E5E0D8",
      boxShadow: isActive
        ? "0 20px 40px rgba(59, 130, 246, 0.08), 0 0 15px rgba(186, 230, 253, 0.2)"
        : "0 8px 20px rgba(58, 46, 43, 0.03)",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }),
    iconBox: (isActive) => ({
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      background: isActive
        ? "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)"
        : "#E9E4DC",
      color: isActive ? "#0284C7" : colors.walnutLight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      border: isActive ? "1px solid #7DD3FC" : "1px solid transparent",
      transition: "all 0.5s ease",
    }),
    featureTitle: {
      fontSize: "1.25rem",
      fontWeight: "800",
      color: colors.walnut,
      margin: "0 0 12px 0",
    },
    featureDesc: {
      fontSize: "0.95rem",
      lineHeight: "1.7",
      color: colors.walnutLight,
      margin: 0,
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
          
          .breeze-card:hover {
            transform: translateY(-6px);
          }
          
          /* PERFECT 3D HORIZONTAL FAN SPIN */
          @keyframes spin-flat {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .fan-spin-flat {
            animation: spin-flat 0.35s linear infinite;
            transform-origin: 0px 0px; 
          }
          .fan-stopped-flat {
            transform: rotate(45deg);
            transform-origin: 0px 0px;
          }

          /* Realistic 3D Window Shutters */
          .shutter-left {
            transform-origin: 120px 170px;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .shutter-left.open {
            transform: perspective(800px) rotateY(-85deg);
          }
          
          .shutter-right {
            transform-origin: 280px 170px;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .shutter-right.open {
            transform: perspective(800px) rotateY(85deg);
          }

          /* Smooth Breeze Lines Animation */
          @keyframes wind-swoosh {
            0% { transform: translate(-15px, -10px); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translate(25px, 15px); opacity: 0; }
          }
          .wind-line-1 { animation: wind-swoosh 3s infinite ease-in-out; }
          .wind-line-2 { animation: wind-swoosh 3s infinite ease-in-out 1s; }
          .wind-line-3 { animation: wind-swoosh 3s infinite ease-in-out 2s; }
          
          /* Slow pulsing for the gradient breeze cone */
          @keyframes gentle-pulse-breeze {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }
          .pulsing-breeze {
            animation: gentle-pulse-breeze 4s infinite ease-in-out;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* 1. TOP TITLE HEADER */}
          <div style={styles.headerRow}>
            <div style={styles.overlineWrapper}>
              <Home
                size={16}
                color={isBreezy ? colors.breezeBlue : colors.gold}
              />
              <p style={styles.overline}>Rooms & Accommodation</p>
            </div>
            <h2 style={styles.heading}>
              Fresh, Airy & <br />
              <span style={styles.serifHighlight}>Proper Shared Living.</span>
            </h2>
            <p style={styles.headerDesc}>
              At Shree Rajkot Lohana Boarding House, we provide well-ventilated
              rooms designed for 4 to 6 students. With common toilets accessible
              along the boarding corridor and 24/7 hot & cold water, we ensure a
              comfortable, homely stay.
            </p>
          </div>

          {/* 2. THE REALISTIC WINDOW & FAN STAGE */}
          <div style={styles.stageWrapper}>
            {/* The sweeping cool breeze gradient flowing downwards */}
            <div
              style={styles.breezeCone}
              className={isBreezy ? "pulsing-breeze" : ""}
            />

            {/* Interactive Vector Graphic - NO BACKGROUND */}
            <motion.div
              style={styles.visualContainer}
              onClick={() => setIsBreezy(!isBreezy)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="Click to toggle Window & Fan"
            >
              <div style={styles.svgWrapper}>
                <svg
                  width={isMobile ? "260" : "340"}
                  height={isMobile ? "230" : "300"}
                  viewBox="0 0 400 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Sky seen through the pane - warm morning gradient, not cartoon-blue */}
                    <linearGradient id="skyGrad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7FB8E8" />
                      <stop offset="55%" stopColor="#BEDCF2" />
                      <stop offset="100%" stopColor="#EFF6FB" />
                    </linearGradient>

                    {/* Wall around the window - has its own gradient so the frame reads as inset */}
                    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EDEDE8" />
                      <stop offset="100%" stopColor="#E2E1DA" />
                    </linearGradient>

                    {/* Painted wooden frame - warm off-white, not plastic-glossy */}
                    <linearGradient id="woodFrame" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FBFAF6" />
                      <stop offset="100%" stopColor="#D8D4C8" />
                    </linearGradient>
                    <linearGradient id="woodFrameSide" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#C9C5B8" />
                      <stop offset="50%" stopColor="#F5F3EC" />
                      <stop offset="100%" stopColor="#C9C5B8" />
                    </linearGradient>

                    {/* Real glass - subtle blue tint, low opacity so it stays transparent */}
                    <linearGradient id="paneTint" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#DCEBF6" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#C7DCE9" stopOpacity="0.15" />
                    </linearGradient>
                    <linearGradient id="paneSheen" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    {/* Fan: satin nickel motor */}
                    <linearGradient id="nickel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D7DBDE" />
                      <stop offset="25%" stopColor="#9AA2A8" />
                      <stop offset="55%" stopColor="#636B71" />
                      <stop offset="80%" stopColor="#3B4147" />
                      <stop offset="100%" stopColor="#1E2225" />
                    </linearGradient>
                    <radialGradient id="nickelCap" cx="32%" cy="28%" r="80%">
                      <stop offset="0%" stopColor="#E4E7E9" />
                      <stop offset="45%" stopColor="#8A9298" />
                      <stop offset="100%" stopColor="#22262A" />
                    </radialGradient>

                    {/* Fan blade - matte walnut wood, like real ceiling fans in Indian boarding houses */}
                    <linearGradient id="walnutBlade" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2A1D14" />
                      <stop offset="15%" stopColor="#4A3320" />
                      <stop offset="40%" stopColor="#6B4A2E" />
                      <stop offset="52%" stopColor="#7C5736" />
                      <stop offset="65%" stopColor="#5E4028" />
                      <stop offset="85%" stopColor="#3C2A1B" />
                      <stop offset="100%" stopColor="#20150E" />
                    </linearGradient>

                    <filter id="frameShadow" x="-40%" y="-40%" width="180%" height="180%">
                      <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.16" />
                    </filter>
                    <filter id="fanShadow" x="-60%" y="-30%" width="220%" height="200%">
                      <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.18" />
                    </filter>
                  </defs>

                  {/* NO BACKGROUND PANEL - stays transparent over the section */}

                  {/* soft ambient floor/wall shadow beneath the window for grounding */}
                  <ellipse cx="205" cy="272" rx="110" ry="10" fill="#000000" opacity="0.05" />

                  {/* ============ WINDOW ============ */}
                  {/* recessed wall reveal around the opening */}
                  <rect x="95" y="70" width="220" height="190" fill="url(#wallGrad)" rx="6" />
                  <rect x="95" y="70" width="220" height="190" fill="none" stroke="#00000012" strokeWidth="1" rx="6" />

                  {/* sky visible through the opening */}
                  <rect x="118" y="92" width="174" height="146" fill="url(#skyGrad2)" />
                  {/* distant rooftop silhouette for real-world context */}
                  <path
                    d="M118 232 L138 232 L138 218 L150 218 L150 226 L168 226 L168 210 L182 210 L182 224 L205 224 L205 214 L222 214 L222 228 L250 228 L250 216 L270 216 L270 230 L292 230 L292 238 L118 238 Z"
                    fill="#AFC9D9"
                    opacity="0.55"
                  />
                  {/* soft clouds */}
                  <ellipse cx="150" cy="118" rx="22" ry="6" fill="#FFFFFF" opacity="0.6" />
                  <ellipse cx="168" cy="112" rx="16" ry="5" fill="#FFFFFF" opacity="0.5" />
                  <ellipse cx="248" cy="130" rx="20" ry="5.5" fill="#FFFFFF" opacity="0.5" />

                  {/* sun, soft realistic bloom */}
                  <g opacity={isBreezy ? 1 : 0.12} style={{ transition: "opacity 0.6s ease" }}>
                    <circle cx="255" cy="115" r="26" fill="#FFF4CC" opacity="0.3" />
                    <circle cx="255" cy="115" r="13" fill="#FFE9A0" />
                    <circle cx="255" cy="115" r="13" fill="url(#paneSheen)" opacity="0.4" />
                  </g>

                  {/* outer painted wooden frame with real shadow */}
                  <rect
                    x="112"
                    y="86"
                    width="186"
                    height="158"
                    fill="none"
                    stroke="url(#woodFrame)"
                    strokeWidth="10"
                    filter="url(#frameShadow)"
                  />
                  <rect x="112" y="86" width="186" height="158" fill="none" stroke="#B7B2A3" strokeWidth="0.75" opacity="0.7" />
                  {/* inner sash frame */}
                  <rect x="120" y="94" width="170" height="142" fill="none" stroke="url(#woodFrameSide)" strokeWidth="3" />

                  {/* windowsill shadow line under opening for depth */}
                  <rect x="112" y="242" width="186" height="6" fill="#00000018" rx="1" />
                  <rect x="108" y="246" width="194" height="5" fill="url(#woodFrame)" rx="1" />

                  {/* ============ TWO GLASS SASHES (open outward like a real casement window) ============ */}
                  <g>
                    <g className={`shutter-left ${isBreezy ? "open" : ""}`}>
                      <rect x="122" y="96" width="83" height="138" fill="url(#paneTint)" />
                      <rect x="122" y="96" width="83" height="138" fill="none" stroke="url(#woodFrameSide)" strokeWidth="4" />
                      <line x1="163.5" y1="96" x2="163.5" y2="234" stroke="url(#woodFrameSide)" strokeWidth="3" />
                      <line x1="122" y1="165" x2="205" y2="165" stroke="url(#woodFrameSide)" strokeWidth="3" />
                      <polygon points="128,102 152,102 128,132" fill="url(#paneSheen)" opacity="0.55" />
                      <polygon points="130,150 172,110 178,110 132,158" fill="url(#paneSheen)" opacity="0.28" />
                      {/* handle */}
                      <rect x="196" y="160" width="4" height="16" rx="2" fill="#8A8478" />
                    </g>

                    <g className={`shutter-right ${isBreezy ? "open" : ""}`}>
                      <rect x="205" y="96" width="83" height="138" fill="url(#paneTint)" />
                      <rect x="205" y="96" width="83" height="138" fill="none" stroke="url(#woodFrameSide)" strokeWidth="4" />
                      <line x1="246.5" y1="96" x2="246.5" y2="234" stroke="url(#woodFrameSide)" strokeWidth="3" />
                      <line x1="205" y1="165" x2="288" y2="165" stroke="url(#woodFrameSide)" strokeWidth="3" />
                      <polygon points="211,102 235,102 211,132" fill="url(#paneSheen)" opacity="0.55" />
                      <polygon points="213,150 255,110 261,110 215,158" fill="url(#paneSheen)" opacity="0.28" />
                      <rect x="210" y="160" width="4" height="16" rx="2" fill="#8A8478" />
                    </g>
                  </g>

                  {/* breeze lines drifting through the open window - thin & translucent */}
                  {isBreezy && (
                    <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
                      <path d="M150 150 Q182 140 205 168" className="wind-line-1" />
                      <path d="M185 190 Q208 168 240 198" className="wind-line-2" />
                      <path d="M140 210 Q165 190 198 218" className="wind-line-3" />
                    </g>
                  )}

                  {/* ============ CEILING FAN (positioned above the window, real proportions) ============ */}
                  <g filter="url(#fanShadow)">
                    {/* ceiling canopy */}
                    <path d="M186 4 Q205 12 224 4 L212 20 L198 20 Z" fill="url(#nickel)" />
                    {/* downrod */}
                    <rect x="202.5" y="18" width="5" height="26" fill="url(#nickel)" />
                    <rect x="204" y="18" width="1.2" height="26" fill="#FFFFFF" opacity="0.3" />

                    {/* motor body */}
                    <ellipse cx="205" cy="46" rx="21" ry="6" fill="url(#nickel)" />
                    <rect x="184" y="46" width="42" height="11" fill="url(#nickel)" />
                    <rect x="184" y="46" width="42" height="2.5" fill="#FFFFFF" opacity="0.22" />
                    <ellipse cx="205" cy="57" rx="21" ry="6" fill="#131619" />
                    <ellipse cx="205" cy="58.3" rx="15" ry="4" fill="url(#nickelCap)" />
                  </g>

                  {/* Spinning blade assembly */}
                  <g transform="translate(205, 58.3) scale(1, 0.24)">
                    <g className={isBreezy ? "fan-spin-flat" : "fan-stopped-flat"}>
                      <circle cx="0" cy="0" r="17" fill="url(#nickelCap)" />
                      <circle cx="0" cy="0" r="6.5" fill="#0F1215" />

                      <g>
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106 C 17,-92 12,-55 5,-17 Z" fill="url(#walnutBlade)" />
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106" fill="none" stroke="#D6BE93" strokeWidth="1" opacity="0.5" />
                        <path d="M -4,-19 L -6,-40 L 6,-40 L 4,-19 Z" fill="#818A93" />
                        <path d="M -4,-19 L -6,-40 L -2,-40 L -3,-19 Z" fill="#C4CCD3" opacity="0.55" />
                      </g>
                      <g transform="rotate(120)">
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106 C 17,-92 12,-55 5,-17 Z" fill="url(#walnutBlade)" />
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106" fill="none" stroke="#D6BE93" strokeWidth="1" opacity="0.5" />
                        <path d="M -4,-19 L -6,-40 L 6,-40 L 4,-19 Z" fill="#818A93" />
                        <path d="M -4,-19 L -6,-40 L -2,-40 L -3,-19 Z" fill="#C4CCD3" opacity="0.55" />
                      </g>
                      <g transform="rotate(240)">
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106 C 17,-92 12,-55 5,-17 Z" fill="url(#walnutBlade)" />
                        <path d="M -5,-17 C -12,-55 -17,-92 0,-106" fill="none" stroke="#D6BE93" strokeWidth="1" opacity="0.5" />
                        <path d="M -4,-19 L -6,-40 L 6,-40 L 4,-19 Z" fill="#818A93" />
                        <path d="M -4,-19 L -6,-40 L -2,-40 L -3,-19 Z" fill="#C4CCD3" opacity="0.55" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Interactive Pill Switch */}
              <div style={styles.switchPill}>
                <Power size={14} />
                <span>
                  {isBreezy
                    ? "Breeze Flowing • Click to Close"
                    : "Window Closed • Click for Fresh Air"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 3. THE REFLECTED DETAILS GRID */}
          <div style={styles.featuresGrid}>
            {roomDetails.map((item, idx) => (
              <div
                key={idx}
                className="breeze-card"
                style={styles.featureCard(isBreezy)}
              >
                <div style={styles.iconBox(isBreezy)}>{item.icon}</div>
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