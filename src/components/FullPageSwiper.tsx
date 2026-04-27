"use client";

import { ReactNode, Children, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

export default function FullPageSwiper({ children }: { children: ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const childArray = Children.toArray(children);

  if (!mounted) return null;

  // ==========================================
  // MOBILE & TABLET: Normal Native Scrolling
  // ==========================================
  if (!isDesktop) {
    return (
      <div className="w-full flex flex-col overflow-x-hidden pt-20">
        {children}
      </div>
    );
  }

  // ==========================================
  // DESKTOP: Full Page Swiper Effect
  // ==========================================
  return (
    <div className="h-screen w-full relative bg-white">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        speed={700}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="h-full w-full"
      >
        {childArray.map((child, index) => {
          const isHero = index === 0;
          const isFooter = index === childArray.length - 1;

          let slideBg = "bg-white";
          if (isFooter) slideBg = "bg-[#222222]";

          return (
            <SwiperSlide
              key={index}
              className={`h-screen w-full ${slideBg} box-border`}
            >
              <div
                className={`w-full h-full flex flex-col overflow-y-auto ${!isHero && !isFooter ? "pt-[100px] pb-6" : ""}`}
              >
                <div
                  className={`w-full flex flex-col
                    ${isFooter ? "mt-auto" : "m-auto"}
                    ${!isHero && !isFooter ? " [&>section]:py-0! [&>section]:bg-transparent! " : ""}
                    ${!isHero && !isFooter ? " [&_h2]:mb-4! [&_p]:mb-6! [&_.mb-12]:mb-4! " : ""}
                    ${!isHero && !isFooter ? " [&_img]:max-h-[35vh]! [&_img]:w-auto! [&_img]:object-contain! [&_img]:mx-auto! " : ""}
                  `}
                >
                  {child}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
