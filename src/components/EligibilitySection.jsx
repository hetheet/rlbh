import React from "react";
import { motion } from "framer-motion";

export default function EligibilitySection() {
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

  return (
    <>
      {/*
        RESPONSIVE LAYOUT IS NOW PURE CSS (media queries).
        The browser re-applies these on every layout, so the mobile layout can
        never "get stuck" in the desktop layout like the old JS width check.
      */}
      <style>
        {`
          .elg-section {
            position: relative;
            width: 100%;
            background-color: ${colors.white};
            padding: 100px 5%;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            overflow-x: hidden;
          }
          .elg-section *, .elg-section *::before, .elg-section *::after {
            box-sizing: border-box;
          }
          .elg-container {
            max-width: 1350px;
            margin: 0 auto;
            width: 100%;
          }
          .elg-header {
            text-align: center;
            max-width: 750px;
            margin: 0 auto 50px;
          }
          .elg-subtitle {
            display: block;
            font-size: 0.95rem;
            font-weight: 700;
            color: ${colors.gold};
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 12px;
          }
          .elg-main-title {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            color: ${colors.navy};
            font-weight: 600;
            line-height: 1.15;
            margin: 0 0 16px 0;
            letter-spacing: -0.5px;
          }
          .elg-header-desc {
            font-size: 1.15rem;
            color: ${colors.textGray};
            line-height: 1.6;
            margin: 0;
          }

          /* Prerequisite Banner */
          .elg-banner {
            background: linear-gradient(135deg, ${colors.navy} 0%, #2A406D 100%);
            border-radius: 20px;
            padding: 32px 40px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 50px;
            box-shadow: 0 20px 40px rgba(27, 42, 74, 0.15);
            border: 1px solid rgba(206, 148, 56, 0.3);
            width: 100%;
          }
          .elg-banner-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 18px;
            min-width: 0;
          }
          .elg-banner-text {
            min-width: 0;
            flex: 1 1 auto;
          }
          .elg-icon-box {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background-color: rgba(206, 148, 56, 0.15);
            border: 1px solid ${colors.gold};
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .elg-prereq-title {
            color: #FFF;
            font-family: 'Playfair Display', serif;
            font-size: 1.6rem;
            margin: 0 0 6px 0;
            font-weight: 600;
            line-height: 1.3;
          }
          .elg-prereq-sub {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            margin: 0;
            line-height: 1.5;
          }
          .elg-tag-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            width: auto;
            flex-shrink: 0;
          }
          .elg-gold-tag {
            background-color: ${colors.gold};
            color: ${colors.navy};
            font-weight: 700;
            font-size: 0.8rem;
            padding: 8px 16px;
            border-radius: 100px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .elg-outline-tag {
            background-color: rgba(255,255,255,0.1);
            color: #FFF;
            border: 1px solid rgba(255,255,255,0.2);
            font-weight: 600;
            font-size: 0.8rem;
            padding: 8px 16px;
            border-radius: 100px;
          }
          .elg-icon-svg { width: 28px; height: 28px; }

          /* Show desktop / mobile text variants purely with CSS */
          .elg-only-mobile { display: none; }
          .elg-only-desktop { display: inline; }

          /* Grid */
          .elg-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px;
            width: 100%;
          }
          .elg-card {
            background-color: ${colors.pearl};
            border: 1px solid ${colors.borderLight};
            border-radius: 24px;
            padding: 40px 36px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            min-width: 0;
            transition: all 0.4s ease;
          }
          .elg-card-top { margin-bottom: 24px; }
          .elg-card-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }
          .elg-card-badge {
            font-size: 0.75rem;
            font-weight: 700;
            color: ${colors.gold};
            background-color: ${colors.goldLight};
            padding: 6px 14px;
            border-radius: 100px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .elg-card-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.7rem;
            color: ${colors.navy};
            margin: 0 0 8px 0;
            font-weight: 600;
            overflow-wrap: break-word;
            word-break: normal;
          }
          .elg-card-subtitle {
            font-size: 0.9rem;
            color: ${colors.textGray};
            margin: 0;
            line-height: 1.5;
          }
          .elg-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .elg-list-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 1rem;
            color: ${colors.navy};
            font-weight: 500;
            line-height: 1.4;
          }
          .elg-list-item > span:last-child {
            min-width: 0;
            overflow-wrap: break-word;
          }
          .elg-check {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background-color: ${colors.navy};
            color: ${colors.gold};
            flex-shrink: 0;
            margin-top: 2px;
          }
          .elg-footer-note {
            margin-top: 28px;
            padding-top: 18px;
            border-top: 1px dashed rgba(27, 42, 74, 0.15);
            font-size: 0.85rem;
            color: ${colors.textGray};
            font-style: italic;
          }

          /* ================= MOBILE (below 768px) ================= */
          @media (max-width: 767px) {
            .elg-section { padding: 60px 20px; }
            .elg-subtitle { font-size: 0.85rem; }
            .elg-main-title { font-size: 2.3rem; }
            .elg-header-desc { font-size: 1rem; }

            .elg-banner {
              padding: 22px 18px;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
              gap: 16px;
            }
            .elg-banner-left {
              flex-direction: column;
              align-items: flex-start;
              gap: 12px;
              width: 100%;
            }
            .elg-banner-text { width: 100%; }
            .elg-icon-box { width: 46px; height: 46px; border-radius: 12px; }
            .elg-icon-svg { width: 24px; height: 24px; }
            .elg-prereq-title { font-size: 1.2rem; }
            .elg-prereq-sub { font-size: 0.88rem; }
            .elg-tag-group { width: 100%; }

            .elg-only-mobile { display: inline; }
            .elg-only-desktop { display: none; }

            .elg-grid { grid-template-columns: minmax(0, 1fr); }
            .elg-card { padding: 28px 22px; }
            .elg-card-title { font-size: 1.4rem; }
            .elg-list-item { font-size: 0.95rem; }
          }
        `}
      </style>

      <section
        className="elg-section"
        aria-label="Eligibility and Courses Accepted"
      >
        <div className="elg-container">
          {/* Static Section Header */}
          <div className="elg-header">
            <span className="elg-subtitle">✦ Who Can Apply ✦</span>
            <h2 className="elg-main-title">
              Academic Eligibility & <br />
              <span style={{ color: colors.gold, fontStyle: "italic" }}>
                Courses Supported
              </span>
            </h2>
            <p className="elg-header-desc">
              We provide a supportive, secure second home exclusively for
              Lohana students who are actively enrolled in Rajkot's recognized
              schools, colleges, and university degree programs.
            </p>
          </div>

          {/* Static Core Eligibility Banner */}
          <div className="elg-banner">
            <div className="elg-banner-left">
              <div className="elg-icon-box">
                <svg
                  className="elg-icon-svg"
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
              <div className="elg-banner-text">
                <h3 className="elg-prereq-title">
                  <span className="elg-only-mobile">
                    Exclusive Lohana Boys Boarding
                  </span>
                  <span className="elg-only-desktop">
                    Exclusive Lohana Boys Boarding House
                  </span>
                </h3>
                <p className="elg-prereq-sub">
                  <span className="elg-only-mobile">
                    Reserved strictly for male Lohana students actively enrolled
                    in a recognized school or college. Coaching aspirants
                    ineligible.
                  </span>
                  <span className="elg-only-desktop">
                    Admissions are strictly reserved for male students belonging
                    to the Lohana community who are actively enrolled in a
                    school or college. Standalone coaching or exam aspirants are
                    not eligible.
                  </span>
                </p>
              </div>
            </div>
            <div className="elg-tag-group">
              <span className="elg-gold-tag">✓ Boys Boarding</span>
              <span className="elg-outline-tag">✓ Enrolled Students Only</span>
            </div>
          </div>

          {/* Static Eligibility Grid */}
          <div className="elg-grid">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                className="elg-card"
                // Hover animations kept for interactivity, they do not cause layout bugs!
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(27, 42, 74, 0.1)",
                  borderColor: "rgba(206, 148, 56, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="elg-card-top">
                    <div className="elg-card-header-row">
                      <span className="elg-card-badge">{cat.badge}</span>
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
                    <h3 className="elg-card-title">{cat.title}</h3>
                    <p className="elg-card-subtitle">{cat.subtitle}</p>
                  </div>

                  <ul className="elg-list">
                    {cat.courses.map((course, i) => (
                      <li key={i} className="elg-list-item">
                        <span className="elg-check">
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

                <div className="elg-footer-note">
                  * Active school or college fee receipt , bonafide certificate
                  etc. is mandatory for admission.
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}