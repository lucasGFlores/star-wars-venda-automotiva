import React, { ReactNode, useRef, useState } from "react";
import "../styles/SlydingContainer.css";
interface SlidingContainerProps {
    children: ReactNode;
}

const SlidingContainer = ({ children } : SlidingContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft ?? 0));
    setScrollLeft(containerRef.current?.scrollLeft ?? 0);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("handleMouseMove",e.pageX);
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2.5; // Ajuste a sensibilidade do deslizamento conforme necessário
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="containerSlyding"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ overflow: "hidden", display: "flex", alignItems: "flex-start" }}
    >
      {children}
    </div>
  );
};

export default SlidingContainer;

