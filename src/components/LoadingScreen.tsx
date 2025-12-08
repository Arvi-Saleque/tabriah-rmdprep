'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5 seconds loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-emerald-50 via-amber-50 to-stone-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo with animation */}
        <div className="mb-8 flex justify-center animate-bounce">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/logo.png"
              alt="রমজানের প্রস্তুতি"
              width={128}
              height={128}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">
            রমজানের প্রস্তুতি কোর্স
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            তাবরিয়াহ অ্যাকাডেমি কর্তৃক আয়োজিত
          </p>
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-3 h-3 bg-emerald-700 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-emerald-700 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-emerald-700 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>

        {/* Loading bar */}
        <div className="mt-6 w-64 md:w-80 mx-auto">
          <div className="h-1 bg-emerald-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
