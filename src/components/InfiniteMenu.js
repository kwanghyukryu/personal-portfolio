import { useEffect, useRef, useState } from "react";
import "./InfiniteMenu.css";

const wrap = (value, total) => {
  if (total <= 0) return 0;
  return ((value % total) + total) % total;
};

const circularDelta = (from, to, total) => {
  if (total <= 0) return 0;
  let delta = to - from;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
};

export default function InfiniteMenu({ items = [] }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const scrollPosRef = useRef(0);
  const targetScrollRef = useRef(0);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const itemCount = items.length;

  // Load all images once
  useEffect(() => {
    imagesRef.current = items.map((item) => {
      const img = new Image();
      img.decoding = "async";
      img.src = item.image;
      return img;
    });
  }, [items]);

  useEffect(() => {
    scrollPosRef.current = 0;
    targetScrollRef.current = 0;
    activeIndexRef.current = 0;
    setActiveIndex(0);
  }, [itemCount]);

  useEffect(() => {
    if (itemCount === 0) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frameId = null;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    };
    resize();
    window.addEventListener("resize", resize);

    let lastTime = performance.now();
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);

      const boxWidth = width * 0.85;
      const boxHeight = height * 0.8;
      const x = (width - boxWidth) / 2;
      const centerY = (height - boxHeight) / 2;
      const transitionDistance = boxHeight + 24;

      // Smooth interpolation with circular wrap support.
      const delta = circularDelta(scrollPosRef.current, targetScrollRef.current, itemCount);
      const lerp = 1 - Math.exp(-12 * dt);
      scrollPosRef.current += delta * lerp;

      const base = Math.floor(scrollPosRef.current);
      const index = wrap(base, itemCount);
      const nextIndex = wrap(base + 1, itemCount);
      const offset = scrollPosRef.current - base;

      const currentImg = imagesRef.current[index];
      const nextImg = imagesRef.current[nextIndex];

      if (currentImg) {
        const y = centerY - offset * transitionDistance;
        ctx.globalAlpha = 1 - offset;
        ctx.drawImage(currentImg, x, y, boxWidth, boxHeight);
      }

      if (nextImg) {
        const y = centerY + (1 - offset) * transitionDistance;
        ctx.globalAlpha = offset;
        ctx.drawImage(nextImg, x, y, boxWidth, boxHeight);
      }

      ctx.globalAlpha = 1;

      const nearest = wrap(Math.round(scrollPosRef.current), itemCount);
      if (nearest !== activeIndexRef.current) {
        activeIndexRef.current = nearest;
        setActiveIndex(nearest);
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", resize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [itemCount]);

  // Handle scroll
  useEffect(() => {
    if (itemCount === 0) return undefined;
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout = null;

    const handleWheel = (e) => {
      if (!container.matches(":hover")) return;
      e.preventDefault();

      // Normalize wheel sensitivity and clamp huge trackpad spikes.
      const delta = Math.max(-0.85, Math.min(0.85, e.deltaY * 0.003));
      targetScrollRef.current = wrap(targetScrollRef.current + delta, itemCount);

      // Snap after user stops scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetScrollRef.current = wrap(Math.round(targetScrollRef.current), itemCount);
      }, 140);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [itemCount]);

  const handleClick = () => {
    const link = items[activeIndex]?.link;
    if (link) window.open(link, "_blank");
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-left" ref={containerRef}>
        <canvas ref={canvasRef} className="menu-canvas" />
        <div className="scroll-hint">
          <p>Scroll to see more ↓</p>
        </div>
      </div>

      <div className="menu-right">
        <h2 className="menu-title">{items[activeIndex]?.title}</h2>
        <p className="menu-description">{items[activeIndex]?.description}</p>
        <ul className="menu-details">
          {(items[activeIndex]?.detail || []).slice(0, 3).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <button className="menu-cta" onClick={handleClick}>
          View Project ↗
        </button>
      </div>
    </div>
  );
}
