import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface HorizontalSliderProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  children,
  className,
}) => {
  let isDragStart = false,
    prevX: number,
    prevScrollLeft: number;
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (x: number) => {
    isDragStart = true;
    prevX = x;
    if (carouselRef.current) prevScrollLeft = carouselRef.current?.scrollLeft;
  };

  const handleDragMove = (x: number) => {
    if (!isDragStart) return;
    const deltaX = x - prevX;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = prevScrollLeft - deltaX * 1.5;
    }
  };

  const handleDragEnd = () => {
    isDragStart = false;
  };

  return (
    <div
      ref={carouselRef}
      onMouseDown={(e) => handleDragStart(e.pageX)}
      onMouseMove={(e) => {
        e.preventDefault();
        handleDragMove(e.pageX);
      }}
      onMouseUp={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].pageX)}
      onTouchEnd={handleDragEnd}
      className={twMerge(
        "my-8 flex items-center gap-4 overflow-x-hidden rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalSlider;
