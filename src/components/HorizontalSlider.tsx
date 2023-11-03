import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface HorizontalSliderProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  children,
  className,
}) => {
  const [isDragStart, setIsDragStart] = useState(false);
  const [prevX, setPrevX] = useState<number>(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (x: number) => {
    setIsDragStart(true);
    setPrevX(x);
    if (carouselRef.current) setPrevScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragMove = (x: number) => {
    if (!isDragStart) return;
    const deltaX = x - prevX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = prevScrollLeft - deltaX * 1.5;
    }
  };

  const handleDragEnd = () => {
    setIsDragStart(false);
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={(e) => handleDragStart(e.pageX)}
      onMouseMove={(e) => {
        handleDragMove(e.pageX);
      }}
      onMouseUp={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].pageX)}
      onTouchEnd={handleDragEnd}
      className={twMerge(
        "my-8 flex items-center gap-4 overflow-x-hidden rounded-full cursor-pointer",
        className
      )}
      draggable={false}
    >
      {children}
    </div>
  );
};

export default HorizontalSlider;
