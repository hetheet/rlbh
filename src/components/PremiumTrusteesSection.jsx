import React from "react";
import { motion } from "framer-motion";
// IMPORTANT: Update this path to your actual logo file
import logo from "../assets/circle-logo.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.jpeg";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";

export default function PremiumTrusteesSection() {
  // --- TRUSTEE DATA ---
  const trustees = [
    {
      id: 1,
      name: "Mr. Hiralal Chunilal Manek",
      designation: "President",
      image: t1,
    },
    {
      id: 2,
      name: "Mr. Navinbhai Valjibhai Thacker",
      designation: "Secretary",
      image: t2,
    },
    {
      id: 3,
      name: "Mr. Ramkumar Harkishorbhai Barchha",
      designation: "Secretary",
      image: t3,
    },
    {
      id: 4,
      name: "Mr. Darshakbhai Maganbhai Thakkar",
      designation: "Trustee",
      image: t4,
    },
    {
      id: 4,
      name: "Mr. Apurvabhai Harkantbhai Manek",
      designation: "Trustee",
      image: t5,
    },
  ];

  return (
    <>
      {/* Premium Fonts and Global Responsive Styling */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

          :root {
            --navy-color: #0B1B3D;
            --gold-color: #C59D4F;
            --beige-bg: #FAF8F4;
            --card-border: #E8DFCE;
            --footer-shape-color: #EADFC9;
            --text-dark: #121F38;
            --text-muted: #555555;
          }

          .premium-trustees-section {
            background-color: var(--beige-bg);
            /* REMOVED MASSIVE PADDING: Tightened to sit flush with Header and Footer */
            padding: 100px 24px 120px 24px;
            font-family: 'Plus Jakarta Sans', sans-serif;
            position: relative;
            overflow: hidden;
          }

          .trustees-container {
            max-width: 1280px;
            margin: 0 auto;
          }

          /* --- HEADER STYLING --- */
          .trustees-header {
            text-align: center;
            margin-bottom: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .trustees-subtitle-wrapper {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 12px;
          }

          .subtitle-line {
            width: 40px;
            height: 1.5px;
            background: linear-gradient(90deg, transparent, var(--gold-color));
          }

          .subtitle-line.right {
            background: linear-gradient(90deg, var(--gold-color), transparent);
          }

          .trustees-subtitle {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2.5px;
            color: var(--gold-color);
            text-transform: uppercase;
            margin: 0;
          }

          .trustees-title {
            font-family: 'Playfair Display', serif;
            font-size: 52px;
            font-weight: 700;
            color: var(--navy-color);
            margin: 0 0 18px 0;
            line-height: 1.2;
          }

          .trustees-title span.italic-community {
            color: var(--gold-color);
            font-style: italic;
            font-family: 'Playfair Display', serif;
            font-weight: 600;
          }

          .trustees-description {
            font-size: 18px;
            line-height: 1.65;
            color: var(--text-muted);
            max-width: 680px;
            margin: 0;
          }

          /* --- GRID STYLING --- */
          .trustees-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            padding-top: 20px;
          }

          /* --- CARD STYLING --- */
          .trustee-card {
            background-color: #FFFFFF;
            border: 1px solid var(--card-border);
            border-radius: 28px;
            position: relative;
            padding: 18px 18px 0px 18px;
            box-shadow: 0 10px 30px rgba(11, 27, 61, 0.03);
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: border-color 0.4s ease;
          }

          /* --- EMBLEM BADGE (TOP-RIGHT, FULL LOGO, NO BG) --- */
          .trustee-emblem {
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%, -50%); /* Moves to top-right corner, half-out */
            width: 50px; /* Size of the logo */
            height: 50px;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .emblem-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          /* --- PHOTO BOX (INSET BORDER) --- */
          .trustee-image-container {
            width: 100%;
            height: 290px;
            border-radius: 18px 18px 0 0;
            overflow: hidden;
            position: relative;
            background-color: #F5F5F5;
          }

          .trustee-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .trustee-image-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 70px;
            background: linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0) 100%);
            z-index: 2;
          }

          /* --- TEXT INFO SECTION --- */
          .trustee-info {
            text-align: center;
            padding: 24px 12px 36px 12px;
            z-index: 3;
            background-color: #FFFFFF;
            width: 100%;
            box-sizing: border-box;
            border-radius: 0 0 28px 28px;
          }

          .trustee-name {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 700;
            color: var(--text-dark);
            margin: 0 0 8px 0;
            letter-spacing: -0.2px;
          }

          .trustee-designation {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.8px;
            color: var(--gold-color);
            text-transform: uppercase;
            margin: 0;
          }

          /* --- RESPONSIVE MEDIA QUERIES --- */
          @media (max-width: 1120px) {
            .trustees-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 28px;
            }
            .trustees-title {
              font-size: 42px;
            }
          }

          @media (max-width: 680px) {
            .premium-trustees-section {
              /* Kept completely tight on mobile */
              padding: 20px 24px 40px 24px; 
            }
            .trustees-header {
              margin-bottom: 35px;
            }
            .trustees-grid {
              grid-template-columns: 1fr;
              gap: 32px; 
              max-width: 380px;
              margin: 0 auto;
              padding-top: 15px;
            }
            .trustees-title {
              font-size: 36px;
            }
            .trustees-description {
              font-size: 16px;
            }
            .trustee-image-container {
              height: 270px;
            }
          }
        `}
      </style>

      <section className="premium-trustees-section" aria-label="Our Trustees">
        <div className="trustees-container">
          {/* HEADER SECTION */}
          <div className="trustees-header">
            <div className="trustees-subtitle-wrapper">
              <div className="subtitle-line" />
              <h2 className="trustees-subtitle">Our Trustees</h2>
              <div className="subtitle-line right" />
            </div>

            <h3 className="trustees-title">
              The People Behind Our{" "}
              <span className="italic-community">Community</span>
            </h3>

            <p className="trustees-description">
              With experience, commitment, and a shared vision, our trustees
              help guide the boarding community towards a stronger future for
              every student.
            </p>
          </div>

          {/* TRUSTEE GRID */}
          <div className="trustees-grid">
            {trustees.map((trustee) => (
              <motion.div
                key={trustee.id}
                className="trustee-card"
                whileHover={{
                  y: -10,
                  borderColor: "var(--gold-color)",
                  boxShadow: "0 18px 45px rgba(184, 160, 120, 0.16)",
                }}
                transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
              >
                {/* Fixed Logo Badge: Full Size, No Background, Top Right */}
                <div className="trustee-emblem">
                  {logo && (
                    <img
                      src={logo}
                      alt="Logo"
                      className="emblem-img"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                </div>

                {/* Inset Photo Frame */}
                <div className="trustee-image-container">
                  <motion.img
                    src={trustee.image}
                    alt={trustee.name}
                    className="trustee-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Smooth image fading layer into background */}
                  <div className="trustee-image-fade" />
                </div>

                {/* Trustee Information */}
                <div className="trustee-info">
                  <h4 className="trustee-name">{trustee.name}</h4>
                  <p className="trustee-designation">{trustee.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
