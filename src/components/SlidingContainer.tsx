import React, { CSSProperties, Children, ReactElement, ReactNode, useRef, useState } from "react";
import {  animated } from "react-spring";
import "../styles/SlydingContainer.css";

interface SlidingContainerProps {
  children: ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: CSSProperties; //para conseguir definir o style do container
}

const SlidingContainer = ({ children,style }: SlidingContainerProps): ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if(!children) return null; //caso não tenha nenhum filho, retorna null


  // Adiciona um elemento vazio no inicio e no final da lista de filhos (não usado)
 const childrenArray =  React.Children.toArray(children) as ReactElement<any, string | React.JSXElementConstructor<any>>[];
  childrenArray[0] = React.cloneElement(childrenArray[0], {
    style: { ...childrenArray[0].props.style, marginLeft: "20px" },
  });
  // ------------------------------------------------

  const childrenWidth = (): {
    qntChildren: number;
    widthFromOneChild: number;
    widthFromAllChildren: number;
  } => {
    if (!containerRef.current)
      return {
        qntChildren: 0,
        widthFromOneChild: 0,
        widthFromAllChildren: 0,
      };
    const childrenList: HTMLCollection = containerRef.current?.children;
    const qntChildren = childrenList.length;
    const widthFromOneChild = childrenList[1].clientWidth;
    const widthFromAllChildren = Array.from(childrenList).reduce(
      (acc, child) => {
        return acc + child.clientWidth;
      },
      0
    );
    return { qntChildren, widthFromOneChild, widthFromAllChildren };
  };

  //função para lidar com o evento de click do mouse
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
    if (!containerRef.current) return;
    let newScrollLeft =
      containerRef.current.scrollLeft + childrenWidth().widthFromOneChild * 4;
newScrollLeft = newScrollLeft > containerRef.current.scrollWidth ? 0: newScrollLeft;
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button style={{ marginBottom: "60px" }} onClick={handleButtonClick}>
        Avançar 4 elementos
      </button>
      <animated.div
        className="containerSlyding"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {children.map((child: ReactNode, indx : number) => (
          <>
         { indx === 0 ? <div style={style ? style :{ margin: "20px 10px" }} /> : null}
            {child} <div style={style ? style : { margin: "20px 10px" }} />
          </>
        ))}
      </animated.div>
    </>
  );
};

export default SlidingContainer;
