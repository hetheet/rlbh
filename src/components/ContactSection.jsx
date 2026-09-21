import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import logo from "../assets/logo1.webp";
import boardingBg from "../assets/boarding.png";

export default function ContactSection() {
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

  // Exact Brand Palette matching AboutUsInteractive.jsx
  const colors = {
    background: "#F9F9F9",
    navy: "#0A1425",
    gold: "#C5A059",
    goldBright: "#E8C881",
    textGray: "#5C667B",
    white: "#FFFFFF",
    goldGradient:
      "linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%)",
    borderGold: "rgba(197, 160, 89, 0.25)",
  };

  const contactDetails = [
    {
      icon: <MapPin size={22} />,
      title: "Campus Location",
      content:
        "8, Rajputpara Main Road, Rajputpara - 8, Bhakti Nagar, Rajkot, Gujarat — 360001",
      actionText: "Visit Us Now",
      badge: "Headquarters",
    },
    {
      icon: <Phone size={22} />,
      title: "Phone Assistance",
      content: "0281 222 9985\n0281 222 8449",
      subContent: "Direct administrative office line",
      link: "tel:02812229985",
      actionText: "Call Office Now",
      badge: "Fastest Response",
    },
    {
      icon: <Mail size={22} />,
      title: "Email Inquiries",
      content: "rajkotlohanaboarding@gmail.com",
      subContent: "Email us your inquiries anytime",
      link: "mailto:rajkotlohanaboarding@gmail.com",
      actionText: "Send an Email",
      badge: "Official Support",
    },
    {
      icon: <Clock size={22} />,
      title: "Office Hours",
      content: (
        <>
          <span style={{ color: colors.navy, fontWeight: "700" }}>
            Mon – Sat:
          </span>{" "}
          9:00 AM – 1:00 PM | 4:00 PM – 8:00 PM
          <br />
          <span
            style={{
              color: "#EF4444",
              fontWeight: "600",
              marginTop: "4px",
              display: "inline-block",
            }}
          >
            • Sunday: Closed
          </span>
        </>
      ),
      subContent: "Administrative office visits",
      link: null,
      actionText: null,
      badge: "Schedule",
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
    bgTextureLayer: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${boardingBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.06, // Soft architectural watermark that keeps #F9F9F9 bright
      filter: "grayscale(100%)",
      pointerEvents: "none",
      zIndex: 1,
    },
    bgShapeDots: {
      position: "absolute",
      top: isMobile ? "2%" : "5%",
      left: isMobile ? "0%" : "2%",
      width: isMobile ? "220px" : "320px",
      height: isMobile ? "220px" : "320px",
      backgroundImage: `radial-gradient(${colors.navy} 2px, transparent 2px)`,
      backgroundSize: "24px 24px",
      opacity: 0.1,
      borderRadius: "50%",
      zIndex: 1,
      pointerEvents: "none",
    },
    container: {
      position: "relative",
      zIndex: 5,
      maxWidth: "1280px",
      margin: "0 auto",
    },
    // Header Row matching AboutUsInteractive
    headerFlexRow: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "flex-start",
      width: "100%",
      gap: isMobile ? "24px" : "40px",
      marginBottom: isMobile ? "50px" : "70px",
    },
    headingContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    overlineWrapper: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px",
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
      fontSize: isMobile ? "2.4rem" : "3.6rem",
      lineHeight: "1.15",
      fontWeight: "800",
      color: colors.navy,
      margin: "0 0 24px 0",
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
      borderLeft: `2px solid rgba(197, 160, 89, 0.4)`,
      paddingLeft: "24px",
      maxWidth: "620px",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.75",
      color: colors.textGray,
      margin: 0,
    },
    // Spinning Logo Badge
    spinningBadge: {
      position: "relative",
      width: isMobile ? "110px" : "150px",
      height: isMobile ? "110px" : "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: isMobile ? "flex-end" : "flex-start",
    },
    badgeIcon: {
      width: "50%",
      height: "50%",
      objectFit: "contain",
      position: "absolute",
      zIndex: 2,
      filter: "drop-shadow(0 4px 8px rgba(10, 20, 37, 0.15))",
    },
    svgText: {
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
    // Main Content Grid
    mainGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1.1fr",
      gap: isMobile ? "40px" : "50px",
      alignItems: "stretch",
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "20px",
    },
    card: {
      backgroundColor: colors.white,
      padding: "28px 24px",
      borderRadius: "24px",
      border: `1px solid ${colors.borderGold}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      position: "relative",
      boxShadow: "0 10px 30px rgba(10, 20, 37, 0.03)",
      boxSizing: "border-box",
    },
    cardBadge: {
      position: "absolute",
      top: "20px",
      right: "20px",
      fontSize: "0.7rem",
      fontWeight: "700",
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: colors.gold,
      background: "rgba(197, 160, 89, 0.1)",
      padding: "4px 10px",
      borderRadius: "50px",
    },
    iconBox: {
      width: "50px",
      height: "50px",
      borderRadius: "16px",
      background: colors.goldGradient,
      color: colors.navy,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
      boxShadow: "0 8px 16px rgba(197, 160, 89, 0.25)",
    },
    cardTitle: {
      fontSize: "1.15rem",
      fontWeight: "700",
      color: colors.navy,
      margin: "0 0 10px 0",
    },
    cardContent: {
      fontSize: "0.95rem",
      color: colors.textGray,
      lineHeight: "1.65",
      margin: "0 0 12px 0",
      flexGrow: 1,
      whiteSpace: "pre-line", // <-- ADD THIS
    },
    cardSub: {
      fontSize: "0.82rem",
      color: "#94A3B8",
      margin: "0 0 18px 0",
    },
    actionLink: {
      fontSize: "0.9rem",
      fontWeight: "700",
      color: colors.navy,
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginTop: "auto",
      paddingTop: "16px",
      borderTop: "1px solid rgba(10, 20, 37, 0.06)",
      transition: "all 0.2s ease",
    },
    // Widescreen Architectural Map Frame
    mapSection: {
      position: "relative",
      width: "100%",
      height: isMobile ? "400px" : "100%",
      minHeight: isMobile ? "400px" : "520px",
      borderRadius: "28px",
      overflow: "hidden",
      border: `1px solid ${colors.borderGold}`,
      boxShadow: "0 25px 50px -12px rgba(10, 20, 37, 0.15)",
      backgroundColor: colors.white,
      display: "flex",
      flexDirection: "column",
    },
    mapHeader: {
      background: colors.navy,
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `2px solid ${colors.gold}`,
      zIndex: 10,
    },
    mapTitle: {
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "1.5px",
      color: colors.goldBright,
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    iframe: {
      width: "100%",
      height: "100%",
      flexGrow: 1,
      border: "0",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');
          
          @keyframes continuous-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .spinning-svg-element {
            animation: continuous-spin 15s linear infinite;
            transform-origin: center center;
            will-change: transform;
          }

          .premium-contact-card:hover {
            transform: translateY(-6px);
            border-color: #C5A059 !important;
            box-shadow: 0 20px 40px rgba(10, 20, 37, 0.08), 0 0 20px rgba(197, 160, 89, 0.15) !important;
          }

          .premium-contact-card:hover .card-link {
            gap: 10px !important;
            color: #C5A059 !important;
          }
        `}
      </style>

      <section style={styles.section}>
        {/* Soft Background Texture & Dot Matrix */}
        <div style={styles.bgTextureLayer} />
        <div style={styles.bgShapeDots} />

        <div style={styles.container}>
          {/* HEADER ROW (Matching AboutUsInteractive) */}
          <div style={styles.headerFlexRow}>
            <div style={styles.headingContainer}>
              <div style={styles.overlineWrapper}>
                <div style={styles.overlineLine} />
                <p style={styles.overline}>Get In Touch</p>
              </div>

              <h2 style={styles.heading}>
                We Are Here To <br />
                <span style={styles.serifHighlight}>Welcome You</span> <br />
                To Our Campus.
              </h2>

              <div style={styles.paragraphWrapper}>
                <p style={styles.paragraph}>
                  Whether you are a prospective student arriving in Rajkot or a
                  parent seeking a secure foundation for your child, our
                  administrative team is ready to assist you with admissions,
                  fee structures, and campus visits.
                </p>
              </div>
            </div>

            {/* Signature Spinning Logo Badge */}
            <div style={styles.spinningBadge}>
              <img
                src={logo}
                alt="Shree Rajkot Lohana Boarding House Logo"
                style={styles.badgeIcon}
              />
              <svg
                viewBox="0 0 120 120"
                style={styles.svgText}
                className="spinning-svg-element"
              >
                <path
                  id="contactCirclePath"
                  d="M 60, 60 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  fill="none"
                />
                <text>
                  <textPath
                    href="#contactCirclePath"
                    fill={colors.gold}
                    fontSize="9.5"
                    fontWeight="700"
                    letterSpacing="3.2px"
                    fontFamily="'Inter', sans-serif"
                    dominantBaseline="central"
                  >
                    • EST 1896 • BHAKTI NAGAR • RAJKOT
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* MAIN CONTENT GRID: 4 Cards Left | Architectural Map Right */}
          <div style={styles.mainGrid}>
            {/* Left Column: 2x2 Contact Cards Grid */}
            <div style={styles.cardsGrid}>
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="premium-contact-card"
                  style={styles.card}
                >
                  <span style={styles.cardBadge}>{item.badge}</span>
                  <div>
                    <div style={styles.iconBox}>{item.icon}</div>
                    <h3 style={styles.cardTitle}>{item.title}</h3>
                    <div style={styles.cardContent}>{item.content}</div>
                    {item.subContent && (
                      <p style={styles.cardSub}>{item.subContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Architectural Widescreen Map Frame */}
            <div style={styles.mapSection}>
              <div style={styles.mapHeader}>
                <p style={styles.mapTitle}>
                  <Navigation size={16} /> CAMPUS SATELLITE FEED
                </p>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#A0AEC0",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  Rajkot-Gujarat
                </span>
              </div>
              <iframe
                title="Shri Rajkot Lohana Boarding House Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6707436650513!2d70.8008498!3d22.2904589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb003ebf5bd5%3A0x7fda77dbc8965c93!2sShri%20Rajkot%20Lohana%20Bording%20House!5e0!3m2!1sen!2sin!4v1784202849200!5m2!1sen!2sin"
                style={styles.iframe}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
