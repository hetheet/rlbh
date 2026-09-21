import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function EligibilitySection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- PREMIUM COLOR PALETTE (Matched to Hero) ---
  const colors = {
    navy: "#1B2A4A",
    gold: "#CE9438",
    pearl: "#FCFAF5",
    white: "#FFFFFF",
    textGray: "#4A5568",
    lightBg: "#F5F2EB",
    borderLight: "rgba(27, 42, 74, 0.08)",
    goldLight: "rgba(206, 148, 56, 0.12)",
  };

  // --- DATA: ELIGIBILITY CATEGORIES (Strictly School & College Students) ---
  const categories = [
    {
      title: "Higher Secondary (11th & 12th)",
      subtitle: "For students actively enrolled in recognized schools",
      badge: "School",
      iconPath:
        "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      courses: [
        "11th & 12th Science (Group A - PCM / Group B - PCB)",
        "11th & 12th Commerce (Accounts, Economics & Statistics)",
        "11th & 12th Arts / Humanities streams",
        "Regular students of recognized English or Gujarati medium schools",
      ],
    },
    {
      title: "Undergraduate (UG) Programs",
      subtitle:
        "Comfortable accommodation for university & college degree students",
      badge: "College",
      iconPath:
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      courses: [
        "Engineering & Technology (BE / B.Tech / Diploma)",
        "Medical & Healthcare (MBBS, BDS, B.Pharm, Physiotherapy)",
        "Commerce & Management (B.Com, BBA, BBA-LL.B)",
        "IT & Computer Science (BCA, B.Sc IT, Data Science)",
        "Law, Architecture (B.Arch), and Basic Sciences (B.Sc)",
      ],
    },
    {
      title: "Postgraduate (PG) Programs",
      subtitle:
        "A peaceful, mature environment for advanced university degrees",
      badge: "Postgrad",
      iconPath:
        "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      courses: [
        "Master of Business Administration (MBA / PGDM)",
        "Master of Technology & Engineering (ME / M.Tech)",
        "Master of Commerce & Applications (M.Com, MCA)",
        "Medical Postgraduate Degrees (MD / MS / MDS)",
        "Master of Laws (LLM) and other university master's courses",
      ],
    },
    {
      title: "Professional & Specialized Degrees",
      subtitle:
        "For college students pursuing professional accounting or degree tracks",
      badge: "Professional",
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      courses: [
        "Chartered Accountancy (CA Foundation, Inter & Final students)",
        "Company Secretary (CS) & Cost Accountancy (CMA students)",
        "Integrated dual-degree college programs (e.g., B.Com + CA)",
        "Bachelor of Education (B.Ed) and physical education degrees",
        "Polytechnic diploma and technical institute college students",
      ],
    },
  ];

  // --- INLINE STYLES ---
  const styles = {
    section: {
      position: "relative",
      width: "100%",
      backgroundColor: colors.white,
      padding: isMobile ? "60px 20px" : "100px 5%",
      boxSizing: "border-box",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    },
    container: {
      maxWidth: "1350px",
      margin: "0 auto",
    },
    headerWrapper: {
      textAlign: "center",
      maxWidth: "750px",
      margin: "0 auto 50px",
    },
    seoSubTitle: {
      display: "block",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      fontWeight: "700",
      color: colors.gold,
      textTransform: "uppercase",
      letterSpacing: "3px",
      marginBottom: "12px",
    },
    mainTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "2.3rem" : "3.5rem",
      color: colors.navy,
      fontWeight: "600",
      lineHeight: "1.15",
      margin: "0 0 16px 0",
      letterSpacing: "-0.5px",
    },
    headerDesc: {
      fontSize: isMobile ? "1rem" : "1.15rem",
      color: colors.textGray,
      lineHeight: "1.6",
      margin: 0,
    },
    // Prerequisite Banner (Optimized for Mobile)
    prereqBanner: {
      background: `linear-gradient(135deg, ${colors.navy} 0%, #2A406D 100%)`,
      borderRadius: "20px",
      padding: isMobile ? "22px 18px" : "32px 40px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      justifyContent: "space-between",
      gap: isMobile ? "16px" : "20px",
      marginBottom: "50px",
      boxShadow: "0 20px 40px rgba(27, 42, 74, 0.15)",
      border: `1px solid rgba(206, 148, 56, 0.3)`,
    },
    prereqLeft: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
      gap: isMobile ? "12px" : "18px",
    },
    iconBox: {
      width: isMobile ? "46px" : "56px",
      height: isMobile ? "46px" : "56px",
      borderRadius: isMobile ? "12px" : "16px",
      backgroundColor: "rgba(206, 148, 56, 0.15)",
      border: `1px solid ${colors.gold}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    prereqTitle: {
      color: "#FFF",
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "1.2rem" : "1.6rem",
      margin: "0 0 6px 0",
      fontWeight: "600",
      lineHeight: "1.3",
    },
    prereqSub: {
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: isMobile ? "0.88rem" : "0.95rem",
      margin: 0,
      lineHeight: "1.5",
    },
    tagGroup: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      width: isMobile ? "100%" : "auto",
    },
    goldTag: {
      backgroundColor: colors.gold,
      color: colors.navy,
      fontWeight: "700",
      fontSize: "0.8rem",
      padding: "8px 16px",
      borderRadius: "100px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    outlineTag: {
      backgroundColor: "rgba(255,255,255,0.1)",
      color: "#FFF",
      border: "1px solid rgba(255,255,255,0.2)",
      fontWeight: "600",
      fontSize: "0.8rem",
      padding: "8px 16px",
      borderRadius: "100px",
    },
    // Grid Styles
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr",
      gap: "28px",
    },
    card: {
      backgroundColor: colors.pearl,
      border: `1px solid ${colors.borderLight}`,
      borderRadius: "24px",
      padding: isMobile ? "28px 22px" : "40px 36px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.4s ease",
    },
    cardTop: {
      marginBottom: "24px",
    },
    cardHeaderRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    cardBadge: {
      fontSize: "0.75rem",
      fontWeight: "700",
      color: colors.gold,
      backgroundColor: colors.goldLight,
      padding: "6px 14px",
      borderRadius: "100px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    cardTitle: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? "1.4rem" : "1.7rem",
      color: colors.navy,
      margin: "0 0 8px 0",
      fontWeight: "600",
    },
    cardSubtitle: {
      fontSize: "0.9rem",
      color: colors.textGray,
      margin: 0,
      lineHeight: "1.5",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      fontSize: isMobile ? "0.95rem" : "1rem",
      color: colors.navy,
      fontWeight: "500",
      lineHeight: "1.4",
    },
    checkIconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      backgroundColor: colors.navy,
      color: colors.gold,
      flexShrink: 0,
      marginTop: "2px",
    },
    cardFooterNote: {
      marginTop: "28px",
      paddingTop: "18px",
      borderTop: `1px dashed rgba(27, 42, 74, 0.15)`,
      fontSize: "0.85rem",
      color: colors.textGray,
      fontStyle: "italic",
    },
  };

  return (
    <section
      style={styles.section}
      aria-label="Eligibility and Courses Accepted"
    >
      <div style={styles.container}>
        {/* Static Section Header */}
        <div style={styles.headerWrapper}>
          <span style={styles.seoSubTitle}>✦ Who Can Apply ✦</span>
          <h2 style={styles.mainTitle}>
            Academic Eligibility & <br />
            <span style={{ color: colors.gold, fontStyle: "italic" }}>
              Courses Supported
            </span>
          </h2>
          <p style={styles.headerDesc}>
            We provide a supportive, secure second home exclusively for Lohana
            students who are actively enrolled in Rajkot's recognized schools,
            colleges, and university degree programs.
          </p>
        </div>

        {/* Static Core Eligibility Banner */}
        <div style={styles.prereqBanner}>
          <div style={styles.prereqLeft}>
            <div style={styles.iconBox}>
              <svg
                width={isMobile ? "24" : "28"}
                height={isMobile ? "24" : "28"}
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.gold}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h3 style={styles.prereqTitle}>
                {isMobile
                  ? "Exclusive Lohana Boys Boarding"
                  : "Exclusive Lohana Boys Boarding House"}
              </h3>
              <p style={styles.prereqSub}>
                {isMobile
                  ? "Reserved strictly for male Lohana students actively enrolled in a recognized school or college. Coaching aspirants ineligible."
                  : "Admissions are strictly reserved for male students belonging to the Lohana community who are actively enrolled in a school or college. Standalone coaching or exam aspirants are not eligible."}
              </p>
            </div>
          </div>
          <div style={styles.tagGroup}>
            <span style={styles.goldTag}>✓ Boys Boarding</span>
            <span style={styles.outlineTag}>✓ Enrolled Students Only</span>
          </div>
        </div>

        {/* Static Eligibility Grid */}
        <div style={styles.grid}>
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              style={styles.card}
              // Hover animations kept for interactivity, they do not cause layout bugs!
              whileHover={{
                y: -6,
                boxShadow: "0 25px 50px rgba(27, 42, 74, 0.1)",
                borderColor: "rgba(206, 148, 56, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div style={styles.cardTop}>
                  <div style={styles.cardHeaderRow}>
                    <span style={styles.cardBadge}>{cat.badge}</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={colors.gold}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={cat.iconPath} />
                    </svg>
                  </div>
                  <h3 style={styles.cardTitle}>{cat.title}</h3>
                  <p style={styles.cardSubtitle}>{cat.subtitle}</p>
                </div>

                <ul style={styles.list}>
                  {cat.courses.map((course, i) => (
                    <li key={i} style={styles.listItem}>
                      <span style={styles.checkIconWrapper}>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={styles.cardFooterNote}>
                * Active school or college fee receipt , bonafide certificate
                etc. is mandatory for admission.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
