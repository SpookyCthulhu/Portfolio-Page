import { useState, useEffect, useCallback, useRef } from 'react';

const useDraggable = (handleRef, containerRef, parentRef = null) => {
  const [isDragging, setIsDragging] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const elementToMove = parentRef || handleRef;

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    const rect = elementToMove.current.getBoundingClientRect();
    position.current = { x: rect.left, y: rect.top };
    dragStart.current = {
      x: e.clientX - position.current.x,
      y: e.clientY - position.current.y,
    };
    if (handleRef.current) {
      handleRef.current.style.cursor = 'grabbing';
    }
  }, [handleRef, elementToMove]);

  const handleMouseMove = useCallback((e) => {
    if (isDragging && elementToMove.current) {
      let newX = e.clientX - dragStart.current.x;
      let newY = e.clientY - dragStart.current.y;

      if (containerRef && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const elementRect = elementToMove.current.getBoundingClientRect();

        newX = Math.max(newX, containerRect.left);
        newX = Math.min(newX, containerRect.right - elementRect.width);

        newY = Math.max(newY, containerRect.top);
        newY = Math.min(newY, containerRect.bottom - elementRect.height);
      }

      elementToMove.current.style.left = `${newX}px`;
      elementToMove.current.style.top = `${newY}px`;
    }
  }, [isDragging, elementToMove, containerRef]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (handleRef.current) {
      handleRef.current.style.cursor = 'grab';
    }
  }, [handleRef]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (elementToMove.current) {
      elementToMove.current.style.position = 'absolute';
      handleRef.current.style.userSelect = 'none';
    }
    if (handleRef.current) {
      handleRef.current.style.cursor = 'grab';
      handleRef.current.style.userSelect = 'none';
    }
  }, [elementToMove, handleRef]);

  return {
    isDragging,
    handleMouseDown,
  };
};

export default useDraggable;