'use client';

import banner2 from 'assets/images/purple-floral-sale-flower-shop-banner-1.png';
import banner3 from 'assets/images/purple-floral-sale-flower-shop-banner-2.png';
import banner1 from 'assets/images/purple-floral-sale-flower-shop-banner.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const banners = [banner1, banner2, banner3];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center" >
    <div className="realtive overflow-hidden w-5/6">
      <div
        className="flex w-full items-center transition-transform duration-1000"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={banner}
              alt={`Banner Image ${index + 1}`} 
              layout="responsive"
              width={1000}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Banner;
