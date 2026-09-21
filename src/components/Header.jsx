import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Coffee,
  Bed,
  BookOpen,
  ChevronRight,
  Trophy,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import your logo
import logo from "../assets/logo1.webp";

// --- BRAND COLOR PALETTE ---
const colors = {
  navy: "#1B2A4A",
  gold: "#CE9438",
  goldGradient:
    "linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%)",
  white: "#FFFFFF",
  grayLight: "rgba(255, 255, 255, 0.7)",
  darkGlass: "rgba(15, 25, 45, 0.95)",
};

// --- NAVIGATION DATA ---
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Facilities",
    subItems: [
      {
        name: "Spiritually",
        path: "/spirituality",
        icon: <Sparkles size={18} />,
      },
      {
        name: "Kitchen & Dining",
        path: "/kitchen",
        icon: <Coffee size={18} />,
      },
      {
        name: "Rooms & Accommodation",
        path: "/rooms",
        icon: <Bed size={18} />,
      },
      {
        name: "Library & Reading Room",
        path: "/library",
        icon: <BookOpen size={18} />,
      },
      {
        name: "Sports & Athletics",
        path: "/sports",
        icon: <Trophy size={18} />,
      },
    ],
  },
  { name: "Our Trustees", path: "/our-trustees" },
  { name: "Contact", path: "/contact" },
];

export default function PremiumHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hover & Dropdown States
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 992;
      setIsMobile(mobileView);
      if (!mobileView) setIsOpen(false);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus instantly on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDesktopMenu(null);
    setMobileDropdowns({});
    setHoveredItem(null);
  }, [location.pathname]);

  // Bug-Free Hover Handlers with Buffer
  const handleMouseEnter = (name, hasSubItems) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setHoveredItem(name);
    if (hasSubItems) setActiveDesktopMenu(name);
  };

  const handleMouseLeave = (hasSubItems) => {
    setHoveredItem(null);
    if (hasSubItems) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDesktopMenu(null);
      }, 150); // 150ms buffer prevents flickering and freeze lockups
    }
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const styles = {
    wrapper: {
      position: "sticky",
      top: isMobile ? "0.75rem" : "1rem", // Restored floating top gap!
      left: 0,
      right: 0,
      // BUG FIX 1: Max Z-Index sits higher than any floating button or footer (999999)
      zIndex: 999999,
      // BUG FIX 2: Isolate stacking context so bottom page sections can never steal pointer events
      isolation: "isolate",
      padding: isMobile ? "0" : "0 2%", // Restored floating pill layout!
      backgroundColor: "transparent",
      // BUG FIX 3: Dedicated hardware GPU acceleration layer
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
      pointerEvents: "auto",
    },
    headerContainer: {
      position: "relative",
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
      backgroundColor: colors.navy,
      borderRadius: "100px", // RESTORED YOUR EXACT ROUNDED PILL SHAPE!
      padding: isMobile ? "0.6rem 1.25rem" : "0.75rem 2rem",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 8px 30px rgba(27, 42, 74, 0.25)",
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
    logoImage: {
      height: isMobile ? "50px" : "60px",
      width: "auto",
      objectFit: "contain",
    },
    ctaButton: {
      background: colors.goldGradient,
      color: colors.navy,
      fontWeight: "700",
      fontSize: "0.9rem",
      padding: "0.75rem 1.75rem",
      borderRadius: "50px",
      border: "1px solid rgba(255, 255, 255, 0.25)",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(197, 160, 89, 0.4)",
      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    menuButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: colors.white,
      display: "flex",
      alignItems: "center",
      padding: "0.5rem",
    },
    // Mobile Styles
    mobileMenu: {
      position: "absolute",
      top: "calc(100% + 12px)",
      left: 0,
      width: "100%",
      backgroundColor: colors.darkGlass,
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
      borderRadius: "24px",
      overflow: "hidden",
      zIndex: 999,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    },
    mobileScroll: {
      position: "relative",
      zIndex: 2, // Sits above the logo watermark
      maxHeight: "calc(100vh - 120px)",
      overflowY: "auto",
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    mobileLink: (isActive) => ({
      textDecoration: "none",
      color: isActive ? colors.gold : colors.white,
      fontWeight: "600",
      fontSize: "1.05rem",
      padding: "1rem 1.25rem",
      borderRadius: "14px",
      backgroundColor: isActive ? "rgba(206, 148, 56, 0.1)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: isActive
        ? `1px solid rgba(206, 148, 56, 0.2)`
        : "1px solid transparent",
      transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
    }),
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          
          .hover-cta:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 8px 25px rgba(197, 160, 89, 0.6) !important; 
          }
          
          .dropdown-item-hover:hover { 
            background-color: rgba(206, 148, 56, 0.15) !important; 
            color: #CE9438 !important; 
          }
          
          .dropdown-item-hover:hover .icon-wrapper { 
            color: #CE9438 !important; 
            transform: scale(1.15); 
          }
          
          .dropdown-item-hover, .dropdown-item-hover .icon-wrapper { 
            transition: all 0.12s cubic-bezier(0.16, 1, 0.3, 1) !important; 
          }

          /* BUG-FREE CSS DROPDOWN ANIMATION (No JS Runtime Deadlocks) */
          @keyframes pillDropdownSlide {
            from {
              opacity: 0;
              transform: translateY(8px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .bugfree-dropdown-box {
            position: absolute;
            top: 100%;
            left: -10px;
            padding-top: 24px; /* Invisible hover bridge */
            z-index: 1001;
            pointer-events: auto;
            animation: pillDropdownSlide 0.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <div style={styles.wrapper}>
        <header style={styles.headerContainer}>
          <Link to="/">
            <img src={logo} alt="Lohana Boarding" style={styles.logoImage} />
          </Link>

          {/* DESKTOP NAVIGATION */}
          {!isMobile ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                height: "100%",
              }}
            >
              <nav
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {navItems.map((item) => {
                  const isRouteActive =
                    location.pathname === item.path ||
                    (item.subItems &&
                      item.subItems.some(
                        (sub) => location.pathname === sub.path,
                      ));

                  const isDropdownOpen = activeDesktopMenu === item.name;
                  const isHovered = hoveredItem === item.name;
                  const showHoverState = isHovered || isDropdownOpen;

                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() =>
                        handleMouseEnter(item.name, !!item.subItems)
                      }
                      onMouseLeave={() => handleMouseLeave(!!item.subItems)}
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      {/* Desktop Link / Button */}
                      {item.subItems ? (
                        <button
                          aria-expanded={isDropdownOpen}
                          aria-haspopup="true"
                          style={{
                            padding: "0.6rem 1.25rem",
                            color:
                              isRouteActive || showHoverState
                                ? colors.white
                                : colors.grayLight,
                            fontWeight: "600",
                            fontSize: "0.95rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "color 0.15s ease",
                            pointerEvents: "auto",
                          }}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            style={{
                              transform: isDropdownOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition:
                                "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
                              color:
                                isRouteActive || showHoverState
                                  ? colors.gold
                                  : "inherit",
                            }}
                          />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          style={{
                            padding: "0.6rem 1.25rem",
                            textDecoration: "none",
                            color:
                              isRouteActive || showHoverState
                                ? colors.white
                                : colors.grayLight,
                            fontWeight: "600",
                            fontSize: "0.95rem",
                            transition: "color 0.15s ease",
                            pointerEvents: "auto",
                          }}
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Animated Underline */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-2px",
                          left: "15%",
                          right: "15%",
                          height: "2px",
                          backgroundColor: isRouteActive
                            ? colors.white
                            : colors.gold,
                          borderRadius: "2px",
                          opacity: isRouteActive || showHoverState ? 1 : 0,
                          transform:
                            isRouteActive || showHoverState
                              ? "scaleX(1)"
                              : "scaleX(0)",
                          transformOrigin: "center",
                          transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Pure CSS Dropdown Menu (No JS Runtime Freezes!) */}
                      {item.subItems && isDropdownOpen && (
                        <div className="bugfree-dropdown-box">
                          <div
                            style={{
                              minWidth: "260px",
                              backgroundColor: colors.darkGlass,
                              borderRadius: "20px",
                              padding: "0.75rem",
                              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              backdropFilter: "blur(16px)",
                              WebkitBackdropFilter: "blur(16px)",
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                            }}
                          >
                            {item.subItems.map((subItem) => {
                              const isSubActive =
                                location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="dropdown-item-hover"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "0.85rem 1rem",
                                    color: isSubActive
                                      ? colors.gold
                                      : "#E2E8F0",
                                    textDecoration: "none",
                                    fontSize: "0.95rem",
                                    fontWeight: "600",
                                    borderRadius: "14px",
                                    backgroundColor: isSubActive
                                      ? "rgba(206, 148, 56, 0.1)"
                                      : "transparent",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "12px",
                                    }}
                                  >
                                    <span
                                      className="icon-wrapper"
                                      style={{
                                        color: isSubActive
                                          ? colors.gold
                                          : colors.grayLight,
                                      }}
                                    >
                                      {subItem.icon}
                                    </span>
                                    {subItem.name}
                                  </div>
                                  {isSubActive && (
                                    <ChevronRight
                                      size={16}
                                      color={colors.gold}
                                    />
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <button className="hover-cta" style={styles.ctaButton}>
                  Gallery
                </button>
              </Link>
            </div>
          ) : (
            /* MOBILE TOGGLE */
            <button
              style={styles.menuButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X size={28} color={colors.gold} />
              ) : (
                <Menu size={28} color={colors.gold} />
              )}
            </button>
          )}

          {/* MOBILE NAVIGATION MENU */}
          <AnimatePresence>
            {isMobile && isOpen && (
              <motion.nav
                key="mobile-main-navigation"
                initial={{ opacity: 0, y: -15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                style={styles.mobileMenu}
              >
                {/* Center Background Watermark Logo */}
                <img
                  src={logo}
                  alt=""
                  style={{
                    position: "absolute",
                    width: "280px",
                    height: "auto",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0.09,
                    pointerEvents: "none",
                    filter: "grayscale(100%)",
                    zIndex: 0,
                  }}
                />

                <div style={styles.mobileScroll}>
                  {navItems.map((item) => {
                    const isRouteActive =
                      location.pathname === item.path ||
                      (item.subItems &&
                        item.subItems.some(
                          (s) => location.pathname === s.path,
                        ));
                    const isDropdownOpen = mobileDropdowns[item.name];

                    return (
                      <div key={item.name}>
                        {item.subItems ? (
                          <div
                            onClick={() => toggleMobileDropdown(item.name)}
                            style={{
                              ...styles.mobileLink(
                                isRouteActive || isDropdownOpen,
                              ),
                              cursor: "pointer",
                            }}
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={20}
                              style={{
                                transform: isDropdownOpen
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition:
                                  "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                            />
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            style={styles.mobileLink(isRouteActive)}
                          >
                            {item.name}
                          </Link>
                        )}

                        {/* Mobile Sub-items Accordion */}
                        <AnimatePresence>
                          {item.subItems && isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.2,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingLeft: "1rem",
                                marginTop: "0.5rem",
                                gap: "0.5rem",
                                overflow: "hidden",
                              }}
                            >
                              {item.subItems.map((sub) => {
                                const isSubActive =
                                  location.pathname === sub.path;
                                return (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                      ...styles.mobileLink(isSubActive),
                                      padding: "0.8rem 1rem",
                                      fontSize: "0.95rem",
                                      backgroundColor: isSubActive
                                        ? "rgba(206, 148, 56, 0.1)"
                                        : "transparent",
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: isSubActive
                                            ? colors.gold
                                            : colors.grayLight,
                                        }}
                                      >
                                        {sub.icon}
                                      </span>
                                      <span>{sub.name}</span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      margin: "1rem 0",
                    }}
                  />
                  <Link to="/gallery" style={{ textDecoration: "none" }}>
                    <button
                      className="hover-cta"
                      style={{
                        ...styles.ctaButton,
                        width: "100%",
                        padding: "1rem",
                      }}
                    >
                      Gallery
                    </button>
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>
      </div>
    </>
  );
}
