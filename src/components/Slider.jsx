import React, { useState, useEffect, useRef } from "react";
import slider1 from "../assets/slider1.jpeg";
import slider2 from "../assets/slider2.PNG";
import slider3 from "../assets/slider3.jpeg";
import slider4 from "../assets/slider4.jpeg";
import slider5 from "../assets/slider5.jpeg";
export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // High-resolution horizontal boarding house photography
  const slides = [
    {
      id: 1,
      src: slider1,
      alt: "Heritage Campus Architecture",
    },
    {
      id: 2,
      src: slider2,
      alt: "Students Collaborating in Study Hall",
    },
    {
      id: 3,
      src: slider3,
      alt: "Modern & Ventilated Living Rooms",
    },
    {
      id: 4,
      src: slider4,
      alt: "Hygienic Campus Dining Facility",
    },
    {
      id: 5,
      src: slider5,
      alt: "Evening Recreation and Fitness Area",
    },
  ];

  // Bulletproof index calculation using modulo arithmetic
  const nextSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index, e) => {
    if (e) e.stopPropagation();
    setCurrent(index);
  };

  // Auto-play advances every 5 seconds. Resets cleanly whenever 'current' changes.
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, current, slides.length]);

  // Touch Swipe Handlers for Viewport
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
      if (diff > 0) {
        nextSlide(); // Swiped left
      } else {
        prevSlide(); // Swiped right
      }
    }
    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Playfair+Display:ital,wght@1,600&display=swap');

          .slider-section {
            background-color: #F9F9F9;
            padding: 60px 5% 90px;
            font-family: 'Inter', sans-serif;
            color: #0A1425;
            user-select: none;
            -webkit-user-select: none;
          }

          .slider-container {
            max-width: 1180px;
            margin: 0 auto;
          }

          /* Header */
          .slider-header {
            text-align: center;
            margin-bottom: 36px;
          }

          .slider-badge {
            display: inline-block;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            color: #C5A059;
            margin-bottom: 10px;
          }

          .slider-title {
            font-size: clamp(2.2rem, 4.5vw, 3.4rem);
            font-weight: 800;
            margin: 0;
            letter-spacing: -1px;
            line-height: 1.15;
          }

          .serif-italic {
            font-family: 'Playfair Display', serif;
            font-style: italic;
            font-weight: 600;
            color: #C5A059;
          }

          /* Widescreen Image Viewport */
          .slider-viewport {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            max-height: 620px;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(10, 20, 37, 0.25);
            background-color: #0A1425;
          }

          .slider-track {
            display: flex;
            height: 100%;
            width: 100%;
            transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1);
            will-change: transform;
          }

          .slide-item {
            min-width: 100%;
            height: 100%;
          }

          .slide-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
            pointer-events: none;
          }

          /* Subtle Edge Shadow for Arrow Visibility */
          .viewport-shadow {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(10,20,37,0.45) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(10,20,37,0.45) 100%);
            pointer-events: none;
          }

          /* Glass Counter Badge */
          .slide-counter {
            position: absolute;
            top: 22px;
            right: 22px;
            background: rgba(10, 20, 37, 0.8);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #FFFFFF;
            padding: 7px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 2px;
            z-index: 10;
            pointer-events: none;
          }

          .counter-gold {
            color: #C5A059;
          }

          /* Navigation Arrows */
          .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: rgba(10, 20, 37, 0.75);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s ease;
            z-index: 30;
            outline: none;
            padding: 0;
          }

          .nav-arrow:hover {
            background: #C5A059;
            color: #0A1425;
            border-color: #C5A059;
            transform: translateY(-50%) scale(1.08);
            box-shadow: 0 10px 20px rgba(10, 20, 37, 0.35);
          }

          .nav-arrow:active {
            transform: translateY(-50%) scale(0.96);
          }

          .arrow-prev { left: 22px; }
          .arrow-next { right: 22px; }

          /* Dash Indicators */
          .slider-indicators {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 26px;
          }

          .dot-btn {
            height: 4px;
            width: 20px;
            border-radius: 4px;
            background-color: #D1D5DB;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          }

          .dot-btn:hover {
            background-color: #9CA3AF;
          }

          .dot-btn.active {
            width: 44px;
            background: linear-gradient(135deg, #C5A059 0%, #E8C881 50%, #C5A059 100%);
          }

          /* Mobile Responsive - Retains Widescreen 16:10 Horizontal Photography */
          @media (max-width: 768px) {
            .slider-section {
              padding: 40px 16px 70px;
            }
            .slider-viewport {
              aspect-ratio: 16 / 10;
              border-radius: 16px;
            }
            .nav-arrow {
              width: 44px;
              height: 44px;
              background: rgba(10, 20, 37, 0.85);
              border-color: rgba(255, 255, 255, 0.4);
            }
            .arrow-prev { left: 12px; }
            .arrow-next { right: 12px; }
            .slide-counter {
              top: 14px;
              right: 14px;
              padding: 5px 12px;
              font-size: 0.75rem;
            }
            .slider-indicators {
              margin-top: 20px;
            }
          }
        `}
      </style>

      <section className="slider-section">
        <div className="slider-container">
          {/* Section Header */}
          <div className="slider-header">
            <span className="slider-badge">Life At A Glance</span>
            <h2 className="slider-title">
              Glimpses of <span className="serif-italic"> Our Boarding</span>
            </h2>
          </div>

          {/* Main Image Viewport */}
          <div
            className="slider-viewport"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="viewport-shadow" />

            {/* Slide Counter Badge */}
            <div className="slide-counter">
              <span className="counter-gold">0{current + 1}</span> / 0
              {slides.length}
            </div>

            {/* Sliding Track */}
            <div
              className="slider-track"
              style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="slide-item">
                  <img src={slide.src} alt={slide.alt} className="slide-img" />
                </div>
              ))}
            </div>

            {/* Left / Backward Arrow - Protected from touch collision */}
            <button
              type="button"
              className="nav-arrow arrow-prev"
              onClick={prevSlide}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              aria-label="Previous slide"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right / Forward Arrow - Protected from touch collision */}
            <button
              type="button"
              className="nav-arrow arrow-next"
              onClick={nextSlide}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              aria-label="Next slide"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dash Indicators */}
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
      </section>
    </>
  );
}
