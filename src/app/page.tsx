'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { trackButtonClick, trackNavigation } from '@/lib/analytics';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20">
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cover.png"
              alt="Ramadan Preparation"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-stone-50/90 to-emerald-50/80"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                শুধুমাত্র ভাইদের জন্য
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                রমাদান প্রস্তুতি ও নামাজের<br />
                প্রয়োজনীয় সকল দোয়া,<br />
                যিকির এবং বেসিক সূরা
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                প্রয়োজনীয় দৈনন্দিন মাসনুন দোয়া
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                <Link 
                  href="/register" 
                  onClick={() => {
                    trackButtonClick('শেখা শুরু করুন', 'Hero Section');
                    trackNavigation('Register', 'Home Hero');
                  }}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center"
                >
                  শেখা শুরু করুন
                </Link>
                <Link 
                  href="/syllabus" 
                  onClick={() => {
                    trackButtonClick('সিলেবাস দেখুন', 'Hero Section');
                    trackNavigation('Syllabus', 'Home Hero');
                  }}
                  className="bg-white/90 hover:bg-white text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-emerald-700/20 text-center"
                >
                  সিলেবাস দেখুন
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">১৫</p>
                  <p className="text-sm md:text-base text-gray-700">ক্লাস</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">১১</p>
                  <p className="text-sm md:text-base text-gray-700">সূরা</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md">
                  <p className="text-3xl md:text-4xl font-bold text-emerald-700 mb-1">২</p>
                  <p className="text-sm md:text-base text-gray-700">মাস</p>
                </div>
              </div>

              {/* Course Fee Badge */}
              <div className="mt-8 inline-block bg-amber-500 text-white px-6 py-3 rounded-full shadow-xl">
                <p className="text-2xl md:text-3xl font-bold">
                  কোর্স ফি: <span className="line-through opacity-70">২৯৯</span> <span className="text-white">১৯৯</span> টাকা/মাস
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Format */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ক্লাস ফর্ম্যাট
            </h3>
            <p className="text-lg text-gray-600">প্রতি শুক্রবার ও শনিবার</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  10
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">আগের দিনের পড়া রিভিশন</p>
                </div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">হরফ প্রাক্টিস</p>
                </div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  30
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">সূরা প্রাক্টিস</p>
                </div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  10
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">সমস্যা সমাধান</p>
                </div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">মাসনুন দোয়া রিভিশন</p>
                </div>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-emerald-50 to-white border-l-4 border-emerald-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-700 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 mb-1">মিনিট</p>
                  <p className="text-gray-700">নতুন দোয়া</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes & Incentives */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              পুরস্কার ও সুবিধা
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Top 3 Prize */}
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-6 shadow-2xl text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🏆</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">টপ ৩ বিশেষ পুরস্কার</h4>
                <p className="text-amber-50">প্রথম ৩ জন শিক্ষার্থীর জন্য রয়েছে বিশেষ পুরস্কার</p>
              </div>

              {/* Fee Refund */}
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-6 shadow-2xl text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💰</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">ফি ফেরত</h4>
                <p className="text-emerald-50">প্রথম ১০ জনকে ১ মাসের ফি সম্পূর্ণ ফেরত</p>
              </div>

              {/* Certificate */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-2xl text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">📜</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">সার্টিফিকেট</h4>
                <p className="text-blue-50">কোর্স সম্পন্নকারী সকল শিক্ষার্থীকে সার্টিফিকেট প্রদান</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">ℹ️</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">ফি ফেরতের শর্ত:</h4>
                  <p className="text-gray-700">প্রথম ১০ জন শিক্ষার্থীকে এক মাসের কোর্স ফি সম্পূর্ণ ফেরত দেওয়া হবে। এটি আপনার পরিশ্রমকে মূল্যায়ন করার একটি বিশেষ উদ্যোগ।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              কোর্স টিউটর
            </h3>
            <p className="text-lg text-gray-600">অভিজ্ঞ শিক্ষকমণ্ডলী</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Main Instructor */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-emerald-700 hover:shadow-2xl transition-all">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                  হা
                </div>
                <div className="text-center md:text-left flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    হাফেজ সালেক বিন হোসেন
                  </h4>
                  <p className="text-emerald-700 font-semibold text-lg mb-2">কোর্স ইন্সট্রাক্টর</p>
                  <p className="text-gray-600">কুরআন ও হাদিসের আলোকে নামাজ শিক্ষায় অভিজ্ঞ</p>
                </div>
              </div>
            </div>
            
            {/* Supervisors */}
            <div className="bg-gradient-to-br from-white to-emerald-50/30 shadow-xl rounded-2xl overflow-hidden border border-emerald-100">
              <div className="bg-emerald-700 text-white text-center py-4">
                <p className="text-lg font-semibold">সার্বিক তত্ত্বাবধানে</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-emerald-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    মা
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      হাফেজ মাওলানা ওসামা তামিম
                    </h4>
                    <p className="text-gray-700 font-medium">খতিব ও প্রিন্সিপাল</p>
                    <p className="text-gray-600">দারুল হিকমাহ একাডেমি</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                    মু
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      হাফেজ মাওলানা মুফতি ওসমান যুবায়ের
                    </h4>
                    <p className="text-gray-700 font-medium">প্রিন্সিপাল, দারুন নাজাত মহিলা মাদ্রাসা</p>
                    <p className="text-gray-600">খতিব, বাইতুল মা'মুর জামে মসজিদ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="রমজানের প্রস্তুতি"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h4 className="text-xl font-bold">রমজানের প্রস্তুতি</h4>
              </div>
              <p className="text-gray-300">পরিপূর্ণ নামাজ ও মাসনূন দোয়া শিখুন</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-emerald-300 transition-colors">হোম</a></li>
                <li><a href="/syllabus" className="hover:text-emerald-300 transition-colors">সিলেবাস</a></li>
                <li><a href="/teachers" className="hover:text-emerald-300 transition-colors">শিক্ষকবৃন্দ</a></li>
                <li><a href="/register" className="hover:text-emerald-300 transition-colors">রেজিস্ট্রেশন</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">যোগাযোগ</h4>
              <p className="text-gray-300">ইমেইল: alifsalek.as@gmail.com</p>
              <p className="text-gray-300">ফোন: ০১৯৮৮-৪৬৮০৬৫</p>
              <div className="flex gap-3 mt-3">
                <a href="https://wa.me/8801988468065" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 transition-colors">WhatsApp</a>
                <a href="https://t.me/+8801988468065" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-200 transition-colors">Telegram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>© 2025 রমজানের প্রস্তুতি কোর্স | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
