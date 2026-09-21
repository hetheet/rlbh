import React, { useState, useEffect } from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- PREMIUM BoardingAL PALETTE ---
  const colors = {
    navy: "#1B2A4A",
    gold: "#CE9438",
    goldLight: "#FAF6EE",
    pearl: "#FCFAF5",
    white: "#FFFFFF",
    textGray: "#4A5568",
    borderLight: "rgba(27, 42, 74, 0.08)",
    starYellow: "#F59E0B",
  };

  // --- 8 TAILORED LOHANA BOARDING REVIEWS (NO ROLES) ---
  const reviews = [
    {
      id: 1,
      name: "Rajeshbhai Gokani",
      rating: 5,
      text: "As a parent, food hygiene was my biggest worry. The pure vegetarian meals here taste just like home cooking. Knowing my son gets fresh, nutritious food every day gives our family complete peace of mind.",
    },
    {
      id: 2,
      name: "Ayush Popat",
      rating: 5,
      text: "The 24/7 silent reading room is an absolute blessing during exam season. You get a pin-drop silent, disciplined atmosphere to study late into the night. It has played a huge role in my professional exams.",
    },
    {
      id: 3,
      name: "Yash Jasani",
      rating: 5,
      text: "Moving away from home for the first time was daunting, but the management and staff treat us like their own family. The supportive environment here ensured I haven't felt homesick even for a single day.",
    },
    {
      id: 4,
      name: "Harsh Thakker",
      rating: 5,
      text: "The cleanliness is unmatched. Rooms, corridors, and washrooms are cleaned spotlessly every single day. Having 24/7 RO purified water and reliable hot water makes daily student life completely smooth.",
    },
    {
      id: 5,
      name: "Meet Kotecha",
      rating: 5,
      text: "Living under one roof with fellow Lohana brothers is the best experience. We play evening sports together, celebrate festivals like Janmashtami with joy, and support each other like real brothers.",
    },
    {
      id: 7,
      name: "Dhruv Kotecha",
      rating: 5,
      text: "The security, discipline, and management are top-notch. Whether it's the peaceful study environment or the helpful staff, everything is organized to help students focus entirely on their career goals.",
    },
    {
      id: 8,
      name: "Sagar Thakker",
      rating: 5,
      text: "The rooms are spacious, well-ventilated, and extremely comfortable to live in. It genuinely feels like a second home that provides the perfect balance of academic focus and community living.",
    },
  ];

  // --- INLINE STYLES ---
  const styles = {
    section: {
      position: "relative",
      width: "100%",
      backgroundColor: colors.pearl,
      padding: isMobile ? "60px 0 20px" : "90px 0 50px",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      overflow: "hidden",
    },
    headerWrapper: {
      textAlign: "center",
      maxWidth: "750px",
      margin: "0 auto 40px",
      padding: "0 20px",
    },
    subtitleWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "14px",
    },
    sideLine: {
      width: "40px",
      height: "2px",
      background: `linear-gradient(90deg, transparent, ${colors.gold})`,
      borderRadius: "4px",
    },
    sideLineRight: {
      width: "40px",
      height: "2px",
      background: `linear-gradient(90deg, ${colors.gold}, transparent)`,
      borderRadius: "4px",
    },
    subtitleText: {
      color: colors.gold,
      textTransform: "uppercase",
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "3px",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    mainTitle: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: isMobile ? "2.2rem" : "3.2rem",
      color: colors.navy,
      fontWeight: "700",
      lineHeight: "1.15",
      margin: "0 0 20px 0",
    },
    ornamentalDivider: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "20px",
    },
    dividerLine: {
      width: "60px",
      height: "1px",
      backgroundColor: "rgba(206, 148, 56, 0.4)",
    },
    instructionText: {
      fontSize: "0.85rem",
      color: colors.textGray,
      margin: 0,
      opacity: 0.8,
      fontStyle: "italic",
    },
    marqueeWrapper: {
      display: "flex",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding: "10px 0 30px 0",
    },
    fadeEdgeLeft: {
      position: "absolute",
      top: 0,
      left: 0,
      width: isMobile ? "40px" : "150px",
      height: "100%",
      background: `linear-gradient(90deg, ${colors.pearl} 0%, rgba(252,250,245,0) 100%)`,
      zIndex: 2,
      pointerEvents: "none",
    },
    fadeEdgeRight: {
      position: "absolute",
      top: 0,
      right: 0,
      width: isMobile ? "40px" : "150px",
      height: "100%",
      background: `linear-gradient(270deg, ${colors.pearl} 0%, rgba(252,250,245,0) 100%)`,
      zIndex: 2,
      pointerEvents: "none",
    },
    marqueeTrack: {
      display: "flex",
      gap: "28px",
      // CRITICAL FIX: paddingRight exactly equals the gap. This makes the math for
      // the -50% translation perfectly balanced so there is zero "jump" at the end.
      paddingRight: "28px", 
      width: "max-content",
      animation: "scrollMarquee 45s linear infinite",
      willChange: "transform",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      // Hardware acceleration fix for iOS Safari cutting issues
      transform: "translate3d(0, 0, 0)",
      WebkitTransform: "translate3d(0, 0, 0)",
    },
    card: {
      width: isMobile ? "310px" : "380px",
      backgroundColor: colors.white,
      border: `1px solid ${colors.borderLight}`,
      borderRadius: "20px",
      padding: isMobile ? "24px" : "30px",
      boxSizing: "border-box", // Prevents padding from breaking flex widths on iOS
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 10px 30px rgba(27, 42, 74, 0.03)",
      flexShrink: 0, // CRITICAL: prevents iOS Safari from shrinking cards
      position: "relative",
      userSelect: "none",
    },
    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    starGroup: {
      display: "flex",
      gap: "4px",
      color: colors.starYellow,
    },
    quoteIcon: {
      color: "rgba(206, 148, 56, 0.2)",
    },
    reviewText: {
      color: colors.textGray,
      fontSize: isMobile ? "0.95rem" : "1rem",
      lineHeight: "1.65",
      margin: "0 0 24px 0",
      fontStyle: "italic",
    },
    footerRow: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      paddingTop: "16px",
      borderTop: `1px solid rgba(27, 42, 74, 0.06)`,
    },
    avatar: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      backgroundColor: colors.navy,
      color: colors.gold,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: "700",
      fontSize: "1.1rem",
      flexShrink: 0,
      border: `2px solid ${colors.goldLight}`,
    },
    nameText: {
      color: colors.navy,
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: "700",
      fontSize: "1.1rem",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          
          /* Webkit prefixes added to ensure iOS Safari processes the seamless loop flawlessly */
          @keyframes scrollMarquee {
            0% { 
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0); 
            }
            100% { 
              -webkit-transform: translate3d(-50%, 0, 0);
              transform: translate3d(-50%, 0, 0); 
            }
          }

          /* Explicitly allow vertical page scrolling on touch devices */
          .marquee-wrapper-interactive {
            touch-action: pan-y !important;
          }

          @media (hover: hover) {
            .marquee-wrapper-interactive {
              cursor: grab;
            }

            /* Pause animation cleanly via CSS without React state re-renders */
            .marquee-wrapper-interactive:hover .marquee-hover-track {
              animation-play-state: paused !important;
            }

            .marquee-wrapper-interactive:hover {
              cursor: grabbing;
            }
          }

          .review-card-hover {
            touch-action: pan-y !important;
          }

          @media (hover: hover) {
            .review-card-hover {
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .review-card-hover:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 40px rgba(27, 42, 74, 0.08) !important;
              border-color: rgba(206, 148, 56, 0.4) !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-hover-track {
              animation: none !important;
            }
          }
        `}
      </style>

      <section style={styles.section} aria-label="Student and Parent Reviews">
        {/* Section Header */}
        <div style={styles.headerWrapper}>
          {/* Subtitle with Star Accents Above */}
          <div style={styles.subtitleWrapper}>
            <div style={styles.sideLine} />
            <h2 style={styles.subtitleText}>
              <Star size={13} fill="currentColor" color={colors.gold} />
              Community Feedback
              <Star size={13} fill="currentColor" color={colors.gold} />
            </h2>
            <div style={styles.sideLineRight} />
          </div>

          {/* Main Boardingal Title */}
          <h3 style={styles.mainTitle}>
            Trusted by Lohana Families <br />
            <span style={{ color: colors.gold, fontStyle: "italic" }}>
              A True Second Home
            </span>
          </h3>

          {/* Ornamental Star Divider Below */}
          <div style={styles.ornamentalDivider}>
            <div style={styles.dividerLine} />
            <Star size={16} fill="currentColor" color={colors.gold} />
            <div style={styles.dividerLine} />
          </div>
        </div>

        {/* Infinite Marquee Container (No React Touch Handlers = Smooth Native Scroll) */}
        <div
          className="marquee-wrapper-interactive"
          style={styles.marqueeWrapper}
        >
          <div style={styles.fadeEdgeLeft} />
          <div style={styles.fadeEdgeRight} />

          {/* Track is duplicated to create a seamless infinite loop */}
          <div className="marquee-hover-track" style={styles.marqueeTrack}>
            {[...reviews, ...reviews].map((review, index) => {
              const initials = review.name
                .split(" ")
                .map((n) => n[0])
                .join("");

              return (
                <div
                  key={`${review.id}-${index}`}
                  className="review-card-hover"
                  style={styles.card}
                >
                  <div>
                    {/* Stars and Quote Icon */}
                    <div style={styles.topRow}>
                      <div style={styles.starGroup}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={24} style={styles.quoteIcon} />
                    </div>

                    {/* Feedback Text */}
                    <p style={styles.reviewText}>"{review.text}"</p>
                  </div>

                  {/* Reviewer Info (No Roles) */}
                  <div style={styles.footerRow}>
                    <div style={styles.avatar}>{initials}</div>
                    <div>
                      <h4 style={styles.nameText}>
                        {review.name}
                        <CheckCircle2
                          size={16}
                          color={colors.gold}
                          fill="#FAF6EE"
                        />
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}