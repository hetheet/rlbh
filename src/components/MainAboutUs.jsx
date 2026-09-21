import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Coffee,
  Home,
  Activity,
  HeartHandshake,
  Flame,
} from "lucide-react";

// Import your assets here
import logo from "../assets/circle-logo.png";
import boardingImg from "../assets/boarding.png";
import lib3 from "../assets/lib3.jpeg";
import k1 from "../assets/k1.jpeg";
import sports3 from "../assets/sports3.png";
import g1 from "../assets/g1.png";
import sp2 from "../assets/spi-2.jpeg";
export default function MainAboutUs() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Simple, crash-proof resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- HERITAGE COLOR PALETTE ---
  const colors = {
    bgLight: "#FDFBF7",
    bgDark: "#111827",
    primary: "#1B2A4A",
    gold: "#C5A059",
    goldLight: "#E8C881",
    textMuted: "#64748B",
    border: "#E2DCCF",
  };

  // --- EXACT LOHANA BOARDING FACILITIES ---
  const facilities = [
    {
      id: 0,
      title: "Peaceful Study Zone",
      icon: <BookOpen size={20} />,
      tag: "Academic Focus",
      desc: "A quiet, well-lit study space designed to help students stay focused, improve productivity, and prepare effectively for exams and academic success.",
      img: lib3,
    },
    {
      id: 1,
      title: "Premium Kitchen",
      icon: <Coffee size={20} />,
      tag: "Home-Style Dining",
      desc: "We serve wholesome, freshly prepared Gujarati and continental vegetarian meals three times a day, maintaining the highest hygiene standards.",
      img: k1,
    },

    {
      id: 3,
      title: "Sports & Recreation",
      icon: <Activity size={20} />,
      tag: "Physical Fitness",
      desc: "Our facilities include table tennis, chess, badminton courts, and open recreation grounds where brotherhood is forged through friendly matches.",
      img: sports3,
    },
    {
      id: 4,
      title: "Cultural Heritage",
      icon: <HeartHandshake size={20} />,
      tag: "Lohana Values",
      desc: "Rooted in deep traditional values, our boarding house celebrates all major cultural festivals and community gatherings, instilling lifelong ethical principles.",
      img: g1,
    },
    {
      id: 5,
      title: "Peaceful Prayer Room",
      icon: <Flame size={20} />,
      tag: "Spiritual Growth",
      desc: "A serene, dedicated spiritual space for daily prayers, meditation, and reflection, allowing students to stay connected with their divine roots.",
      img: sp2,
    },
  ];

  const styles = {
    wrapper: {
      backgroundColor: colors.bgLight,
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
      position: "relative",
    },
    container: {
      maxWidth: "1320px",
      margin: "0 auto",
      padding: isMobile ? "60px 20px" : "100px 5%",
    },

    // --- HERO SECTION ---
    heroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "40px" : "60px",
      alignItems: "center",
      marginBottom: isMobile ? "80px" : "120px",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      border: `1px solid ${colors.gold}`,
      borderRadius: "50px",
      color: colors.gold,
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "24px",
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2.6rem" : "4.2rem",
      color: colors.primary,
      fontWeight: "800",
      lineHeight: "1.1",
      margin: "0 0 24px 0",
      letterSpacing: "-1px",
    },
    titleItalic: {
      fontStyle: "italic",
      color: colors.gold,
      fontWeight: "600",
    },
    description: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      color: colors.textMuted,
      marginBottom: "36px",
      maxWidth: "540px",
    },
    primaryBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: colors.primary,
      color: "#FFF",
      padding: "16px 36px",
      borderRadius: "50px",
      fontSize: "1rem",
      fontWeight: "600",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    heroImageWrap: {
      position: "relative",
      borderRadius: "24px",
      overflow: "hidden",
      height: isMobile ? "400px" : "600px",
      boxShadow: "0 25px 50px -12px rgba(27, 42, 74, 0.25)",
    },
    heroImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    yearStamp: {
      position: "absolute",
      bottom: "30px",
      left: "-30px",
      backgroundColor: colors.bgLight,
      padding: "24px 40px",
      borderRadius: "0 24px 24px 0",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },

    // --- INTERACTIVE SPLIT PANEL SECTION ---
    splitSection: {
      borderTop: `1px solid ${colors.border}`,
      paddingTop: isMobile ? "60px" : "100px",
    },
    splitHeader: {
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "60px",
    },
    splitTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2.2rem" : "3rem",
      color: colors.primary,
      margin: "0 0 16px 0",
      fontWeight: "800",
    },

    // The main interactive grid
    interactiveGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "400px 1fr",
      gap: isMobile ? "30px" : "60px",
      alignItems: "start",
    },

    // Left Column: Tab List
    tabList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    tabItem: (isActive) => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      backgroundColor: isActive ? colors.primary : "transparent",
      border: isActive
        ? `1px solid ${colors.primary}`
        : `1px solid ${colors.border}`,
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      color: isActive ? "#FFF" : colors.primary,
    }),
    tabContentLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    tabTitle: {
      fontSize: "1.1rem",
      fontWeight: "700",
      margin: 0,
    },

    // Right Column: Crossfading Display
    displayArea: {
      position: "relative",
      height: isMobile ? "500px" : "600px",
      borderRadius: "24px",
      overflow: "hidden",
      backgroundColor: colors.bgDark,
      boxShadow: "0 20px 40px rgba(27, 42, 74, 0.15)",
    },
    // We render ALL images but use CSS opacity to fade them (100% crash proof)
    displayImageWrap: (isActive) => ({
      position: "absolute",
      inset: 0,
      opacity: isActive ? 1 : 0,
      visibility: isActive ? "visible" : "hidden",
      transition: "opacity 0.6s ease-in-out, visibility 0.6s",
    }),
    displayImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: "scale(1.02)",
      transition: "transform 6s ease-out", // subtle slow zoom
    },
    displayOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, rgba(17, 24, 39, 0.2) 60%, transparent 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: isMobile ? "30px 24px" : "50px",
    },
    displayTag: {
      color: colors.goldLight,
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    displayTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2rem" : "2.8rem",
      color: "#FFF",
      margin: "0 0 16px 0",
      fontWeight: "700",
    },
    displayDesc: {
      color: "rgba(255,255,255,0.85)",
      fontSize: "1.05rem",
      lineHeight: "1.7",
      maxWidth: "600px",
      margin: 0,
    },
  };

  return (
    <div style={styles.wrapper}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap');
          
          .btn-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(27, 42, 74, 0.3);
            background-color: #C5A059 !important;
          }
          .tab-hover:hover {
            border-color: #C5A059 !important;
          }
          
          /* Ensures the active image slowly scales for a premium feel */
          .active-img {
            transform: scale(1) !important;
          }
        `}
      </style>

      <div style={styles.container}>
        {/* --- SECTION 1: HERITAGE HERO --- */}
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.badge}>
              <Sparkles size={16} /> Est. 1896
            </div>

            <h1 style={styles.title}>
              A Century of <br />
              <span style={styles.titleItalic}>Lohana Legacy</span> <br />&
              Brotherhood.
            </h1>

            <p style={styles.description}>
              Shree Rajkot Lohana Boarding House is an award-winning Boarding
              built by visionary elders. We provide a disciplined, culturally
              rich, and highly supportive second home where young aspirants
              transform into tomorrow's leaders.
            </p>

            <a href="#explore" style={styles.primaryBtn} className="btn-hover">
              Explore Campus Life <ArrowRight size={18} />
            </a>
          </div>

          <div style={styles.heroImageWrap}>
            <img
              src={
                boardingImg ||
                "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
              }
              alt="Shree Rajkot Lohana Boarding House"
              style={styles.heroImg}
            />
            {/* Architectural Date Stamp */}
            {!isMobile && (
              <div style={styles.yearStamp}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: colors.textMuted,
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                >
                  FOUNDED IN
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2.5rem",
                    color: colors.primary,
                    fontWeight: "800",
                  }}
                >
                  1896
                </span>
              </div>
            )}
          </div>
        </div>

        {/* --- SECTION 2: INTERACTIVE SPLIT PANEL --- */}
        <div id="explore" style={styles.splitSection}>
          <div style={styles.splitHeader}>
            <span
              style={{
                color: colors.gold,
                fontWeight: "700",
                letterSpacing: "2px",
                fontSize: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              Campus Facilities
            </span>
            <h2 style={styles.splitTitle}>Inside Our Sanctuary</h2>
          </div>

          <div style={styles.interactiveGrid}>
            {/* LEFT: Clean Tab List */}
            <div style={styles.tabList}>
              {facilities.map((facility, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={facility.id}
                    onClick={() => setActiveTab(index)}
                    className={!isActive ? "tab-hover" : ""}
                    style={styles.tabItem(isActive)}
                  >
                    <div style={styles.tabContentLeft}>
                      <span
                        style={{
                          color: isActive ? colors.goldLight : colors.gold,
                        }}
                      >
                        {facility.icon}
                      </span>
                      <h4 style={styles.tabTitle}>{facility.title}</h4>
                    </div>
                    <ArrowRight
                      size={18}
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive
                          ? "translateX(0)"
                          : "translateX(-10px)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Crash-Proof CSS Crossfading Display Area */}
            <div style={styles.displayArea}>
              {facilities.map((facility, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={facility.id}
                    style={styles.displayImageWrap(isActive)}
                  >
                    <img
                      src={facility.img}
                      alt={facility.title}
                      style={styles.displayImg}
                      className={isActive ? "active-img" : ""}
                    />
                    <div style={styles.displayOverlay}>
                      <div style={styles.displayTag}>
                        <Sparkles size={14} /> {facility.tag}
                      </div>
                      <h3 style={styles.displayTitle}>{facility.title}</h3>
                      <p style={styles.displayDesc}>{facility.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
