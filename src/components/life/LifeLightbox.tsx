import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

import type { LifeImage } from "../../data/life";

interface LifeLightboxProps {
  images: LifeImage[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

function LifeLightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: LifeLightboxProps) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrevious, onNext]);

  if (!activeImage) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X size={22} />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="flex max-h-[90vh] max-w-6xl flex-col items-center">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[78vh] max-w-full rounded-2xl object-contain"
        />

        <div className="mt-5 text-center text-white">
          {activeImage.caption && (
            <p className="font-semibold">{activeImage.caption}</p>
          )}

          <p className="mt-2 text-sm text-white/50">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LifeLightbox;
