import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import panipuri from "../assets/panipuri.png";
import punjabi from "../assets/punjabi.png";
import pauragdo from "../assets/pauragdo.png";
import pavbhaji from "../assets/paubhaji.png";
import bhel from "../assets/bhel.png";
import undhiyu from "../assets/undhiyu.png";
import {
  ChefHat,
  UtensilsCrossed,
  Flame,
  Video,
  Award,
  HeartHandshake,
  CheckCircle2,
  Salad,
  Apple,
  Soup,
  Coffee,
  Utensils,
  BookOpen,
} from "lucide-react";
import k1 from "../assets/k1.jpeg";
import k2 from "../assets/k2.jpeg";
import k3 from "../assets/k3.jpeg";
import k4 from "../assets/k4.jpeg";

export default function KitchenSection() {
  // --- STATE ---
  const [activeFoodId, setActiveFoodId] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Swipe refs for Slider
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Pause-after-manual-interaction refs: when user manually picks a slide/dish,
  // auto-play is paused for 10s, then resumes automatically from that point.
  const sliderPausedUntil = useRef(0);
  const foodWheelPausedUntil = useRef(0);
  const MANUAL_PAUSE_MS = 10000;

  // Preload food images to prevent initial load glitching
  useEffect(() => {
    const foodImages = [panipuri, punjabi, pauragdo, pavbhaji, bhel, undhiyu];
    foodImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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

  // --- BRAND COLOR PALETTE ---
  const colors = {
    pearl: "#FCFAF5",
    gold: "#CE9438",
    goldLight: "#E8C881",
    goldGradient:
      "linear-gradient(135deg, #CE9438 0%, #E8C881 50%, #CE9438 100%)",
    navy: "#1B2A4A",
    navyDark: "#0A1425",
    white: "#FFFFFF",
    cardBg: "#FFFFFF",
    textGray: "#5C667B",
    borderLight: "rgba(206, 148, 56, 0.25)",
  };

  // --- 1. CLEAN MULTI-IMAGE SLIDER DATA ---
  const slides = [
    {
      id: 1,
      src: k1,
      alt: "120+ Students Dining in Brotherhood",
    },
    {
      id: 2,
      src: k4,
      alt: "24/7 CCTV & Spotless Sanitation",
    },
    {
      id: 3,
      src: k3,
      alt: "Maternal Care by Expert Female Cooks",
    },
    {
      id: 4,
      src: k2,
      alt: "Automated Dishwashing & Sterilization",
    },
  ];

  // --- SLIDER LOGIC ---
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index, e) => {
    if (e) e.stopPropagation();
    sliderPausedUntil.current = Date.now() + MANUAL_PAUSE_MS;
    setCurrent(index);
  };

  // TOP SLIDER AUTO-PLAY (Every 5 seconds) - skips advancing while paused
  // for 10s after a manual dot click / swipe, then resumes automatically.
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() < sliderPausedUntil.current) return;
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      sliderPausedUntil.current = Date.now() + MANUAL_PAUSE_MS;
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // --- 2. 2x2 PREMIUM PILLARS DATA ---
  const trustItems = [
    {
      id: 1,
      title: "Expert Female Cooks",
      text: "Our kitchen is run by a dedicated team of female staff, ensuring every meal is cooked with a mother's authentic warmth and care.",
      icon: HeartHandshake,
    },
    {
      id: 2,
      title: "Premium Ingredients",
      text: "From pure fresh paneer to organic farm-fresh vegetables and top-tier spices, we use only the absolute highest quality ingredients.",
      icon: Salad,
    },
    {
      id: 3,
      title: "Pure Desi Cow Ghee",
      text: "We never compromise on health. Our traditional sweets and daily meals are deeply enriched with authentic pure desi ghee.",
      icon: Award,
    },
    {
      id: 4,
      title: "24/7 CCTV Hygiene",
      text: "Continuous camera surveillance across our stainless steel kitchen guarantees zero-tolerance cleanliness and pure sanitation.",
      icon: Video,
    },
  ];

  // --- 3. CIRCULAR FOOD WHEEL DATA ---
  const foodItems = [
    {
      id: 1,
      title: "Pani Puri",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "Crispy pani puri filled with spicy, tangy and sweet flavored water for a refreshing and exciting Wednesday treat.",
      highlights: ["Freshly Prepared", "Crispy & Tangy", "Popular Snack"],
      image: panipuri,
    },
    {
      id: 2,
      title: "Punjabi Paneer Sabji",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "Soft paneer cubes cooked in rich Punjabi-style gravy with aromatic spices, served fresh with hot rotis.",
      highlights: ["Rich Punjabi Flavor", "Fresh Paneer", "Served Hot"],
      image: punjabi,
    },
    {
      id: 3,
      title: "Paua Ragda",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "A flavorful Gujarati favorite made with soft poha, spicy ragda, fresh onions and delicious chutneys.",
      highlights: [
        "Authentic Gujarati Taste",
        "Fresh Ingredients",
        "Light & Delicious",
      ],
      image: pauragdo,
    },
    {
      id: 4,
      title: "Pav Bhaji",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "Delicious buttery pav served with spicy vegetable bhaji, garnished with onions, coriander and lemon.",
      highlights: ["Buttery Pav", "Rich Bhaji", "Student Favorite"],
      image: pavbhaji,
    },
    {
      id: 5,
      title: "Bhel",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "Crunchy bhel prepared with puffed rice, fresh vegetables, tangy chutneys and traditional Indian spices.",
      highlights: ["Crunchy & Fresh", "Tangy Flavors", "Healthy Snack"],
      image: bhel,
    },
    {
      id: 6,
      title: "Undhiyu",
      category: "Wednesday Grand Treat",
      tagline: "One Special Item Every Wednesday",
      description:
        "Traditional Gujarati Undhiyu prepared with seasonal vegetables and authentic spices for a wholesome feast.",
      highlights: [
        "Traditional Recipe",
        "Seasonal Vegetables",
        "Authentic Gujarati Dish",
      ],
      image: undhiyu,
    },
  ];

  // FOOD WHEEL AUTO PLAY (Every 5 Seconds) - skips advancing while paused
  // for 10s after a manual dish/dot click, then resumes automatically.
  useEffect(() => {
    const foodTimer = setInterval(() => {
      if (Date.now() < foodWheelPausedUntil.current) return;
      setActiveFoodId((prev) => (prev + 1) % foodItems.length);
    }, 5000);
    return () => clearInterval(foodTimer);
  }, [foodItems.length]);

  // Wrap manual selection so every click (orbit icon or progress dot) pauses auto-play.
  const selectFoodManually = (index) => {
    foodWheelPausedUntil.current = Date.now() + MANUAL_PAUSE_MS;
    setActiveFoodId(index);
  };

  const getOrbitPosition = (index, total) => {
    const radius = isMobile ? 135 : 215;
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return {
      position: "absolute",
      top: `calc(50% + ${y}px)`,
      left: `calc(50% + ${x}px)`,
      transform: "translate(-50%, -50%)",
    };
  };

  const floatingIcons = [
    { Icon: Salad, size: 45, top: "8%", left: "5%", delay: 0, duration: 8 },
    {
      Icon: Apple,
      size: 38,
      top: "15%",
      right: "8%",
      delay: 1.5,
      duration: 10,
    },
    { Icon: Soup, size: 50, top: "45%", left: "2%", delay: 0.8, duration: 9 },
    {
      Icon: UtensilsCrossed,
      size: 40,
      top: "50%",
      right: "4%",
      delay: 2.2,
      duration: 11,
    },
    { Icon: Coffee, size: 35, top: "78%", left: "7%", delay: 1.0, duration: 7 },
    {
      Icon: Utensils,
      size: 42,
      top: "85%",
      right: "10%",
      delay: 0.5,
      duration: 12,
    },
  ];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
          
          /* CHEF HAT AROMA */
          @keyframes aromaRise {
            0% { transform: translateY(0) scale(0.8); opacity: 0; }
            50% { opacity: 0.8; }
            100% { transform: translateY(-30px) scale(1.4); opacity: 0; }
          }
          .aroma-1 { animation: aromaRise 2.8s infinite ease-out; }
          .aroma-2 { animation: aromaRise 2.8s infinite ease-out 0.9s; }
          .aroma-3 { animation: aromaRise 2.8s infinite ease-out 1.8s; }

          /* ORBIT RING */
          @keyframes slowRotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .gold-dashed-ring {
            animation: slowRotate 45s linear infinite;
          }

          /* --- RESPONSIVE MOBILE SLIDER FIXES --- */
          .slider-viewport {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            max-height: 620px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(10, 20, 37, 0.25);
            background-color: #0A1425;
            border: 2px solid #CE9438;
            touch-action: pan-y;
          }
          
          .slider-track {
            display: flex;
            height: 100%;
            width: 100%;
            transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
            will-change: transform;
          }
          
          .slide-item {
            min-width: 100%;
            width: 100%; 
            height: 100%;
            flex-shrink: 0; 
            position: relative; 
            display: block;
          }
          
          .slide-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
            pointer-events: none;
          }
          
          .slider-indicators {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 26px;
          }
          
          .dot-btn {
            height: 6px;
            width: 24px;
            border-radius: 4px;
            background-color: #D1D5DB;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          }
          
          .dot-btn:hover { background-color: #9CA3AF; }
          .dot-btn.active {
            width: 48px;
            background: linear-gradient(135deg, #CE9438 0%, #E8C881 50%, #CE9438 100%);
          }
          
          @media (max-width: 768px) {
            .slider-viewport {
              aspect-ratio: 4 / 3; 
              border-radius: 16px;
            }
          }

          /* --- UPGRADED 2x2 TRUST CARDS CSS --- */
          .trust-card {
            background-color: ${colors.cardBg};
            border-radius: 24px;
            padding: 45px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            border: 1px solid ${colors.borderLight};
            box-shadow: 0 10px 30px rgba(27, 42, 74, 0.05);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            cursor: default;
          }
          .trust-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(206, 148, 56, 0.15);
            border-color: ${colors.gold};
          }
          .trust-icon-wrapper {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            background-color: ${colors.pearl};
            border: 2px solid ${colors.gold};
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.navy};
            margin-bottom: 20px;
            transition: all 0.4s ease;
            z-index: 2;
          }
          .trust-card:hover .trust-icon-wrapper {
            background-color: ${colors.navy};
            color: #FFFFFF;
            transform: scale(1.1);
          }
          .trust-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: ${colors.navy};
            margin-bottom: 12px;
            z-index: 2;
          }
          .trust-desc {
            font-size: 1rem;
            color: ${colors.textGray};
            line-height: 1.6;
            margin: 0;
            z-index: 2;
          }
        `}
      </style>

      <section
        style={{
          backgroundColor: colors.pearl,
          color: colors.navy,
          padding: isMobile ? "4rem 1rem" : "6rem 3%",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Ambient Vegetables */}
        {floatingIcons.map(
          ({ Icon, size, top, left, right, delay, duration }, idx) => (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                top,
                left,
                right,
                color: colors.gold,
                opacity: 0.08,
                pointerEvents: "none",
                zIndex: 1,
              }}
              animate={{ y: [0, -25, 0], rotate: [0, 15, -15, 0] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                delay,
                ease: "easeInOut",
              }}
            >
              <Icon size={size} />
            </motion.div>
          ),
        )}

        <div
          style={{
            maxWidth: "1350px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ================= SECTION 1: HEADER & CORE PHILOSOPHY ================= */}
          <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "1.2rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <span
                  className="aroma-1"
                  style={{
                    width: "6px",
                    height: "18px",
                    background: colors.goldGradient,
                    borderRadius: "10px",
                    filter: "blur(1px)",
                  }}
                />
                <span
                  className="aroma-2"
                  style={{
                    width: "8px",
                    height: "24px",
                    background: colors.goldGradient,
                    borderRadius: "10px",
                    filter: "blur(1px)",
                  }}
                />
                <span
                  className="aroma-3"
                  style={{
                    width: "6px",
                    height: "16px",
                    background: colors.goldGradient,
                    borderRadius: "10px",
                    filter: "blur(1px)",
                  }}
                />
              </div>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: colors.white,
                  border: `2px solid ${colors.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 25px rgba(206, 148, 56, 0.25)",
                  margin: "0 auto",
                }}
              >
                <ChefHat size={42} color={colors.gold} />
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.5rem 1.25rem",
                borderRadius: "50px",
                background: "rgba(206, 148, 56, 0.12)",
                border: `1px solid ${colors.gold}`,
                color: colors.gold,
                fontSize: "0.85rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              <UtensilsCrossed size={16} color={colors.gold} />
              <span>Shree Rajkot Lohana Boarding Kitchen</span>
              <Flame size={16} color={colors.gold} />
            </div>

            <h2
              style={{
                fontSize: isMobile ? "2.2rem" : "3.6rem",
                fontWeight: "800",
                lineHeight: 1.2,
                marginBottom: "1.2rem",
                color: colors.navyDark,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Simple Wholesome Daily Meals, <br />
              <span
                style={{
                  background: colors.goldGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                & Grand Wednesday Feasts.
              </span>
            </h2>

            <p
              style={{
                color: colors.textGray,
                fontSize: isMobile ? "1rem" : "1.2rem",
                maxWidth: "820px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              On a daily basis, our dedicated female staff serves pure, simple,
              and non-greasy home food cooked with maternal care to keep
              students healthy and focused. But every Wednesday brings a special
              celebratory treat—featuring one rotating special delicacy that is
              universally loved and highly eaten by everyone on campus!
            </p>
          </div>

          {/* ================= SECTION 2: MOBILE-PROOF IMAGE SLIDER ================= */}
          <div
            style={{
              marginBottom: "6.5rem",
              maxWidth: "1180px",
              margin: "0 auto 6.5rem auto",
              width: "100%",
            }}
          >
            {/* Removed ALL mouse enter/leave pausing logic to keep it running permanently */}
            <div
              className="slider-viewport"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="slider-track"
                style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="slide-item">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="slide-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dot-btn ${current === index ? "active" : ""}`}
                  onClick={(e) => goToSlide(index, e)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ================= SECTION 3: 2x2 PREMIUM TRUST CARDS ================= */}
          <div
            style={{
              marginBottom: "6.5rem",
              maxWidth: "1180px",
              margin: "0 auto 6.5rem auto",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h3
                style={{
                  fontSize: isMobile ? "1.8rem" : "2.5rem",
                  fontWeight: "800",
                  color: colors.navyDark,
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: "0.5rem",
                }}
              >
                Why Parents Trust Our Dining Hall
              </h3>
              <p style={{ color: colors.textGray, fontSize: "1.05rem" }}>
                We maintain uncompromising standards to ensure students stay
                healthy, energized, and focused.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: isMobile ? "24px" : "32px",
              }}
            >
              {trustItems.map((item) => (
                <div key={item.id} className="trust-card">
                  <div className="trust-icon-wrapper">
                    <item.icon size={30} strokeWidth={2} />
                  </div>
                  <h4 className="trust-title">{item.title}</h4>
                  <p className="trust-desc">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SECTION 4: BULLETPROOF CIRCULAR FOOD WHEEL ================= */}
          <div>
            {/* Removed all mouse enter/leave pausing logic to keep it running permanently */}
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  color: colors.gold,
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                Interactive Culinary Wheel
              </span>
              <h3
                style={{
                  fontSize: isMobile ? "2rem" : "2.8rem",
                  fontWeight: "800",
                  color: colors.navyDark,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Explore Our Daily & Wednesday Special Menu
              </h3>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
                gap: isMobile ? "2.5rem" : "4rem",
                alignItems: "center",
              }}
            >
              {/* LEFT/TOP: The Spinning Orbital Food Wheel */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: isMobile ? "380px" : "540px",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: isMobile ? "1.5rem" : "0",
                }}
              >
                {/* Spinning Gold Dashed Orbit Ring */}
                <div
                  className="gold-dashed-ring"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: isMobile ? "270px" : "430px",
                    height: isMobile ? "270px" : "430px",
                    borderRadius: "50%",
                    border: `1.5px dashed ${colors.gold}`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isMobile ? "190px" : "320px",
                    height: isMobile ? "190px" : "320px",
                    borderRadius: "50%",
                    padding: isMobile ? "6px" : "10px",
                    background: colors.goldGradient,
                    boxShadow: "0 15px 35px rgba(206, 148, 56, 0.4)",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: colors.navyDark,
                    }}
                  >
                    {/* 100% NATIVE CSS FIX FOR IMAGES */}
                    {foodItems.map((item, idx) => (
                      <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          opacity: activeFoodId === idx ? 1 : 0,
                          transform: `scale(${activeFoodId === idx ? 1 : 0.85}) rotate(${activeFoodId === idx ? 0 : 15}deg)`,
                          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          zIndex: activeFoodId === idx ? 2 : 1,
                          pointerEvents: activeFoodId === idx ? "auto" : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "row" : "column",
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    justifyContent: "center",
                    gap: isMobile ? "0.8rem" : "0",
                    width: "100%",
                  }}
                >
                  {foodItems.map((item, index) => {
                    const isSelected = activeFoodId === index;
                    const orbitStyle = getOrbitPosition(
                      index,
                      foodItems.length,
                    );

                    return (
                      <button
                        key={item.id}
                        onClick={() => selectFoodManually(index)}
                        style={{
                          ...orbitStyle,
                          width: isMobile ? "56px" : "76px",
                          height: isMobile ? "56px" : "76px",
                          borderRadius: "50%",
                          padding: "3px",
                          background: isSelected
                            ? colors.goldGradient
                            : "rgba(206, 148, 56, 0.3)",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: isSelected
                            ? "0 8px 25px rgba(206, 148, 56, 0.6)"
                            : "0 4px 10px rgba(0, 0, 0, 0.1)",
                          transition: "all 0.3s ease",
                          zIndex: 15,
                        }}
                        aria-label={item.title}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              filter: isSelected
                                ? "brightness(1.1)"
                                : "brightness(0.7)",
                              transition: "filter 0.3s ease",
                            }}
                          />
                          {isSelected && (
                            <div
                              style={{
                                position: "absolute",
                                inset: 0,
                                backgroundColor: "rgba(206, 148, 56, 0.2)",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT/BOTTOM: TEXT BOX */}
              <div
                style={{
                  backgroundColor: colors.white,
                  border: `1.5px solid rgba(206, 148, 56, 0.3)`,
                  borderRadius: "28px",
                  padding: isMobile ? "1.75rem" : "2.5rem",
                  boxShadow: "0 20px 40px rgba(27, 42, 74, 0.08)",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: isMobile ? "350px" : "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* STACKED TEXT USING GRID: Forces parent to hold its exact correct height! */}
                <div
                  style={{ display: "grid", flexGrow: 1, alignItems: "start" }}
                >
                  {foodItems.map((item, idx) => (
                    <div
                      key={item.id}
                      style={{
                        gridArea: "1 / 1", // Mathematical stacking without breaking height
                        opacity: activeFoodId === idx ? 1 : 0,
                        transform: `translateY(${activeFoodId === idx ? 0 : 20}px)`,
                        transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                        pointerEvents: activeFoodId === idx ? "auto" : "none",
                        visibility: activeFoodId === idx ? "visible" : "hidden", // Completely disables inactive text catching clicks
                        display: "flex",
                        flexDirection: "column",
                        zIndex: activeFoodId === idx ? 2 : 1,
                      }}
                    >
                      <div>
                        {/* Top Category Tag */}
                        <div style={{ marginBottom: "0.8rem" }}>
                          <span
                            style={{
                              color: colors.gold,
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.15rem",
                              fontWeight: "700",
                            }}
                          >
                            {item.category}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontSize: isMobile ? "1.6rem" : "2.3rem",
                            fontWeight: "800",
                            marginBottom: "0.4rem",
                            color: colors.navyDark,
                          }}
                        >
                          {item.title}
                        </h3>

                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: colors.gold,
                            marginBottom: "1.4rem",
                          }}
                        >
                          {item.tagline}
                        </h4>

                        <p
                          style={{
                            color: colors.textGray,
                            lineHeight: 1.75,
                            fontSize: "1.05rem",
                            marginBottom: "2rem",
                          }}
                        >
                          {item.description}
                        </p>

                        {/* Simple Highlights Pills */}
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginBottom: "2rem",
                          }}
                        >
                          {item.highlights.map((point, i) => (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                background: "rgba(206, 148, 56, 0.1)",
                                border: `1px solid rgba(206, 148, 56, 0.3)`,
                                padding: "0.4rem 0.9rem",
                                borderRadius: "12px",
                                fontSize: "0.85rem",
                                color: colors.navyDark,
                                fontWeight: "600",
                              }}
                            >
                              <CheckCircle2 size={15} color={colors.gold} />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Wheel Progress Indicators */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 10,
                    marginTop: "1rem",
                  }}
                >
                  {foodItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectFoodManually(idx)}
                      style={{
                        height: "6px",
                        width: activeFoodId === idx ? "36px" : "12px",
                        borderRadius: "6px",
                        background:
                          activeFoodId === idx
                            ? colors.goldGradient
                            : "rgba(27, 42, 74, 0.15)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      aria-label={`Go to dish ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}