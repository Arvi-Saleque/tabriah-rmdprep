'use client';

import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';

interface ClassData {
  classNumber: number;
  date?: string;
  videoLink?: string;
  resourceLink?: string;
  topics: {
    harf: string;
    prayers: string[];
    dua: string;
  };
}

export default function SyllabusPage() {
  const [syllabusData, setSyllabusData] = useState<ClassData[]>([]);
  const [notification, setNotification] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('/api/classes');
      const result = await response.json();
      if (result.success) {
        setSyllabusData(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (link: string | undefined, type: 'video' | 'resource') => {
    if (!link || link === '') {
      const message = type === 'video' 
        ? 'ভিডিও লিংক এখনো যুক্ত করা হয়নি' 
        : 'রিসোর্স লিংক এখনো যুক্ত করা হয়নি';
      setNotification(message);
      setTimeout(() => setNotification(''), 3000);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-red-500 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in">
          {notification}
        </div>
      )}

      {/* Page Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">কোর্স সিলেবাস</h1>
            <p className="text-lg md:text-xl text-emerald-100">
              ১৫টি ক্লাসে সম্পূর্ণ নামাজ, সূরা এবং দৈনন্দিন দোয়া শিখুন
            </p>
            <div className="flex justify-center gap-6 mt-6">
              <div className="text-center">
                <p className="text-3xl font-bold">১৫</p>
                <p className="text-emerald-200 text-sm">ক্লাস</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">২</p>
                <p className="text-emerald-200 text-sm">মাস</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">১১</p>
                <p className="text-emerald-200 text-sm">সূরা</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-emerald-700 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">লোড হচ্ছে...</p>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Demo Section */}
              {syllabusData.length > 0 && syllabusData[0].demoVideoLink && (
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg border-2 border-amber-400 overflow-hidden mb-8">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <span className="text-white text-3xl">🎬</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">ডেমো ক্লাস</h3>
                        <p className="text-amber-100">কোর্সের একটি নমুনা দেখুন</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 flex-wrap">
                      {syllabusData[0].demoVideoLink && (
                        <button
                          onClick={() => {
                            if (syllabusData[0].demoVideoLink) {
                              window.open(syllabusData[0].demoVideoLink, '_blank');
                            }
                          }}
                          className="flex-1 min-w-[200px] bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          ডেমো ভিডিও দেখুন
                        </button>
                      )}
                      {syllabusData[0].demoResourceLink && (
                        <button
                          onClick={() => {
                            if (syllabusData[0].demoResourceLink) {
                              window.open(syllabusData[0].demoResourceLink, '_blank');
                            }
                          }}
                          className="flex-1 min-w-[200px] bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                          </svg>
                          ডেমো রিসোর্স
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

            {syllabusData.map((classItem, index) => (
              <div
                key={classItem.classNumber}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-emerald-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-emerald-50 to-white p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {classItem.classNumber}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          ক্লাস {classItem.classNumber}
                        </h3>
                        {classItem.classNumber === 16 ? (
                          <p className="text-emerald-700 font-semibold">চূড়ান্ত পরীক্ষা</p>
                        ) : (
                          <p className="text-gray-600">{classItem.date}</p>
                        )}
                      </div>
                    </div>
                    {classItem.classNumber !== 16 && (
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleLinkClick(classItem.videoLink, 'video')}
                          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                        >
                          ভিডিও দেখুন
                        </button>
                        <button 
                          onClick={() => handleLinkClick(classItem.resourceLink, 'resource')}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
                        >
                          রিসোর্স
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Harf Practice */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <span className="text-amber-700 font-bold">হ</span>
                        </div>
                        <h4 className="font-bold text-gray-900">হরফ প্রাক্টিস</h4>
                      </div>
                      <p className="text-gray-700 pl-10">{classItem.topics.harf}</p>
                    </div>

                    {/* Prayer Components */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <span className="text-emerald-700 font-bold">ن</span>
                        </div>
                        <h4 className="font-bold text-gray-900">নামাজ ও সূরা</h4>
                      </div>
                      <ul className="space-y-1 pl-10">
                        {classItem.topics.prayers.map((prayer, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start gap-2">
                            <span className="text-emerald-600 mt-1">•</span>
                            <span>{prayer}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Masnun Dua */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-700 font-bold">د</span>
                        </div>
                        <h4 className="font-bold text-gray-900">মাসনূন দোয়া</h4>
                      </div>
                      <p className="text-gray-700 pl-10">{classItem.topics.dua}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                এখনই কোর্সে যোগ দিন
              </h3>
              <p className="text-emerald-100 mb-6 text-lg">
                রমজানের আগেই প্রস্তুতি সম্পন্ন করুন
              </p>
              <a
                href="/register"
                className="inline-block bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all transform hover:-translate-y-1"
              >
                রেজিস্ট্রেশন করুন
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">রমজানের প্রস্তুতি</h4>
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
