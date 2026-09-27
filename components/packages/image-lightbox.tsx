"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface LightboxItem {
  src: string | StaticImageData;
  alt: string;
  title?: string;
}

interface ImageLightboxProps {
  images: LightboxItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard events (ESC, ArrowLeft, ArrowRight) and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!mounted || !isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen a pantalla completa"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-lg"
        aria-label="Cerrar vista completa"
      >
        <X className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* Navigation button: Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-6 z-40 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-lg"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[82vh] h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 95vw, 85vw"
            className="object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)] rounded-xl"
            priority
          />
        </div>

        {/* Caption bar */}
        <div className="mt-3 flex items-center justify-between w-full max-w-xl px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/15">
          <span className="truncate">{currentImage.title || currentImage.alt}</span>
          {images.length > 1 && (
            <span className="text-white/70 text-xs shrink-0 ml-3">
              {currentIndex + 1} de {images.length}
            </span>
          )}
        </div>
      </div>

      {/* Navigation button: Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-6 z-40 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer shadow-lg"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      )}
    </div>,
    document.body,
  );
}

/**
 * Thumbnail overlay hint to indicate image is clickable/expandable
 */
export function ExpandHint({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center rounded-full z-10 pointer-events-none ${className || ""}`}
    >
      <div className="p-2 sm:p-2.5 rounded-full bg-white/80 backdrop-blur-sm text-purple-900 shadow-md">
        <ZoomIn className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-white mt-1 drop-shadow-md">
        Ver foto
      </span>
    </div>
  );
}
