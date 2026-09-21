import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, Maximize2, Sparkles } from "lucide-react";

// --- PHOTO IMPORTS ---
import g0 from "../assets/g0.jpeg";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.PNG";
import g007 from "../assets/g007.PNG";
import g4 from "../assets/g4.PNG";
import g5 from "../assets/g5.jpeg";

import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";
import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";

import g12 from "../assets/g12.png";
import g13 from "../assets/g13.jpeg";
import g14 from "../assets/g14.jpeg";
import g15 from "../assets/g15.jpeg";
import g16 from "../assets/g16.jpeg";
import g17 from "../assets/g17.jpeg";
import g18 from "../assets/g18.jpeg";
import g19 from "../assets/g19.jpeg";
import g20 from "../assets/g20.jpeg";
import g001 from "../assets/g001.png";
import g002 from "../assets/g002.jpeg";
import g003 from "../assets/g003.jpeg";

const photos = [
  { id: 1, src: g0, alt: "Shree Rajkot Lohana Boarding House - Campus View" },
  { id: 2, src: g001, alt: "RLBH festive celebration" },
  { id: 3, src: g002, alt: "Rajkot Lohana Boarding facility" },
  { id: 4, src: g007, alt: "Shree Rajkot Lohana Boarding House - rlbh.in" },
  { id: 5, src: g1, alt: "Community gathering at Rajkot Lohana Boarding" },
  { id: 6, src: g2, alt: "RLBH student life" },
  { id: 7, src: g007, alt: "Shree Rajkot Lohana Boarding House campus" },
  { id: 8, src: g4, alt: "RLBH prayer room activity" },
  { id: 9, src: g5, alt: "Rajkot Lohana Boarding social event" },

  { id: 11, src: g7, alt: "RLBH sports and athletics" },
  { id: 12, src: g8, alt: "Rajkot Lohana Boarding study environment" },
  { id: 13, src: g9, alt: "RLBH campus heritage" },
  { id: 14, src: g10, alt: "Shree Rajkot Lohana Boarding House facilities" },

  { id: 16, src: g20, alt: "Rajkot Lohana Boarding daily routine" },
  { id: 17, src: g13, alt: "Shree Rajkot Lohana Boarding House event" },
  { id: 18, src: g14, alt: "RLBH student community" },
  { id: 19, src: g15, alt: "Rajkot Lohana Boarding infrastructure" },
  { id: 20, src: g16, alt: "RLBH festive moments" },
  { id: 21, src: g17, alt: "Shree Rajkot Lohana Boarding House assembly" },
  { id: 22, src: g18, alt: "RLBH.in campus grounds" },
  { id: 23, src: g19, alt: "Rajkot Lohana Boarding prayer session" },
  { id: 24, src: g12, alt: "Shree Rajkot Lohana Boarding House memories" },
];

// --- INDIVIDUAL IMAGE COMPONENT WITH SKELETON LOADER ---
const MasonryImage = ({ item, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`masonry-item ${!isLoaded ? "skeleton-active" : ""}`}
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.alt}
        className={`masonry-img ${isLoaded ? "loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <div className="hover-overlay">
          <Maximize2 size={24} color="#FFF" style={{ opacity: 0.8 }} />
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  const [lightboxData, setLightboxData] = useState(null);

  // INFINITE SCROLL STATE (Start with 4 images)
  const [itemsToShow, setItemsToShow] = useState(4);
  const observerRef = useRef(null);

  // --- PREMIUM COLOR PALETTE ---
  const colors = {
    navy: "#1B2A4A",
    gold: "#CE9438",
    pearl: "#FCFAF5",
    glassOverlay: "rgba(17, 24, 39, 0.95)",
  };

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxData]);

  // INFINITE SCROLL OBSERVER LOGIC
  const lastElementRef = useCallback(
    (node) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && itemsToShow < photos.length) {
          // Load 4 more images when user scrolls to the bottom
          setItemsToShow((prev) => Math.min(prev + 4, photos.length));
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [itemsToShow],
  );

  return (
    <section
      className="gallery-section"
      style={{ backgroundColor: colors.pearl }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

          .gallery-section {
            padding: 100px 5%;
            font-family: 'Plus Jakarta Sans', sans-serif;
            max-width: 1450px;
            margin: 0 auto;
          }

          /* Headers & Typography */
          .gallery-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            border: 1px solid rgba(206,148,56,0.4);
            border-radius: 50px;
            color: ${colors.gold};
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 24px;
          }
          
          .gallery-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            color: ${colors.navy};
            font-weight: 800;
            line-height: 1.1;
            margin: 0 0 50px 0;
          }
          .gallery-title span {
            font-style: italic;
            color: ${colors.gold};
          }

          /* Masonry Grid */
          .masonry-grid {
            column-count: 3;
            column-gap: 24px;
          }
          @media (max-width: 1024px) { .masonry-grid { column-count: 2; } }
          @media (max-width: 640px) { .masonry-grid { column-count: 1; } }

          .masonry-item {
            break-inside: avoid;
            margin-bottom: 24px;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transform: translateZ(0); 
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .masonry-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(27, 42, 74, 0.2);
          }

          /* --- SKELETON LOADING EFFECTS --- */
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          
          .skeleton-active {
            min-height: 250px; /* Gives structure before image renders */
            background: #e2e8f0;
            background-image: linear-gradient(90deg, #e2e8f0 0px, #f1f5f9 40px, #e2e8f0 80px);
            background-size: 1000px 100%;
            animation: shimmer 2s infinite linear;
          }

          .masonry-img {
            width: 100%;
            display: block;
            border-radius: 16px;
            opacity: 0;
            transition: opacity 0.5s ease, transform 0.6s ease;
          }
          
          .masonry-img.loaded {
            opacity: 1;
          }

          .masonry-item:hover .loaded {
            transform: scale(1.05);
          }

          /* Hover Overlay */
          .hover-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
            display: flex;
            align-items: flex-end;
            padding: 20px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .masonry-item:hover .hover-overlay {
            opacity: 1;
          }

          /* Fullscreen Lightbox */
          .lightbox {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background-color: ${colors.glassOverlay};
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            animation: fadeIn 0.3s ease;
          }
          .lightbox-close {
            position: absolute;
            top: 30px;
            right: 40px;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            color: #FFF;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 10000;
          }
          .lightbox-close:hover {
            background: ${colors.gold};
            transform: rotate(90deg);
          }
          .lightbox-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          }
          .lightbox-img {
            max-width: 100%;
            max-height: 90vh;
            object-fit: contain;
            border-radius: 12px;
            display: block;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          
          /* Loading trigger text at bottom */
          .loading-trigger {
             text-align: center;
             padding: 40px 0;
             color: ${colors.gold};
             font-weight: 600;
             letter-spacing: 1px;
          }
        `}
      </style>

      {/* --- HEADER (No tabs, just clean title) --- */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div className="gallery-badge">
          <Sparkles size={16} /> Heritage Gallery
        </div>
        <h2 className="gallery-title">
          Moments & <span>Memories</span>
        </h2>
      </div>

      {/* --- MASONRY GRID --- */}
      <div className="masonry-grid">
        {photos.slice(0, itemsToShow).map((item, index) => {
          // If it's the last item currently visible, attach the intersection observer ref
          const isLastItem = index === itemsToShow - 1;

          return (
            <div key={item.id} ref={isLastItem ? lastElementRef : null}>
              <MasonryImage
                item={item}
                onClick={(imgData) => setLightboxData(imgData)}
              />
            </div>
          );
        })}
      </div>

      {/* Loading Indicator at Bottom */}
      {itemsToShow < photos.length && (
        <div className="loading-trigger">Scroll to load more photos...</div>
      )}

      {/* --- FULLSCREEN LIGHTBOX --- */}
      {lightboxData && (
        <div className="lightbox" onClick={() => setLightboxData(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxData(null)}
          >
            <X size={24} />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxData.src}
              alt={lightboxData.alt}
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
