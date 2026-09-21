import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo1.webp";
import boardingBg from "../assets/boarding.png";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- BRAND COLOR PALETTE ---
  const colors = {
    navyDark: "#060D18",
    gold: "#C5A059",
    goldBright: "#E8C881",
    white: "#FFFFFF",
    textGray: "#8A95AD",
    borderGray: "rgba(255, 255, 255, 0.08)",
  };

  // Flattened header links for the footer
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Spiritually", path: "/spirituality" },
    { name: "Kitchen & Dining", path: "/kitchen" },
    { name: "Rooms & Accommodation", path: "/rooms" },
    { name: "Library & Reading Room", path: "/library" },
    { name: "Sports & Athletics", path: "/sports" },
    { name: "Our Trustees", path: "/our-trustees" },
    { name: "Contact", path: "/contact" },
  ];

  const styles = {
    footer: {
      position: "relative",
      backgroundColor: colors.navyDark,
      color: colors.white,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      overflow: "hidden",
      paddingTop: isMobile ? "60px" : "90px",
      borderTop: `1px solid ${colors.borderGray}`,
    },
    bgImageLayer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${boardingBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.04,
      pointerEvents: "none",
      zIndex: 1,
    },
    topGoldBar: {
      position: "absolute",
      top: 0,
      left: "10%",
      right: "10%",
      height: "2px",
      background:
        "linear-gradient(90deg, transparent 0%, #C5A059 50%, transparent 100%)",
      opacity: 0.8,
      zIndex: 2,
    },
    container: {
      position: "relative",
      zIndex: 3,
      maxWidth: "1400px",
      margin: "0 auto",
      padding: isMobile ? "0 24px" : "0 5%",
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr 1.2fr 1.2fr",
      gap: isMobile ? "40px" : "30px",
      paddingBottom: isMobile ? "50px" : "70px",
      borderBottom: `1px solid ${colors.borderGray}`,
    },
    // Column 1: Brand
    brandCol: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px",
    },
    logoImage: {
      height: isMobile ? "60px" : "75px",
      width: "auto",
      objectFit: "contain",
      filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.4))",
    },
    brandDescription: {
      color: colors.textGray,
      fontSize: "0.95rem",
      lineHeight: "1.7",
      margin: 0,
      maxWidth: "340px",
    },
    estBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 14px",
      backgroundColor: "rgba(197, 160, 89, 0.1)",
      border: "1px solid rgba(197, 160, 89, 0.25)",
      borderRadius: "50px",
      color: colors.goldBright,
      fontSize: "0.8rem",
      fontWeight: "600",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    // Column Headers
    colHeading: {
      fontSize: "1.1rem",
      fontWeight: "700",
      color: colors.white,
      margin: "0 0 20px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      letterSpacing: "0.5px",
    },
    headingLine: {
      width: "20px",
      height: "2px",
      backgroundColor: colors.gold,
      borderRadius: "2px",
    },
    // Column 2: Links
    linksList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    linkItem: {
      color: colors.textGray,
      textDecoration: "none",
      fontSize: "0.95rem",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.25s ease",
    },
    // Column 3: Consolidated Hours (No squishing on mobile)
    scheduleList: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    scheduleRow: {
      margin: 0,
      fontSize: "0.95rem",
      color: colors.textGray,
      lineHeight: "1.6",
    },
    yellowDot: {
      color: colors.gold,
      marginRight: "8px",
      fontWeight: "bold",
    },
    dayTitle: {
      color: colors.white,
      fontWeight: "600",
      display: "block",
      marginBottom: "2px",
    },
    // Column 4: Contact
    contactList: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    contactRow: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      color: colors.textGray,
      fontSize: "0.95rem",
      lineHeight: "1.5",
    },
    iconWrapper: {
      color: colors.gold,
      backgroundColor: "rgba(197, 160, 89, 0.1)",
      padding: "8px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: "2px",
    },
    // Sub-Footer
    subFooter: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      padding: "24px 0",
      fontSize: "0.85rem",
      color: colors.textGray,
      textAlign: isMobile ? "center" : "left",
    },
    legalLinks: {
      display: "flex",
      gap: "24px",
    },
    legalLink: {
      color: colors.textGray,
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
          
          .footer-nav-link:hover {
            color: #C5A059 !important;
            transform: translateX(4px);
          }
          
          .footer-legal-link:hover {
            color: #FFFFFF !important;
          }

          .contact-hover:hover .contact-text {
            color: #FFFFFF;
          }
        `}
      </style>

      <footer style={styles.footer}>
        <div style={styles.bgImageLayer} />
        <div style={styles.topGoldBar} />

        <div style={styles.container}>
          <div style={styles.mainGrid}>
            {/* COLUMN 1: Brand */}
            <div style={styles.brandCol}>
              <Link to="/" style={{ display: "block" }}>
                <img
                  src={logo}
                  alt="Shree Rajkot Lohana Boarding House"
                  style={styles.logoImage}
                />
              </Link>

              <div style={styles.estBadge}>
                <span>★</span> Est. 1896 • Rajkot, Gujarat
              </div>

              <p style={styles.brandDescription}>
                A trusted second home for over a century. We nurture academic
                excellence, community values, and personal growth in a secure,
                welcoming environment for students.
              </p>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div>
              <h4 style={styles.colHeading}>
                <span style={styles.headingLine} />
                Quick Links
              </h4>
              <ul style={styles.linksList}>
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                      style={styles.linkItem}
                      className="footer-nav-link"
                    >
                      <ChevronRight size={16} color={colors.gold} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Clean, consolidated schedule that fits mobile screens perfectly */}
            <div>
              <h4 style={styles.colHeading}>
                <span style={styles.headingLine} />
                Office Hours
              </h4>

              <div style={styles.scheduleList}>
                <p style={styles.scheduleRow}>
                  <span style={styles.dayTitle}>
                    <span style={styles.yellowDot}>•</span> Monday – Saturday
                  </span>
                  9:00 AM – 1:00 PM <br />
                  4:00 PM – 8:00 PM
                </p>

                <p style={styles.scheduleRow}>
                  <span style={styles.dayTitle}>
                    <span style={styles.yellowDot}>•</span> Sunday
                  </span>
                  <span style={{ color: "#FF7A7A", fontWeight: "700" }}>
                    Closed
                  </span>
                </p>
              </div>
            </div>

            {/* COLUMN 4: Contact with EXACT details provided */}
            <div>
              <h4 style={styles.colHeading}>
                <span style={styles.headingLine} />
                Get In Touch
              </h4>
              <div style={styles.contactList}>
                <div style={styles.contactRow} className="contact-hover">
                  <div style={styles.iconWrapper}>
                    <MapPin size={18} />
                  </div>
                  <span
                    className="contact-text"
                    style={{ transition: "color 0.2s" }}
                  >
                    8, Rajputpara Main Road, Rajputpara - 8, Bhakti Nagar,
                    Rajkot, Gujarat — 360001
                  </span>
                </div>
                <div
                  style={{
                    ...styles.contactRow,
                    alignItems: "flex-start",
                  }}
                >
                  <div style={styles.iconWrapper}>
                    <Phone size={18} />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <a
                      href="tel:02812229985"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        transition: "color 0.2s",
                      }}
                      className="contact-hover contact-text"
                    >
                      0281 222 9985
                    </a>

                    <a
                      href="tel:02812228449"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        transition: "color 0.2s",
                      }}
                      className="contact-hover contact-text"
                    >
                      0281 222 8449
                    </a>
                  </div>
                </div>
                <a
                  href="mailto:rajkotlohanaboarding@gmail.com"
                  style={{ ...styles.contactRow, textDecoration: "none" }}
                  className="contact-hover"
                >
                  <div style={styles.iconWrapper}>
                    <Mail size={18} />
                  </div>
                  <span
                    className="contact-text"
                    style={{ transition: "color 0.2s", wordBreak: "break-all" }}
                  >
                    rajkotlohanaboarding@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Sub-Footer */}
          <div style={styles.subFooter}>
            <div>
              © {new Date().getFullYear()} Shree Rajkot Lohana Boarding House.
              All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
