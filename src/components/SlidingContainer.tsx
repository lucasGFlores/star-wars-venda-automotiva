import React, { ReactNode, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/SlydingContainer.css";

interface SlidingContainerProps {
  children: ReactNode;
}

const SlidingContainer = ({ children }: SlidingContainerProps): ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const childrenWeith = (): {
    qntChildren: number;
    weithFromOneChild: number;
    weithFromAllChildren: number;
  } => {
    if (!containerRef.current)
      return {
        qntChildren: 0,
        weithFromOneChild: 0,
        weithFromAllChildren: 0,
      };
    const childrenList: HTMLCollection = containerRef.current?.children;
    const qntChildren = childrenList.length;
    const weithFromOneChild = childrenList[0].clientWidth;
    const weithFromAllChildren = Array.from(childrenList).reduce(
      (acc, child) => {
        return acc + child.clientWidth;
      },
      0
    );
    return { qntChildren, weithFromOneChild, weithFromAllChildren };
  };

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
    if (!isMouseDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 2.5; // Ajuste a sensibilidade do deslizamento conforme necessário
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleButtonClick = () => {
    console.log(containerRef.current.scrollLeft);
    if (!containerRef.current) return;
    const newScrollLeft =
      containerRef.current.scrollLeft + childrenWeith().weithFromOneChild * 4;

      
    // Use JavaScript puro para fazer a animação de scroll suave
    containerRef.current.scrollTo({
      left: newScrollLeft > 2400 ? 0 : newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={handleButtonClick}>Avançar 4 elementos</button>
      <animated.div
        className="containerSlyding"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {children}
      </animated.div>
    </>
  );
};

export default SlidingContainer;
