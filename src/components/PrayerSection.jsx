import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Heart,
  Sparkles,
  Flower2,
  BellRing,
  Sun,
  CheckCircle2,
  Power,
} from "lucide-react";
import spi1 from "../assets/spi-1.jpeg";
import spi2 from "../assets/spi-2.jpeg";
import spi3 from "../assets/spi-3.png";

// ==========================================
// 1. UPLOAD YOUR JALARAM BAPA IMAGE HERE:
// Replace the URL below with your local image import, e.g.:
// import jalaramBapaImg from "../assets/jalaram-bapa.png";
// ==========================================
import jalaramBapaImg from "../assets/jalaram.png";
export default function PrayerSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarshanOpen, setIsDarshanOpen] = useState(true);

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

  // PROPER SPIRITUAL PALETTE
  const colors = {
    bgIlluminated: "#FFFDF5",
    bgDimmed: "#EFECE6",
    walnut: "#3A231C",
    walnutLight: "#634840",
    gold: "#D97706",
    goldBright: "#F59E0B",
    divineBeam:
      "linear-gradient(180deg, rgba(251, 191, 36, 0.45) 0%, rgba(245, 158, 11, 0.15) 50%, rgba(255, 255, 255, 0) 100%)",
    cardIlluminated: "#FFFFFF",
    cardDimmed: "#F5F2EB",
  };

  const prayerImages = [
    {
      id: 1,
      src: spi3,
      alt: "Peaceful evening diya and prayer",
      isMain: true,
    },
    {
      id: 2,
      src: spi2,
      alt: "Spiritual festive celebrations",
      isMain: false,
    },
    {
      id: 3,
      src: spi1,
      alt: "Students gathered for daily Prayer",
      isMain: false,
    },
  ];

  const spiritualFeatures = [
    {
      icon: <Heart size={26} />,
      title: "Jai Jalaram Devotion",
      desc: "Our prayer room is a dedicated sanctuary for the regular worship of Jalaram Bapa, bringing profound peace, guidance, and blessings to every student.",
    },
    {
      icon: <Flame size={26} />,
      title: "Daily Evening Prayer",
      desc: "Every single evening, the entire boarding house gathers as a family for the daily Prayer, creating a deeply serene and unified spiritual atmosphere.",
    },
    {
      icon: <Flower2 size={26} />,
      title: "Grand Ganpati Mahotsav",
      desc: "Every year, we celebrate Ganesh Chaturthi with absolute 'Dhoom Dham'. The campus comes alive with vibrant decorations, joyous music, and deep devotion.",
    },
    {
      icon: <Sun size={26} />,
      title: "Spiritual Awakening",
      desc: "A tranquil and quiet environment specifically maintained for morning meditation, quiet reflection, and finding inner balance before studies.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Spiritual Harmony & Heritage",
      desc: "We cultivate a deeply peaceful boarding environment by bringing everyone together through daily spiritual practices and the joyful celebration of festivals, ensuring our rich traditions and shared values remain at the heart of our community.",
    },
    {
      icon: <BellRing size={26} />,
      title: "Values & Brotherhood",
      desc: "Through regular spiritual congregations, we instill moral values, deep compassion, and an unbreakable bond of brotherhood among all residents.",
    },
  ];

  const activeBg = isDarshanOpen ? colors.bgIlluminated : colors.bgDimmed;
  const activeCardBg = isDarshanOpen
    ? colors.cardIlluminated
    : colors.cardDimmed;

  const styles = {
    section: {
      backgroundColor: activeBg,
      padding: isMobile ? "60px 20px" : "120px 5%",
      fontFamily: "'Inter', sans-serif",
      color: colors.walnut,
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
      marginBottom: isMobile ? "60px" : "80px",
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
      boxShadow: "0 15px 35px rgba(58, 35, 28, 0.1)",
      border: "3px solid #FFFFFF",
      backgroundColor: activeCardBg,
      position: "relative",
      transition: "all 0.5s ease",
    }),
    mobileSliderContainer: {
      display: isMobile ? "flex" : "none",
      flexWrap: "nowrap",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      gap: "16px",
      paddingBottom: "15px",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    mobileSlide: {
      flex: "0 0 85%",
      minWidth: "85%",
      scrollSnapAlign: "center",
      height: "280px",
      borderRadius: "20px",
      overflow: "hidden",
      border: `3px solid #FFFFFF`,
      position: "relative",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    photoImg: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    overlineWrapper: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 16px",
      backgroundColor: isDarshanOpen ? "#FEF3C7" : "#E5E0D8",
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
      color: isDarshanOpen ? colors.gold : colors.walnutLight,
      margin: 0,
    },
    heading: {
      fontSize: isMobile ? "2.3rem" : "3.4rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: colors.walnut,
      margin: "0 0 18px 0",
      letterSpacing: "-1px",
      transition: "color 0.5s ease",
    },
    serifHighlight: {
      fontFamily: "'Playfair Display', serif",
      fontStyle: "italic",
      fontWeight: "600",
      color: isDarshanOpen ? colors.gold : colors.walnutLight,
      transition: "color 0.5s ease",
    },
    paragraph: {
      fontSize: "1.08rem",
      lineHeight: "1.8",
      color: colors.walnutLight,
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
      color: colors.walnut,
    },
    // ==========================================
    // 2. THE COMPACT 3D TEMPLE DOORS & LIGHT STAGE
    // ==========================================
    stageWrapper: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "60px",
    },
    divineLightCone: {
      position: "absolute",
      top: isMobile ? "90px" : "110px",
      left: "50%",
      transform: "translateX(-50%)",
      width: isMobile ? "100vw" : "1000px",
      height: isMobile ? "900px" : "700px",
      background: colors.divineBeam,
      clipPath: isMobile
        ? "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)"
        : "polygon(38% 0%, 62% 0%, 95% 100%, 5% 100%)",
      opacity: isDarshanOpen ? 1 : 0,
      pointerEvents: "none",
      transition: "opacity 0.7s ease-in-out",
      zIndex: 1,
    },
    templeContainer: {
      position: "relative",
      zIndex: 30,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // DECREASED TEMPLE SIZE
    templeFrame: {
      width: isMobile ? "240px" : "300px",
      height: isMobile ? "300px" : "360px",
      borderRadius: "150px 150px 16px 16px",
      background: "linear-gradient(180deg, #D97706 0%, #92400E 100%)",
      padding: "12px",
      boxShadow: isDarshanOpen
        ? "0 20px 40px rgba(217, 119, 6, 0.4), 0 0 30px rgba(251, 191, 36, 0.4)"
        : "0 10px 25px rgba(58, 35, 28, 0.2)",
      transition: "box-shadow 0.6s ease",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    templeSanctum: {
      width: "100%",
      height: "100%",
      borderRadius: "138px 138px 8px 8px",
      backgroundColor: "#4A2B23",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 10px 20px rgba(0,0,0,0.85)",
    },
    jalaramImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      filter: isDarshanOpen
        ? "drop-shadow(0 0 15px rgba(251, 191, 36, 0.7)) brightness(1.05)"
        : "brightness(0.25)",
      transition: "filter 0.6s ease",
    },
    divineAura: {
      position: "absolute",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "160px",
      height: "160px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(254, 240, 138, 0.8) 0%, rgba(245, 158, 11, 0.3) 50%, rgba(0,0,0,0) 80%)",
      opacity: isDarshanOpen ? 1 : 0,
      transition: "opacity 0.6s ease",
      pointerEvents: "none",
    },
    doorsWrapper: {
      position: "absolute",
      top: "12px",
      left: "12px",
      right: "12px",
      bottom: "12px",
      display: "flex",
      perspective: "1000px",
      pointerEvents: "none",
      zIndex: 10,
    },
    doorLeft: {
      width: "50%",
      height: "100%",
      borderRadius: "138px 0 0 8px",
      background:
        "linear-gradient(90deg, #5C3D2E 0%, #78513E 80%, #4A2B23 100%)",
      borderRight: "1px solid #27140C",
      border: "2px solid #D97706",
      transformOrigin: "left center",
      transform: isDarshanOpen ? "rotateY(-105deg)" : "rotateY(0deg)",
      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: "12px",
      boxShadow: isDarshanOpen ? "none" : "5px 0 15px rgba(0,0,0,0.6)",
    },
    doorRight: {
      width: "50%",
      height: "100%",
      borderRadius: "0 138px 8px 0",
      background:
        "linear-gradient(-90deg, #5C3D2E 0%, #78513E 80%, #4A2B23 100%)",
      borderLeft: "1px solid #27140C",
      border: "2px solid #D97706",
      transformOrigin: "right center",
      transform: isDarshanOpen ? "rotateY(105deg)" : "rotateY(0deg)",
      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "12px",
      boxShadow: isDarshanOpen ? "none" : "-5px 0 15px rgba(0,0,0,0.6)",
    },
    brassHandle: {
      width: "10px",
      height: "32px",
      borderRadius: "5px",
      backgroundColor: "#FBBF24",
      boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
      border: "1px solid #B45309",
    },
    switchPill: {
      marginTop: "24px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 26px",
      borderRadius: "50px",
      backgroundColor: isDarshanOpen ? colors.gold : "#64748B",
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: "0.85rem",
      boxShadow: isDarshanOpen
        ? "0 8px 20px rgba(217, 119, 6, 0.3)"
        : "0 4px 15px rgba(0,0,0,0.15)",
      transition: "all 0.4s ease",
    },
    // 3. FEATURE CARDS
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "24px",
      position: "relative",
      zIndex: 10,
    },
    featureCard: (isActive) => ({
      backgroundColor: isActive ? colors.cardIlluminated : colors.cardDimmed,
      padding: "36px 30px",
      borderRadius: "24px",
      border: isActive ? "2px solid #FDE68A" : "2px solid #E5E0D8",
      boxShadow: isActive
        ? "0 20px 40px rgba(217, 119, 6, 0.08), 0 0 15px rgba(253, 230, 138, 0.3)"
        : "0 8px 20px rgba(58, 35, 28, 0.03)",
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
        ? "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)"
        : "#E9E4DC",
      color: isActive ? colors.gold : colors.walnutLight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      border: isActive ? "1px solid #F59E0B" : "1px solid transparent",
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
          
          .prayer-photo-card:hover .prayer-photo-img,
          .mobile-slide-card:hover .prayer-photo-img {
            transform: scale(1.06);
          }

          .prayer-feature-card:hover {
            transform: translateY(-6px);
          }
          
          .hide-scroll::-webkit-scrollbar {
            display: none !important;
          }

          /* Diya Flame Flicker */
          @keyframes flame-flicker {
            0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
            25% { transform: scaleY(1.1) scaleX(0.95); opacity: 1; }
            50% { transform: scaleY(0.95) scaleX(1.05); opacity: 0.8; }
            75% { transform: scaleY(1.15) scaleX(0.9); opacity: 1; }
          }
          .animate-flame {
            animation: flame-flicker 2s infinite ease-in-out;
            transform-origin: bottom center;
          }

          /* Gentle Pulsing for Divine Light Cone */
          @keyframes gentle-pulse-light {
            0% { opacity: 0.75; }
            50% { opacity: 1; }
            100% { opacity: 0.75; }
          }
          .pulsing-light {
            animation: gentle-pulse-light 4s infinite ease-in-out;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.container}>
          {/* 1. HERO SECTION */}
          <div style={styles.heroWrapper}>
            <div style={styles.imageSectionWrapper}>
              <div style={styles.imageCollage}>
                {prayerImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className="prayer-photo-card"
                    style={styles.photoCard(img.isMain, idx + 1)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="prayer-photo-img"
                      style={styles.photoImg}
                    />
                  </div>
                ))}
              </div>

              <div style={styles.mobileSliderContainer} className="hide-scroll">
                {prayerImages.map((img) => (
                  <div
                    key={img.id}
                    className="mobile-slide-card"
                    style={styles.mobileSlide}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="prayer-photo-img"
                      style={styles.photoImg}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.narrativeBox}>
              <div style={styles.overlineWrapper}>
                <Sparkles
                  size={16}
                  color={isDarshanOpen ? colors.gold : colors.walnutLight}
                />
                <p style={styles.overline}>Jai Jalaram • Prayer Room</p>
              </div>

              <h2 style={styles.heading}>
                A Sanctuary of Faith & <br />
                <span style={styles.serifHighlight}>Divine Blessings.</span>
              </h2>

              <p style={styles.paragraph}>
                At Shree Rajkot Lohana Boarding House, spiritual grounding is at
                the very heart of our community. Our dedicated prayer room
                provides a serene atmosphere for the daily worship of Shri
                Jalaram Bapa, offering students a peaceful retreat from their
                rigorous academic routines.
              </p>
              <p style={{ ...styles.paragraph, marginBottom: "24px" }}>
                From our collective evening Prayer that unites everyone, to
                celebrating our heritage together, we keep our faith, culture,
                and deep-rooted brotherhood alive.
              </p>

              <div style={styles.listGrid}>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.goldBright} />
                  <span>Daily Evening Prayer</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.goldBright} />
                  <span>Shri Jalaram Bapa Devotion</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.goldBright} />
                  <span>Grand Ganpati Mahotsav</span>
                </div>
                <div style={styles.listItem}>
                  <CheckCircle2 size={20} color={colors.goldBright} />
                  <span>Quiet Meditation Zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE COMPACT 3D TEMPLE DOORS & JALARAM BAPA STAGE */}
          <div style={styles.stageWrapper}>
            {/* Spiritual Light Beam */}
            <div
              style={styles.divineLightCone}
              className={isDarshanOpen ? "pulsing-light" : ""}
            />

            <motion.div
              style={styles.templeContainer}
              onClick={() => setIsDarshanOpen(!isDarshanOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="Click to Open/Close Temple Doors"
            >
              {/* Compact Architectural Temple Frame */}
              <div style={styles.templeFrame}>
                {/* Top Hanging Brass Bells */}
                <svg
                  width="100%"
                  height="60"
                  viewBox="0 0 300 60"
                  style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 20,
                    pointerEvents: "none",
                  }}
                >
                  {/* Left Bell */}
                  <line
                    x1="85"
                    y1="0"
                    x2="85"
                    y2="25"
                    stroke="#78350F"
                    strokeWidth="3"
                  />
                  <path
                    d="M 75 25 Q 85 10 95 25 L 100 40 L 70 40 Z"
                    fill="#FBBF24"
                  />
                  <circle cx="85" cy="45" r="4" fill="#D97706" />

                  {/* Right Bell */}
                  <line
                    x1="215"
                    y1="0"
                    x2="215"
                    y2="25"
                    stroke="#78350F"
                    strokeWidth="3"
                  />
                  <path
                    d="M 205 25 Q 215 10 225 25 L 230 40 L 200 40 Z"
                    fill="#FBBF24"
                  />
                  <circle cx="215" cy="45" r="4" fill="#D97706" />
                </svg>

                {/* Inner Sanctum */}
                <div style={styles.templeSanctum}>
                  <div style={styles.divineAura} />

                  <img
                    src={jalaramBapaImg}
                    alt="Shri Jalaram Bapa"
                    style={styles.jalaramImage}
                  />

                  {/* 3D Wooden Doors */}
                  <div style={styles.doorsWrapper}>
                    <div style={styles.doorLeft}>
                      <div style={styles.brassHandle} />
                    </div>
                    <div style={styles.doorRight}>
                      <div style={styles.brassHandle} />
                    </div>
                  </div>
                </div>

                {/* Bottom Step Diyas */}
                <svg
                  width="100%"
                  height="40"
                  viewBox="0 0 300 40"
                  style={{
                    position: "absolute",
                    bottom: "-18px",
                    zIndex: 25,
                    pointerEvents: "none",
                  }}
                >
                  {/* Step Base */}
                  <rect
                    x="30"
                    y="20"
                    width="240"
                    height="12"
                    fill="#B45309"
                    rx="3"
                  />
                  <rect
                    x="50"
                    y="10"
                    width="200"
                    height="10"
                    fill="#D97706"
                    rx="2"
                  />

                  {/* Left Diya */}
                  <path d="M 80 10 Q 90 22 100 10 Z" fill="#78350F" />
                  <path
                    className="animate-flame"
                    d="M 90 0 Q 95 10 90 10 Q 85 10 90 0 Z"
                    fill="#FBBF24"
                    opacity={isDarshanOpen ? 1 : 0.4}
                  />

                  {/* Center Diya */}
                  <path d="M 140 8 Q 150 22 160 8 Z" fill="#78350F" />
                  <path
                    className="animate-flame"
                    d="M 150 -6 Q 156 8 150 8 Q 144 8 150 -6 Z"
                    fill="#FEF08A"
                    filter={
                      isDarshanOpen ? "drop-shadow(0 0 10px #FBBF24)" : "none"
                    }
                    opacity={isDarshanOpen ? 1 : 0.4}
                  />

                  {/* Right Diya */}
                  <path d="M 200 10 Q 210 22 220 10 Z" fill="#78350F" />
                  <path
                    className="animate-flame"
                    d="M 210 0 Q 215 10 210 10 Q 205 10 210 0 Z"
                    fill="#FBBF24"
                    opacity={isDarshanOpen ? 1 : 0.4}
                  />
                </svg>
              </div>

              {/* Interactive Switch Button */}
              <div style={styles.switchPill}>
                <Power size={14} />
                <span>
                  {isDarshanOpen
                    ? "Spiritual Light ON • Click to Close Temple Doors"
                    : "Spiritual Light OFF • Click to Open Temple & Turn ON Light"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* 3. FEATURES GRID */}
          <div style={styles.featuresGrid}>
            {spiritualFeatures.map((item, idx) => (
              <div
                key={idx}
                className="prayer-feature-card"
                style={styles.featureCard(isDarshanOpen)}
              >
                <div style={styles.iconBox(isDarshanOpen)}>{item.icon}</div>
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
