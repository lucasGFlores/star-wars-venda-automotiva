import React, { CSSProperties, ReactElement, ReactNode, useRef, useState } from "react";
import {  animated } from "react-spring";
import {FaArrowCircleRight} from 'react-icons/fa'
import "../styles/SlydingContainer.css";

interface SlidingContainerProps {
  children: ReactElement<any, string | React.JSXElementConstructor<any>>[];
  style?: CSSProperties; //para conseguir definir o style do container
  styleSpaceBtween?: CSSProperties; //para conseguir definir o style do espaço entre os elementos filhos
  styleChildrens?: CSSProperties; //para conseguir definir o style dos elementos filhos
  className?: String;
  classNameChildrens?: String;
}

const SlidingContainer = ({
  children,
  styleSpaceBtween,
  style,
  styleChildrens,
  className,
  classNameChildrens,
}: SlidingContainerProps): ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  if (!children) return null; //caso não tenha nenhum filho, retorna null

  if(classNameChildrens){
    children = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        className: classNameChildrens,
      });
    });
  }
  if(styleChildrens){
    children = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        style: styleChildrens,
      });
    });
  }
  // Adiciona um elemento vazio no inicio e no final da lista de filhos (não usado)
  //  const childrenArray =  React.Children.toArray(children) as ReactElement<any, string | React.JSXElementConstructor<any>>[];
  //   childrenArray[0] = React.cloneElement(childrenArray[0], {
  //     style: { ...childrenArray[0].props.style, marginLeft: "20px" },
  //   });
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
    newScrollLeft =
      newScrollLeft > containerRef.current.scrollWidth ? 0 : newScrollLeft;
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };
  const keyCreator = () : string => {
        const listname = React.Children.map(children, (child) => {
          return child.key;
        });
        listname.join(",");
        return `${listname}${childrenWidth().qntChildren.toString}`;
     
  }

  return (
    <div style={style}>
      <button
        className="nextButton"
        style={{
          marginBottom: "8px",
          marginTop: "8px",
          marginLeft: "95%",
          aspectRatio: "1/1",
          width: "34px",
          borderRadius: "50%",
          padding: "0px",
          paddingLeft: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleButtonClick}
      >
        <FaArrowCircleRight size={24} />
      </button>
      <animated.div
      key={keyCreator()}
        className={`containerSlyding ${className ? className : ""}`}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          width: "auto",
          height: "auto",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {children.map((child: ReactNode, indx: number) => (
          <>
            {indx === 0 ? (
              <div
                style={
                  styleSpaceBtween ? styleSpaceBtween : { margin: "0px 20px" }
                }
              />
            ) : null}
            {child}{" "}
            <div
              style={
                styleSpaceBtween ? styleSpaceBtween : { margin: "20px 20px" }
              }
            />
          </>
        ))}
      </animated.div>
    </div>
  );
};

export default SlidingContainer;
