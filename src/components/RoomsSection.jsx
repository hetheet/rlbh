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
                  width={isMobile ? "240" : "320"}
                  height={isMobile ? "210" : "280"}
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="100%" stopColor="#E0F2FE" />
                    </linearGradient>
                    <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                      <stop offset="50%" stopColor="rgba(240, 248, 255, 0.7)" />
                      <stop
                        offset="100%"
                        stopColor="rgba(255, 255, 255, 0.95)"
                      />
                    </linearGradient>
                    <linearGradient id="metalMotor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#94A3B8" />
                      <stop offset="50%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                    <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#334155" />
                      <stop offset="50%" stopColor="#64748B" />
                      <stop offset="100%" stopColor="#1E293B" />
                    </linearGradient>
                  </defs>

                  {/* NO BACKGROUND PATH - COMPLETELY TRANSPARENT */}

                  {/* --- THE WINDOW --- */}
                  {/* Sky Background (Visible inside the window hole) */}
                  <rect
                    x="120"
                    y="90"
                    width="160"
                    height="150"
                    fill="url(#skyGrad)"
                  />

                  {/* Glowing Sun */}
                  <g
                    opacity={isBreezy ? 1 : 0.2}
                    style={{ transition: "opacity 0.6s ease" }}
                  >
                    <circle
                      cx="155"
                      cy="115"
                      r="14"
                      fill="#FEF08A"
                      filter="drop-shadow(0 0 10px #FEF08A)"
                    />
                  </g>

                  {/* Outer White Architectural Window Frame */}
                  <rect
                    x="110"
                    y="80"
                    width="180"
                    height="170"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="12"
                    rx="4"
                    filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                  />
                  <rect
                    x="116"
                    y="86"
                    width="168"
                    height="158"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    rx="2"
                  />

                  {/* --- 3D TRANSPARENT WHITE GLASS SHUTTERS --- */}
                  <g>
                    {/* Left Glass Shutter */}
                    <g className={`shutter-left ${isBreezy ? "open" : ""}`}>
                      {/* Glass Pane */}
                      <rect
                        x="120"
                        y="90"
                        width="80"
                        height="150"
                        fill="url(#glassGrad)"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />
                      {/* White Grid Lines */}
                      <line
                        x1="160"
                        y1="90"
                        x2="160"
                        y2="240"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />
                      <line
                        x1="120"
                        y1="165"
                        x2="200"
                        y2="165"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />

                      {/* Glass Diagonal Reflections */}
                      <polygon
                        points="125,95 150,95 125,120"
                        fill="#FFFFFF"
                        opacity="0.6"
                      />
                      <polygon
                        points="125,160 175,110 185,110 125,170"
                        fill="#FFFFFF"
                        opacity="0.4"
                      />
                    </g>

                    {/* Right Glass Shutter */}
                    <g className={`shutter-right ${isBreezy ? "open" : ""}`}>
                      {/* Glass Pane */}
                      <rect
                        x="200"
                        y="90"
                        width="80"
                        height="150"
                        fill="url(#glassGrad)"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />
                      {/* White Grid Lines */}
                      <line
                        x1="240"
                        y1="90"
                        x2="240"
                        y2="240"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />
                      <line
                        x1="200"
                        y1="165"
                        x2="280"
                        y2="165"
                        stroke="#FFFFFF"
                        strokeWidth="4"
                      />

                      {/* Glass Diagonal Reflections */}
                      <polygon
                        points="205,95 230,95 205,120"
                        fill="#FFFFFF"
                        opacity="0.6"
                      />
                      <polygon
                        points="205,160 255,110 265,110 205,170"
                        fill="#FFFFFF"
                        opacity="0.4"
                      />
                    </g>
                  </g>

                  {/* Animated Wind Swooshes (Flowing out of the window) */}
                  {isBreezy && (
                    <g
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                    >
                      <path
                        d="M150 140 Q180 130 200 160"
                        className="wind-line-1"
                      />
                      <path
                        d="M180 180 Q200 160 230 190"
                        className="wind-line-2"
                      />
                      <path
                        d="M140 200 Q160 180 190 210"
                        className="wind-line-3"
                      />
                    </g>
                  )}

                  {/* --- REALISTIC 3D METALLIC CEILING FAN --- */}
                  {/* Ceiling Mount Canopy */}
                  <path
                    d="M185 0 Q200 5 215 0 L208 12 L192 12 Z"
                    fill="#64748B"
                  />
                  {/* Downrod */}
                  <rect x="197" y="12" width="6" height="30" fill="#475569" />

                  {/* Motor Housing (3D Cylinder Effect) */}
                  <ellipse cx="200" cy="42" rx="22" ry="6" fill="#94A3B8" />
                  <rect
                    x="178"
                    y="42"
                    width="44"
                    height="12"
                    fill="url(#metalMotor)"
                  />
                  <ellipse cx="200" cy="54" rx="22" ry="6" fill="#1E293B" />

                  {/* Inner Spinner */}
                  <ellipse cx="200" cy="56" rx="16" ry="4" fill="#0F172A" />

                  {/* Spinning Blades Group (Uses scaleY to spin perfectly horizontally) */}
                  <g transform="translate(200, 56) scale(1, 0.25)">
                    <g
                      className={
                        isBreezy ? "fan-spin-flat" : "fan-stopped-flat"
                      }
                    >
                      {/* Central Motor Cap */}
                      <circle cx="0" cy="0" r="18" fill="url(#metalMotor)" />
                      <circle cx="0" cy="0" r="8" fill="#0F172A" />

                      {/* Perfect 3-Blade Geometry with Brackets */}
                      {/* Blade 1 (Points Up) */}
                      <g>
                        <path
                          d="M -4,-18 C -10,-60 -15,-100 0,-110 C 15,-100 10,-60 4,-18 Z"
                          fill="url(#bladeGrad)"
                        />
                        <path
                          d="M -4,-18 L -6,-40 L 6,-40 L 4,-18 Z"
                          fill="#94A3B8"
                        />
                      </g>

                      {/* Blade 2 (Bottom Right) */}
                      <g transform="rotate(120)">
                        <path
                          d="M -4,-18 C -10,-60 -15,-100 0,-110 C 15,-100 10,-60 4,-18 Z"
                          fill="url(#bladeGrad)"
                        />
                        <path
                          d="M -4,-18 L -6,-40 L 6,-40 L 4,-18 Z"
                          fill="#94A3B8"
                        />
                      </g>

                      {/* Blade 3 (Bottom Left) */}
                      <g transform="rotate(240)">
                        <path
                          d="M -4,-18 C -10,-60 -15,-100 0,-110 C 15,-100 10,-60 4,-18 Z"
                          fill="url(#bladeGrad)"
                        />
                        <path
                          d="M -4,-18 L -6,-40 L 6,-40 L 4,-18 Z"
                          fill="#94A3B8"
                        />
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
