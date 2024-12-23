"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  // selectImageIndex?: number;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ChevronLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ChevronRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-10 w-10 rounded-none bg-gray-300 border-0",
        orientation === "horizontal"
          ? "-left-[-1.6px] top-[94%] -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft size={40} className="h-6 w-6 text-white" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-10 w-10 rounded-none bg-black border-0",
        orientation === "horizontal"
          ? "-left-[-62px]  top-[94%] -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight size={40} className="h-6 w-6 text-white" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

// const Carousel2 = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement> & CarouselProps
// >(
//   (
//     {
//       orientation = "horizontal",
//       opts,
//       setApi,
//       plugins,
//       className,
//       children,
//       selectedImageIndex,
//       onSelectImage,
//       ...props
//     },
//     ref
//   ) => {
//     const [carouselRef, api] = useEmblaCarousel(
//       {
//         ...opts,
//         axis: orientation === "horizontal" ? "x" : "y",
//         skipSnaps: false,
//       },
//       plugins
//     );
//     const [canScrollPrev, setCanScrollPrev] = React.useState(false);
//     const [canScrollNext, setCanScrollNext] = React.useState(false);

//     const onSelect = React.useCallback(() => {
//       if (!api) {
//         return;
//       }
//       setCanScrollPrev(api.canScrollPrev());
//       setCanScrollNext(api.canScrollNext());
//       const currentIndex = api.selectedScrollSnap();
//       if (currentIndex !== selectedImageIndex) {
//         onSelectImage(currentIndex);
//       }
//     }, [api, selectedImageIndex, onSelectImage]);

//     const scrollPrev = React.useCallback(() => {
//       api?.scrollPrev();
//     }, [api]);

//     const scrollNext = React.useCallback(() => {
//       api?.scrollNext();
//     }, [api]);

//     React.useEffect(() => {
//       if (!api) return;

//       onSelect();
//       api.on("select", onSelect);
//       return () => {
//         api.off("select", onSelect);
//       };
//     }, [api, onSelect]);

//     React.useEffect(() => {
//       if (!api) return;
//       api.scrollTo(selectedImageIndex, true);
//     }, [selectedImageIndex, api]);

//     return (
//       <CarouselContext.Provider
//         value={{
//           carouselRef,
//           api,
//           opts,
//           orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
//           scrollPrev,
//           scrollNext,
//           canScrollPrev,
//           canScrollNext,
//           selectedImageIndex,
//           onSelectImage,
//         }}
//       >
//         <div
//           ref={ref}
//           className={cn("relative", className)}
//           role="region"
//           aria-roledescription="carousel"
//           {...props}
//         >
//           {children}
//         </div>
//       </CarouselContext.Provider>
//     );
//   }
// );
// Carousel2.displayName = "Carousel2";

const CarouselContent2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent2.displayName = "CarouselContent2";

const CarouselItem2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem2.displayName = "CarouselItem2";

const CarouselPrevious2 = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        //"absolute  h-12 w-12 ",
        "absolute  h-10 w-10 bg-grayLightSecondary",
        orientation === "horizontal"
          ? "left-4 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {/* <ChevronLeft size={40} className="h-6 w-6" /> */}
      <MdOutlineKeyboardArrowLeft className="h-8 w-8 text-text" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious2.displayName = "CarouselPrevious2";

const CarouselNext2 = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        // "absolute h-10 w-10 rounded-full",
        "absolute h-10 w-10 bg-whitePrimary",
        orientation === "horizontal"
          ? "right-24 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {/* <ChevronRight size={40} className="h-6 w-6" /> */}
      <MdOutlineKeyboardArrowRight className="h-8 w-8 text-black" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext2.displayName = "CarouselNext2";

export {
  Carousel,
  CarouselContent,
  CarouselContent2,
  CarouselItem,
  CarouselItem2,
  CarouselNext,
  CarouselNext2,
  CarouselPrevious,
  CarouselPrevious2,
  type CarouselApi,
};
