"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Carrousel = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {[
          { src: "/apple11.jpg", alt: "Imagen 1" },
          { src: "/ipadPro.jpg", alt: "Imagen 2" },
          { src: "/airpods.jpg", alt: "Imagen 3" },
          { src: "/ipadPro2.jpg", alt: "Imagen 4" },
          { src: "/macbook.jpg", alt: "Imagen 5" },
          { src: "/watch.jpg", alt: "Imagen 6" },
          { src: "/home.jpg", alt: "Imagen 7" },
        ].map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-96">
              <Image
                src={src}
                alt={alt}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg border-2 border-blue-950 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;


