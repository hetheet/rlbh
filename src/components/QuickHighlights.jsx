import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Utensils,
  Maximize,
  ShieldCheck,
  Activity,
  BookOpen,
  Star,
  Video,
  Leaf,
  Droplets,
  Thermometer,
  Wallet,
  Sparkles,
} from "lucide-react";

// --- 100% PRESERVED EXACT CONTENT & ICONS IN Deep Dark ("Black-Type") Theme ---
const facilityGroups = [
  {
    id: "living",
    category: "Living & Comfort",
    tagline: "Your Home Away From Home",
    tabIcon: Users,
    description:
      "Architecturally designed for daily comfort, generous personal space, and a peaceful living environment.",
    items: [
      {
        title: "390+ Capacity",
        desc: "A large, welcoming community for Lohana students.",
        icon: Users,
        stat: "390+ Students",
      },
      {
        title: "Spacious Rooms",
        desc: "Comfortable, well-ventilated living spaces.",
        icon: Maximize,
        stat: "Well Ventilated",
      },
      {
        title: "Hot/Cold Water",
        desc: "Bathing facilities with hot and cold water supply.",
        icon: Thermometer,
        stat: "Hot & Cold",
      },
    ],
  },
  {
    id: "health",
    category: "Health & Dining",
    tagline: "Pure, Nutritious & Hygienic",
    tabIcon: Utensils,
    description:
      "Fueling academic excellence with spotless culinary kitchens and pure, traditional vegetarian dining.",
    items: [
      {
        title: "Hygienic Kitchen",
        desc: "Spotless cooking environment ensuring daily health.",
        icon: Utensils,
        stat: "Daily Audits",
      },
      {
        title: "Pure Veg Meals",
        desc: "Nutritious, pure vegetarian food served daily.",
        icon: Leaf,
        stat: "Pure Veg",
      },
      {
        title: "RO Clean Water",
        desc: "Purified drinking water available 24/7.",
        icon: Droplets,
        stat: "24/7 Supply",
      },
    ],
  },
  {
    id: "focus",
    category: "Focus & Security",
    tagline: "Uncompromised Campus Safety",
    tabIcon: ShieldCheck,
    description:
      "A fortress of security combined with a distraction-free sanctuary engineered for serious study.",
    items: [
      {
        title: "Study Library",
        desc: "Quiet, study-friendly environment for academics.",
        icon: BookOpen,
        stat: "Silent Zone",
      },
      {
        title: "24×7 Security",
        desc: "Round-the-clock guards keeping the campus safe.",
        icon: ShieldCheck,
        stat: "Always Safe",
      },
      {
        title: "CCTV Campus",
        desc: "Complete camera surveillance for peace of mind.",
        icon: Video,
        stat: "HD CCTV",
      },
    ],
  },
  {
    id: "community",
    category: "Community & Value",
    tagline: "Holistic Growth Beyond Books",
    tabIcon: Star,
    description:
      "Staying physically energized, connected to rich cultural roots, and keeping elite education accessible.",
    items: [
      {
        title: "Sports Facilities",
        desc: "Indoor & outdoor sports for physical fitness.",
        icon: Activity,
        stat: "Active Life",
      },
      {
        title: "Cultural Events",
        desc: "Programs that connect students to their roots.",
        icon: Star,
        stat: "Tradition",
      },
      {
        title: "Affordable Fees",
        desc: "Highly affordable structure for middle-class families.",
        icon: Wallet,
        stat: "Affordable",
      },
    ],
  },
];

export default function QuickHighlights() {
  const [activeTab, setActiveTab] = useState(0);
  const currentGroup = facilityGroups[activeTab];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

          * {
            box-sizing: border-box;
          }

          .boarding-section {
            background-color: #080E1A; /* EXACT DEEP BLACK / DARK NAVY SHADE */
            color: #FFFFFF;
            font-family: 'Plus Jakarta Sans', sans-serif;
            padding: 80px 5%;
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .boarding-container {
            max-width: 1240px;
            margin: 0 auto;
            width: 100%;
          }

          /* --- HEADER --- */
          .boarding-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 40px;
            padding: 0 10px;
          }

          .boarding-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            border-radius: 30px;
            background: rgba(223, 172, 84, 0.12);
            border: 1px solid rgba(223, 172, 84, 0.3);
            color: #DFAC54;
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 16px;
          }

          .boarding-title {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.75rem, 4.5vw, 2.8rem);
            font-weight: 700;
            line-height: 1.25;
            margin: 0 0 16px;
            color: #FFFFFF;
          }

          .boarding-subtitle {
            color: #94A3B8;
            font-size: clamp(0.95rem, 2vw, 1.05rem);
            line-height: 1.6;
            margin: 0;
          }

          /* --- DESKTOP GRID LAYOUT --- */
          .boarding-grid {
            display: grid;
            grid-template-columns: 4.2fr 7.8fr;
            gap: 40px;
            align-items: start;
            width: 100%;
          }

          /* --- LEFT PANEL: DESKTOP --- */
          .boarding-nav-panel {
            background: #0D1628; /* DEEP DARK SLATE / BLACK SHADE */
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 28px;
            width: 100%;
          }

          .boarding-nav-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #64748B;
            font-weight: 700;
            margin-bottom: 16px;
            display: block;
          }

          .boarding-tab-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 28px;
            width: 100%;
          }

          /* --- ANIMATED PILL BUTTONS --- */
          .boarding-tab-btn {
            position: relative;
            display: flex;
            align-items: center;
            gap: 14px;
            width: 100%;
            padding: 14px 18px;
            border-radius: 16px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.05);
            color: #94A3B8;
            font-size: 0.95rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            cursor: pointer;
            transition: color 0.25s ease, border-color 0.25s ease;
            text-align: left;
            overflow: hidden;
            z-index: 1;
          }

          .boarding-tab-btn:hover {
            color: #FFFFFF;
            border-color: rgba(255, 255, 255, 0.15);
          }

          .boarding-tab-btn.active {
            color: #FFFFFF;
            border-color: transparent;
          }

          /* Circular Icon inside Button */
          .tab-icon-circle {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.3s ease;
            z-index: 2;
          }

          .boarding-tab-btn.active .tab-icon-circle {
            background: #080E1A; /* EXACT DARK BLACK / NAVY BG */
            color: #DFAC54;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }

          .tab-text {
            z-index: 2;
            white-space: nowrap;
          }

          /* --- SLIDING GOLD BACKGROUND --- */
          .tab-active-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(223, 172, 84, 0.25) 0%, rgba(206, 148, 56, 0.12) 100%);
            border: 1px solid #DFAC54;
            border-radius: 16px;
            z-index: 0;
            box-shadow: 0 0 20px rgba(223, 172, 84, 0.15);
          }

          .boarding-panel-summary {
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }

          .boarding-summary-title {
            font-family: 'Poppins', sans-serif;
            font-size: 1.2rem;
            font-weight: 600;
            color: #DFAC54;
            margin: 0 0 8px;
          }

          .boarding-summary-desc {
            color: #94A3B8;
            font-size: 0.88rem;
            line-height: 1.6;
            margin: 0;
          }

          /* --- RIGHT PANEL: FILTERED CARDS --- */
          .boarding-cards-container {
            display: flex;
            flex-direction: column;
            gap: 16px;
            min-height: 400px;
            width: 100%;
          }

          .boarding-card {
            background: #0D1628; /* DEEP DARK SLATE / BLACK SHADE */
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 24px 28px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            transition: all 0.3s ease;
            width: 100%;
          }

          .boarding-card:hover {
            border-color: rgba(223, 172, 84, 0.4);
            transform: translateX(6px);
            background: #111C33; /* SLIGHTLY LIGHTER HOVER SHADE */
          }

          .boarding-card-left {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            flex: 1 1 0%;
          }

          .boarding-icon-box {
            width: 50px;
            height: 50px;
            border-radius: 14px;
            background: rgba(223, 172, 84, 0.1);
            border: 1px solid rgba(223, 172, 84, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #DFAC54;
            flex-shrink: 0;
          }

          .boarding-card-title {
            font-family: 'Poppins', sans-serif;
            font-size: 1.15rem;
            font-weight: 600;
            color: #FFFFFF;
            margin: 0 0 6px;
          }

          .boarding-card-desc {
            color: #94A3B8;
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 0;
          }

          .boarding-card-badge {
            padding: 6px 14px;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #CBD5E1;
            font-size: 0.75rem;
            font-weight: 600;
            white-space: nowrap;
            flex-shrink: 0;
          }

          /* =========================================================
             --- TABLET & MOBILE: COMPACT HORIZONTAL PILL DOCK ---
             ========================================================= */
          @media (max-width: 1024px) {
            .boarding-section {
              padding: 50px 4%;
            }

            .boarding-grid {
              grid-template-columns: minmax(0, 1fr);
              gap: 24px;
            }

            /* Convert side panel to ultra-sleek transparent dock */
            .boarding-nav-panel {
              background: transparent;
              border: none;
              padding: 0;
            }

            .boarding-nav-label,
            .boarding-panel-summary {
              display: none; /* Hide bulky text on mobile to save vertical space */
            }

            /* Horizontal scrolling dock with zero scrollbars */
            .boarding-tab-list {
              flex-direction: row;
              overflow-x: auto;
              gap: 10px;
              padding-bottom: 6px;
              margin-bottom: 0;
              scrollbar-width: none;
              -webkit-overflow-scrolling: touch;
            }

            .boarding-tab-list::-webkit-scrollbar {
              display: none;
            }

            .boarding-tab-btn {
              width: auto;
              flex: 0 0 auto;
              padding: 10px 18px 10px 10px;
              border-radius: 50px; /* Fully circular/pill ends */
              background: #0D1628;
              border: 1px solid rgba(255, 255, 255, 0.1);
              font-size: 0.9rem;
            }

            .tab-icon-circle {
              width: 32px;
              height: 32px;
            }

            .tab-active-bg {
              border-radius: 50px;
            }

            .boarding-cards-container {
              min-height: auto;
            }
          }

          /* --- MOBILE PHONES (< 640px) --- */
          @media (max-width: 640px) {
            .boarding-section {
              padding: 40px 16px;
            }

            .boarding-header {
              margin-bottom: 24px;
            }

            .boarding-tab-btn {
              padding: 8px 16px 8px 8px;
              font-size: 0.85rem;
            }

            .tab-icon-circle {
              width: 28px;
              height: 28px;
            }

            .boarding-card {
              flex-direction: column;
              align-items: flex-start;
              padding: 20px;
              gap: 14px;
              border-radius: 16px;
            }

            .boarding-card:hover {
              transform: translateY(-3px);
            }

            .boarding-card-left {
              gap: 14px;
              width: 100%;
            }

            .boarding-icon-box {
              width: 44px;
              height: 44px;
              border-radius: 12px;
            }

            .boarding-card-title {
              font-size: 1.05rem;
            }

            .boarding-card-desc {
              font-size: 0.85rem;
            }

            .boarding-card-badge {
              align-self: flex-start;
              margin-left: 58px;
              margin-top: -4px;
              font-size: 0.7rem;
              padding: 4px 12px;
            }
          }
        `}
      </style>

      <section className="boarding-section">
        <div className="boarding-container">
          {/* --- PRESERVED YOUR EXACT HEADER CONTENT --- */}
          <div className="boarding-header">
            <div className="boarding-badge">
              <Sparkles size={14} /> Quick Highlights
            </div>
            <h2 className="boarding-title">
              Everything Students Need to Feel at Home
            </h2>
            <p className="boarding-subtitle">
              From comfortable living spaces and healthy meals to study, sports,
              and everyday student life, we aim to create an environment where
              students feel supported and at home.
            </p>
          </div>

          {/* --- INTERACTIVE GRID --- */}
          <div className="boarding-grid">
            {/* LEFT COLUMN: ANIMATED CIRCULAR DOCK */}
            <div className="boarding-nav-panel">
              <span className="boarding-nav-label">Select Category</span>

              <div className="boarding-tab-list">
                {facilityGroups.map((group, index) => {
                  const isActive = activeTab === index;
                  const TabIcon = group.tabIcon;

                  return (
                    <button
                      key={group.id}
                      onClick={() => setActiveTab(index)}
                      className={`boarding-tab-btn ${isActive ? "active" : ""}`}
                    >
                      {/* Active Tab Highlight Background (No Animation) */}
                      {isActive && <div className="tab-active-bg" />}

                      {/* Circular Icon Badge */}
                      <div className="tab-icon-circle">
                        <TabIcon size={18} />
                      </div>

                      <span className="tab-text">{group.category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Summary (Hidden on Mobile for Compactness) */}
              <div className="boarding-panel-summary">
                <h4 className="boarding-summary-title">
                  {currentGroup.tagline}
                </h4>
                <p className="boarding-summary-desc">
                  {currentGroup.description}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: FILTERED CARDS */}
            <div className="boarding-cards-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "100%",
                }}
              >
                {currentGroup.items.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="boarding-card">
                      <div className="boarding-card-left">
                        <div className="boarding-icon-box">
                          <IconComponent size={24} strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className="boarding-card-title">{item.title}</h4>
                          <p className="boarding-card-desc">{item.desc}</p>
                        </div>
                      </div>

                      <div className="boarding-card-badge">{item.stat}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
