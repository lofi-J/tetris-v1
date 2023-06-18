import { useEffect, useRef } from "react";

function useDragger(id) {
  const coordinates = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    const container = target.parentElement;
      
    const onMouseDown = (e) => {
        if(e.target.id === 'moveTarget1' || e.target.id === 'moveTarget2') {
          coordinates.current.startX = e.clientX;
          coordinates.current.startY = e.clientY;
        } else {
          return;
        }
    };
    
    const onMouseUp = (e) => {
      coordinates.current.lastX = target.offsetLeft;
      coordinates.current.lastY = target.offsetTop;
    
      coordinates.current.startX = 0;
      coordinates.current.startY = 0;
    };
      
    const onMouseMove = (e) => {
      if (coordinates.current.startX === 0 && coordinates.current.startY === 0) return;
    
      const nextX = e.clientX - coordinates.current.startX + coordinates.current.lastX;
      const nextY = e.clientY - coordinates.current.startY + coordinates.current.lastY;
    
      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  return coordinates;
}

export default useDragger;