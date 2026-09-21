import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Target,
  Activity,
  Medal,
  Flag,
  Zap,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import sports1 from "../assets/sports1.png";
import sports2 from "../assets/sports2.png";
import sports3 from "../assets/sports3.png";

export default function SportsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOutdoor, setIsOutdoor] = useState(true);

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

  // Premium Sports Palette (Dynamic Day/Grass vs Night/Hardwood)
  const colors = {
    bgOutdoor: "#F2FCF5",
    bgIndoor: "#FDF8F4",
    walnut: "#2C3E2D",
    walnutIndoor: "#3A2E2B",
    accentOutdoor: "#16A34A",
    accentIndoor: "#EA580C",
    beamOutdoor:
      "linear-gradient(180deg, rgba(134, 239, 172, 0.35) 0%, rgba(22, 163, 74, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
    beamIndoor:
      "linear-gradient(180deg, rgba(253, 186, 116, 0.35) 0%, rgba(234, 88, 12, 0.1) 50%, rgba(255, 255, 255, 0) 100%)",
    cardOutdoor: "#FFFFFF",
    cardMutedOutdoor: "#EBF8F0",
    cardIndoor: "#FFFFFF",
    cardMutedIndoor: "#FAEDE5",
  };

  const sportsImages = [
    {
      id: 1,
      src: sports2,
      alt: "Cricket match under floodlights",
      isMain: true,
    },
    {
      id: 2,
      src: sports3,
      alt: "Action shot of an outdoor volleyball game",
      isMain: false,
    },
    {
      id: 3,
      src: sports1,
      alt: "Students playing indoor strategy games",
      isMain: false,
    },
  ];

  const sportsFeatures = [
    {
      icon: <Flag size={26} />,
      title: "Cricket & Volleyball Fields",
      desc: "Our spacious, well-maintained outdoor grounds provide the perfect space for students to enjoy daily cricket matches and volleyball games.",
    },
    {
      icon: <Zap size={26} />,
      title: "Night Tournaments",
      desc: "Experience the thrill of competitive sports under brilliant arena floodlights with our night cricket and volleyball leagues.",
    },
    {
      icon: <Target size={26} />,
      title: "Table Tennis Action",
      desc: "Professional-grade indoor tables with optimal lighting designed for fast-paced rallies and refining hand-eye coordination.",
    },
    {
      icon: <Activity size={26} />,
      title: "Carrom & Strategy",
      desc: "Dedicated quiet recreation zones featuring premium Carrom boards, fostering deep focus, strategic thinking, and relaxation.",
    },
    {
      icon: <Medal size={26} />,
      title: "Inter-House Leagues",
      desc: "Structured competitive tournaments that build strong character, instill sportsmanship, and forge lifelong bonds of brotherhood.",
    },
    {
      icon: <Trophy size={26} />,
      title: "Stress Relief ",
      desc: "Our sports facilities provide a necessary escape from daily academic pressures, allowing students to recharge, refresh their minds, and return to their studies with renewed clarity.",
    },
  ];

  const activeBg = isOutdoor ? colors.bgOutdoor : colors.bgIndoor;
  const activeWalnut = isOutdoor ? colors.walnut : colors.walnutIndoor;
  const activeAccent = isOutdoor ? colors.accentOutdoor : colors.accentIndoor;
  const activeCardBg = isOutdoor ? colors.cardOutdoor : colors.cardIndoor;
  const activeCardMuted = isOutdoor
    ? colors.cardMutedOutdoor
    : colors.cardMutedIndoor;
  const activeBeam = isOutdoor ? colors.beamOutdoor : colors.beamIndoor;

  const styles = {
    section: {
      backgroundColor: activeBg,
      padding: isMobile ? "60px 20px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      color: activeWalnut,
      position: "relative",
      overflow: "hidden",
      transition: "background-color 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      position: "relative",
      zIndex: 10,
    },
    heroWrapper: {
      display: isMobile ? "flex" : "grid",
      flexDirection: isMobile ? "column" : "row",
      gridTemplateColumns: isMobile ? "none" : "1.1fr 0.9fr",
      gap: isMobile ? "30px" : "60px",
      alignItems: "center",
      marginBottom: isMobile ? "50px" : "80px",
    },
    narrativeBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      order: isMobile ? -1 : 1, 
    },
    imageSectionWrapper: {
      order: isMobile ? 1 : -1, 
      width: "100%",
    },
    imageCollage: {
      display: isMobile ? "none" : "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 180px)",
      gap: "16px",
      position: "relative",
    },
    photoCard: (isMain, index) => ({
      gridColumn: isMain ? "1 / span 1" : "2 / span 1",
      gridRow: isMain ? "1 / span 2" : `${index} / span 1`,
      height: isMain ? "376px" : "180px",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
      border: "3px solid #FFFFFF",
      backgroundColor: activeCardMuted,
      position: "relative",
      transition: "all 0.5s ease",
    }),
    mobileSliderContainer: {
      display: isMobile ? "flex" : "none",
      flexWrap: "nowrap",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      gap: "16px",
      paddingBottom: "10px",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      WebkitOverflowScrolling: "touch",
    },
    mobileSlide: {
      flex: "0 0 85%",
      minWidth: "85%", 
      scrollSnapAlign: "center",
      height: "260px",
      borderRadius: "20px",
      overflow: "hidden",
      border: `3px solid ${activeCardMuted}`,
      position: "relative",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    photoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    overlineWrapper: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 16px",
      backgroundColor: isOutdoor ? "#DCFCE7" : "#FFEDD5",
      borderRadius: "50px",
      marginBottom: "18px",
      width: "fit-content",
      transition: "all 0.5s ease",
    },
    overline: {
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: activeAccent,
      margin: 0,
    },
    heading: {
      fontSize: isMobile ? "2.3rem" : "3.4rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: activeWalnut,
      margin: "0 0 18px 0",
      letterSpacing: "-1px",
      transition: "color 0.5s ease",
    },
    serifHighlight: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: "600",
      color: activeAccent,
      transition: "color 0.5s ease",
    },
    paragraph: {
      fontSize: "1.08rem",
      lineHeight: "1.8",
      color: isOutdoor ? "#4B5563" : "#574C49",
      marginBottom: "20px",
      transition: "color 0.5s ease",
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
      color: activeWalnut,
      transition: "color 0.5s ease",
    },
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
      filter: isOutdoor
        ? "drop-shadow(0 20px 40px rgba(22, 163, 74, 0.25))"
        : "drop-shadow(0 20px 40px rgba(234, 88, 12, 0.25))",
      transition: "filter 0.5s ease",
    },
    switchPill: {
      marginTop: "16px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 26px",
      borderRadius: "50px",
      backgroundColor: activeAccent,
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: "0.85rem",
      boxShadow: isOutdoor
        ? "0 8px 20px rgba(22, 163, 74, 0.3)"
        : "0 8px 20px rgba(234, 88, 12, 0.3)",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    atmosphereCone: {
      position: "absolute",
      top: isMobile ? "130px" : "160px",
      left: "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "100vw" : "1200px",
      height: isMobile ? "1050px" : "750px",
      background: activeBeam,
      clipPath: isMobile
        ? "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)"
        : "polygon(40% 0%, 60% 0%, 95% 100%, 5% 100%)",
      opacity: 1,
      pointerEvents: "none",
      transition: "background 0.8s ease-in-out",
      zIndex: 1,
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      position: "relative",
      zIndex: 10,
    },
    featureCard: (isActive) => ({
      backgroundColor: isActive ? activeCardBg : activeCardMuted,
      padding: "36px 30px",
      borderRadius: "24px",
      border: isOutdoor
        ? isActive
          ? "2px solid #86EFAC"
          : "2px solid #DCFCE7"
        : isActive
          ? "2px solid #FDBA74"
          : "2px solid #FFEDD5",
      boxShadow: isOutdoor
        ? isActive
          ? "0 20px 40px rgba(22, 163, 74, 0.08), 0 0 15px rgba(134, 239, 172, 0.2)"
          : "0 8px 20px rgba(0, 0, 0, 0.03)"
        : isActive
          ? "0 20px 40px rgba(234, 88, 12, 0.08), 0 0 15px rgba(253, 186, 116, 0.2)"
          : "0 8px 20px rgba(0, 0, 0, 0.03)",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }),
    iconBox: (isActive) => ({
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      background: isOutdoor
        ? isActive
          ? "linear-gradient(135deg, #DCFCE7 0%, #86EFAC 100%)"
          : "#EBF8F0"
        : isActive
          ? "linear-gradient(135deg, #FFEDD5 0%, #FDBA74 100%)"
          : "#FAEDE5",
      color: isActive ? activeAccent : "#9CA3AF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      border: isOutdoor
        ? isActive
          ? "1px solid #4ADE80"
          : "1px solid transparent"
        : isActive
          ? "1px solid #FB923C"
          : "1px solid transparent",
      transition: "all 0.5s ease",
    }),
    featureTitle: {
      fontSize: "1.25rem",
      fontWeight: "800",
      color: activeWalnut,
      margin: "0 0 12px 0",
      transition: "color 0.5s ease",
    },
    featureDesc: {
      fontSize: "0.95rem",
      lineHeight: "1.7",
      color: isOutdoor ? "#4B5563" : "#6B5C58",
      margin: 0,
      transition: "color 0.5s ease",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
          
          .sports-photo-card:hover .sports-photo-img,
          .mobile-slide-card:hover .sports-photo-img {
            transform: scale(1.06);
          }

          .sports-feature-card:hover {
            transform: translateY(-6px);
          }
          
          .hide-scroll::-webkit-scrollbar {
            display: none;
          }
          
          /* Floating effect for the clouds/lights */
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float-slow 4s infinite ease-in-out;
          }

          /* Pulsing environment cone */
          @keyframes gentle-pulse-sports {
            0% { opacity: 0.7; }
            50% { opacity: 1; }
            100% { opacity: 0.7; }
          }
          .pulsing-environment {
            animation: gentle-pulse-sports 4s infinite ease-in-out;
          }

          /* Custom Volleyball Arc Animation */
          @keyframes volley-arc {
            0%   { transform: translate(-60px, 15px) scale(0.85); }
            25%  { transform: translate(0px, -70px) scale(1.1); }
            50%  { transform: translate(60px, -15px) scale(0.85); }
            75%  { transform: translate(0px, -70px) scale(1.1); }
            100% { transform: translate(-60px, 15px) scale(0.85); }
          }
          .animate-volley-play {
            animation: volley-arc 2.5s infinite linear;
            transform-origin: center;
          }

          /* Custom Carrom Animations */
          @keyframes carrom-striker-move {
            0%, 20% { transform: translate(0px, 0px); }
            35%, 60% { transform: translate(45px, -25px); } 
            75%, 100% { transform: translate(0px, 0px); }
          }
          .animate-carrom-striker {
            animation: carrom-striker-move 3s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          @keyframes carrom-coin-move {
            0%, 35% { transform: translate(0px, 0px); opacity: 1; }
            55% { transform: translate(105px, 0px); opacity: 1; } 
            60%, 80% { transform: translate(105px, 0px); opacity: 0; } 
            90%, 100% { transform: translate(0px, 0px); opacity: 1; } 
          }
          .animate-carrom-coin {
            animation: carrom-coin-move 3s infinite cubic-bezier(0.2, 0.8, 0.2, 1);
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.heroWrapper}>
            {/* Image Section: Desktop Grid OR Mobile Slider */}
            <div style={styles.imageSectionWrapper}>
              {/* DESKTOP COLLAGE */}
              <div style={styles.imageCollage}>
                {sportsImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className="sports-photo-card"
                    style={styles.photoCard(img.isMain, idx + 1)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="sports-photo-img"
                      style={styles.photoImg}
                    />
                  </div>
                ))}
              </div>

              {/* MOBILE SLIDER */}
              <div style={styles.mobileSliderContainer} className="hide-scroll">
                {sportsImages.map((img) => (
                  <div
                    key={img.id}
                    className="mobile-slide-card"
                    style={styles.mobileSlide}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="sports-photo-img"
                      style={styles.photoImg}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Box */}
            <div style={styles.narrativeBox}>
              <div style={styles.overlineWrapper}>
                <Trophy size={16} color={activeAccent} />
                <p style={styles.overline}>Sports & Athletics</p>
              </div>

              <h2 style={styles.heading}>
                Dynamic Arenas for <br />
                <span style={styles.serifHighlight}>Peak Performance.</span>
              </h2>

              <p style={styles.paragraph}>
                At Shree Rajkot Lohana Boarding House, we believe a healthy mind
                resides in a healthy body. Our expansive sports infrastructure
                ensures students have the perfect outlet for their physical
                energy and strategic minds.
              </p>
              <p style={{ ...styles.paragraph, marginBottom: "24px" }}>
                Whether it's hitting a boundary on the open cricket field,
                smashing a table tennis ball, or enjoying a focused game of
                carrom, our facilities foster teamwork, discipline, and
                excellence.
              </p>

              <div style={styles.listGrid}>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={activeAccent} />
                  <span>Night Cricket </span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={activeAccent} />
                  <span>Outdoor Volleyball</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={activeAccent} />
                  <span>Table Tennis Arena</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={activeAccent} />
                  <span>Carrom & Board Games</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE REALISTIC ISOMETRIC COURT STAGE */}
          <div style={styles.stageWrapper}>
            <div
              style={styles.atmosphereCone}
              className="pulsing-environment"
            />

            <motion.div
              style={styles.visualContainer}
              onClick={() => setIsOutdoor(!isOutdoor)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="Click to toggle Outdoor / Indoor Arenas"
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
                    {/* Sand Volleyball Court Gradient */}
                    <linearGradient id="sandGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FDE047" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>

                    {/* Carrom Board Gradients */}
                    <linearGradient
                      id="carromFrame"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#78350F" />
                      <stop offset="100%" stopColor="#451A03" />
                    </linearGradient>
                    <linearGradient
                      id="carromBoard"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#FDE68A" />
                      <stop offset="100%" stopColor="#D97706" />
                    </linearGradient>

                    {/* Base Platform Gradients */}
                    <linearGradient id="baseLeft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E5E7EB" />
                      <stop offset="100%" stopColor="#9CA3AF" />
                    </linearGradient>
                    <linearGradient id="baseRight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D1D5DB" />
                      <stop offset="100%" stopColor="#6B7280" />
                    </linearGradient>

                    {/* Balls & Striker */}
                    <radialGradient id="volleyBall" cx="50%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#FDE047" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </radialGradient>
                    <radialGradient id="strikerGrad" cx="40%" cy="30%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="80%" stopColor="#E5E7EB" />
                      <stop offset="100%" stopColor="#9CA3AF" />
                    </radialGradient>
                  </defs>

                  {/* Backdrop Elements */}
                  <g
                    className="animate-float"
                    style={{
                      transition: "opacity 0.6s ease",
                      opacity: isOutdoor ? 1 : 0,
                    }}
                  >
                    {/* Sun */}
                    <circle
                      cx="200"
                      cy="50"
                      r="24"
                      fill="#FBBF24"
                      filter="drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))"
                    />
                    <path
                      d="M110 70 Q120 50 140 60 Q160 40 170 65 Q180 75 160 80 L110 80 Z"
                      fill="#FFFFFF"
                      opacity="0.8"
                    />
                    <path
                      d="M290 60 Q280 40 260 50 Q240 30 230 55 Q220 65 240 70 L290 70 Z"
                      fill="#FFFFFF"
                      opacity="0.6"
                    />
                  </g>

                  {/* Indoor Lights for Carrom Room */}
                  <g
                    className="animate-float"
                    style={{
                      transition: "opacity 0.6s ease",
                      opacity: isOutdoor ? 0 : 1,
                    }}
                  >
                    <path
                      d="M120 20 L150 45 L140 55 L110 30 Z"
                      fill="#4B5563"
                    />
                    <ellipse
                      cx="145"
                      cy="50"
                      rx="15"
                      ry="8"
                      fill="#FEF08A"
                      transform="rotate(-35 145 50)"
                      filter="drop-shadow(0 0 10px #FEF08A)"
                    />
                    <path
                      d="M280 20 L250 45 L260 55 L290 30 Z"
                      fill="#4B5563"
                    />
                    <ellipse
                      cx="255"
                      cy="50"
                      rx="15"
                      ry="8"
                      fill="#FEF08A"
                      transform="rotate(35 255 50)"
                      filter="drop-shadow(0 0 10px #FEF08A)"
                    />
                  </g>

                  {/* 3D ISOMETRIC PLATFORM */}
                  <g transform="translate(0, 30)">
                    {/* Left Face */}
                    <polygon
                      points="60,160 200,230 200,260 60,190"
                      fill="url(#baseLeft)"
                    />
                    {/* Right Face */}
                    <polygon
                      points="200,230 340,160 340,190 200,260"
                      fill="url(#baseRight)"
                    />

                    {/* Top Surface */}
                    <polygon
                      points="200,90 340,160 200,230 60,160"
                      fill={isOutdoor ? "url(#sandGrad)" : "url(#carromFrame)"}
                      style={{ transition: "fill 0.6s ease" }}
                    />

                    {/* Court Lines: OUTDOOR (Volleyball) */}
                    <g
                      style={{
                        transition: "opacity 0.6s ease",
                        opacity: isOutdoor ? 1 : 0,
                      }}
                    >
                      {/* Court Boundary */}
                      <polygon
                        points="200,105 310,160 200,215 90,160"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        opacity="0.9"
                      />

                      {/* Center Line */}
                      <line
                        x1="145"
                        y1="132"
                        x2="255"
                        y2="187"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        opacity="0.9"
                      />

                      {/* Volleyball Net Posts */}
                      <line
                        x1="145"
                        y1="132"
                        x2="145"
                        y2="90"
                        stroke="#374151"
                        strokeWidth="3"
                      />
                      <line
                        x1="255"
                        y1="187"
                        x2="255"
                        y2="145"
                        stroke="#374151"
                        strokeWidth="3"
                      />

                      {/* Net Grid */}
                      <polygon
                        points="145,95 255,150 255,175 145,120"
                        fill="#E5E7EB"
                        opacity="0.6"
                      />
                      <line
                        x1="145"
                        y1="95"
                        x2="255"
                        y2="150"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                      <line
                        x1="145"
                        y1="120"
                        x2="255"
                        y2="175"
                        stroke="#FFFFFF"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Inner Board: INDOOR (Carrom) */}
                    <g
                      style={{
                        transition: "opacity 0.6s ease",
                        opacity: isOutdoor ? 0 : 1,
                      }}
                    >
                      {/* Carrom Inner Wood */}
                      <polygon
                        points="200,98 325,160 200,222 75,160"
                        fill="url(#carromBoard)"
                      />

                      {/* 4 Corner Pockets */}
                      <ellipse
                        cx="200"
                        cy="108"
                        rx="7"
                        ry="3.5"
                        fill="#111827"
                      />
                      <ellipse
                        cx="310"
                        cy="160"
                        rx="7"
                        ry="3.5"
                        fill="#111827"
                      />
                      <ellipse
                        cx="200"
                        cy="212"
                        rx="7"
                        ry="3.5"
                        fill="#111827"
                      />
                      <ellipse
                        cx="90"
                        cy="160"
                        rx="7"
                        ry="3.5"
                        fill="#111827"
                      />

                      {/* Center Circle Design */}
                      <ellipse
                        cx="200"
                        cy="160"
                        rx="20"
                        ry="10"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="1.5"
                      />
                      <ellipse
                        cx="200"
                        cy="160"
                        rx="16"
                        ry="8"
                        fill="none"
                        stroke="#111827"
                        strokeWidth="1"
                      />

                      {/* Red Queen (Center) */}
                      <ellipse
                        cx="200"
                        cy="160"
                        rx="3.5"
                        ry="1.75"
                        fill="#EF4444"
                      />
                    </g>
                  </g>

                  {/* Animated Game Elements */}
                  <g>
                    {/* Volleyball (Outdoor) */}
                    <g
                      style={{
                        transition: "opacity 0.4s ease",
                        opacity: isOutdoor ? 1 : 0,
                      }}
                    >
                      <g className="animate-volley-play">
                        <circle
                          cx="200"
                          cy="160"
                          r="12"
                          fill="url(#volleyBall)"
                        />
                        {/* Volleyball curves */}
                        <path
                          d="M192 150 Q205 160 210 166"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M190 165 Q200 155 208 152"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                      </g>
                    </g>

                    {/* Carrom Pieces (Indoor) */}
                    <g
                      style={{
                        transition: "opacity 0.4s ease",
                        opacity: isOutdoor ? 0 : 1,
                      }}
                    >
                      {/* Black Coin sinking into right pocket */}
                      <g className="animate-carrom-coin">
                        <ellipse
                          cx="200"
                          cy="190"
                          rx="4.5"
                          ry="2.25"
                          fill="#111827"
                        />
                      </g>

                      {/* White Striker hitting the coin */}
                      <g className="animate-carrom-striker">
                        <ellipse
                          cx="140"
                          cy="220"
                          rx="6.5"
                          ry="3.25"
                          fill="url(#strikerGrad)"
                          stroke="#6B7280"
                          strokeWidth="0.5"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Interactive Pill Switch */}
              <div style={styles.switchPill}>
                <RefreshCw size={14} />
                <span>
                  {isOutdoor
                    ? "Outdoor Fields • Switch to Indoor Zones"
                    : "Indoor Zones • Switch to Outdoor Fields"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 3. THE REFLECTED DETAILS SECTION */}
          <div style={styles.featuresGrid}>
            {sportsFeatures.map((item, idx) => (
              <div
                key={idx}
                className="sports-feature-card"
                // FIX: Set isActive flag to explicitly true so indoor cards are fully highlighted
                style={styles.featureCard(true)}
              >
                {/* FIX: Set isActive flag to true so indoor icons receive gradient backgrounds */}
                <div style={styles.iconBox(true)}>{item.icon}</div>
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