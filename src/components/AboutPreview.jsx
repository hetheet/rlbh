import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import logo from "../assets/circle-logo.png";
import circle1 from "../assets/circle1.jpeg";
import circle2 from "../assets/circle2.PNG";
import { useNavigate } from "react-router-dom";
export default function AboutUsInteractive() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeImgId, setActiveImgId] = useState(0);

  // Measured size of the right column (used to place the circles with transforms)
  const stageRef = useRef(null);
  const [stage, setStage] = useState({ w: 0, h: 0 });
  // Transitions are switched on only after the first measured paint,
  // so the circles never "fly in" from a wrong position on load.
  const [canAnimate, setCanAnimate] = useState(false);

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

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      setStage((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };
    update();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(update);
      ro.observe(el);
    }
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setCanAnimate(true)),
    );

    return () => {
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
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

  // --- CIRCLE PLACEMENT (transform based = smooth on iOS / Android) ---
  // Both circles are always laid out at the LARGE size and positioned with
  // translate + scale. Swapping only changes transform (GPU), never
  // width/height/top/left, so there is no layout work while animating.
  const LARGE = isMobile ? 270 : 440;
  const SMALL = isMobile ? 180 : 300;
  const SMALL_SCALE = SMALL / LARGE;
  const { w: W, h: H } = stage;

  // Same positions as before: main = top/right, secondary = the other spot
  const mainPos = isMobile
    ? { x: W - LARGE, y: 0.05 * H }
    : { x: W - 0.05 * W - LARGE, y: 0.1 * H };
  const secondaryPos = isMobile
    ? { x: 0.15 * W, y: H - 0.15 * H - SMALL }
    : { x: W - 0.4 * W - SMALL, y: 0.45 * H };

  const getWrapStyle = (isMain) => {
    const pos = isMain ? mainPos : secondaryPos;
    const scale = isMain ? 1 : SMALL_SCALE;
    return {
      width: `${LARGE}px`,
      height: `${LARGE}px`,
      zIndex: isMain ? 10 : 5,
      cursor: isMain ? "default" : "pointer",
      transform: `translate3d(${Math.round(pos.x)}px, ${Math.round(pos.y)}px, 0) scale(${scale})`,
      visibility: W > 0 ? "visible" : "hidden",
    };
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
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
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

          /* ---- Sparkles: pure CSS (compositor thread, no JS per frame) ---- */
          @keyframes sparkleFloat {
            0%, 100% { transform: translate3d(0, 0, 0) scale(0.8); opacity: 0.2; }
            50% { transform: translate3d(0, -15px, 0) scale(1.2); opacity: 0.8; }
          }
          .sparkle-dot {
            position: absolute;
            border-radius: 50%;
            z-index: 2;
            pointer-events: none;
            will-change: transform, opacity;
            animation: sparkleFloat 3.5s ease-in-out infinite backwards;
          }

          /* ---- Interactive circles ---- */
          .circle-wrap {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 50%;
            transform-origin: 0 0;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          .circle-wrap.can-animate {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          /* Shadows are cross-faded with opacity (cheap) instead of
             animating box-shadow (repaints every frame). */
          .circle-wrap::before,
          .circle-wrap::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            pointer-events: none;
            transition: opacity 0.6s ease;
          }
          .circle-wrap::before {
            /* secondary-state shadow (sized for the scaled-down circle) */
            box-shadow: 0 15px 44px rgba(10, 20, 37, 0.15);
            opacity: 1;
          }
          .circle-wrap::after {
            /* main-state shadow */
            box-shadow: 0 25px 50px -12px rgba(10, 20, 37, 0.25);
            opacity: 0;
          }
          .circle-wrap.is-main::before { opacity: 0; }
          .circle-wrap.is-main::after { opacity: 1; }

          .circle-img {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            background-color: #E8E8E8;
            transition: transform 0.3s ease;
            -webkit-user-drag: none;
            user-select: none;
          }
          @media (hover: hover) {
            .circle-wrap:not(.is-main) .circle-img:hover {
              transform: scale(1.05);
            }
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
          <div style={styles.rightCol} ref={stageRef}>
            <div style={styles.bgShapeDots} />

            {sparkles.map((sparkle) => (
              <div
                key={`sparkle-${sparkle.id}`}
                className="sparkle-dot"
                style={{
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  backgroundColor: sparkle.color,
                  top: sparkle.top,
                  left: sparkle.left,
                  right: sparkle.right,
                  animationDelay: `${sparkle.delay}s`,
                }}
              />
            ))}

            {images.map((img) => {
              const isMain = activeImgId === img.id;

              return (
                <div
                  key={img.id}
                  className={`circle-wrap${isMain ? " is-main" : ""}${canAnimate ? " can-animate" : ""}`}
                  style={getWrapStyle(isMain)}
                  onClick={() => !isMain && setActiveImgId(img.id)}
                >
                  <img
                    className="circle-img"
                    src={img.src}
                    alt={img.alt}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}