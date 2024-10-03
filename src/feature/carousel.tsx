import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";

interface CarouselProps {
  images?: string[];
  autoSlideInterval?: number;
}

export default function Carousel({
  images = [],
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length > 1) {
      const intervalId = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoSlideInterval, images.length, nextSlide]);

  if (!images || images.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-4 text-center">Brak zdjęć</CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full group">
      <CardContent className="p-0 relative">
        <div className="overflow-hidden aspect-video">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className={`size-4 p-0 rounded-full   ${
                    index === currentIndex ? "bg-mauve1" : "bg-mauve1/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
