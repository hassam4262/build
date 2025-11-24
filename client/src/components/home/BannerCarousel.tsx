import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BannerProps {
  images: { src: string; alt: string; title: string; subtitle: string }[];
}

export function BannerCarousel({ images }: BannerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {images.map((image, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative aspect-[21/9] md:aspect-[21/7]" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-xs font-medium w-fit mb-4 backdrop-blur-sm">
                Featured
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 max-w-2xl leading-tight">
                {image.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                {image.subtitle}
              </p>
              <Button size="lg" className="w-fit rounded-full gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-6 md:w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
