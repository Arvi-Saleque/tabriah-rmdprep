import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">কোর্স সম্পর্কে</h1>
            <p className="text-lg md:text-xl text-emerald-100">
              রমজানের প্রস্তুতি কোর্স - একটি সম্পূর্ণ ইসলামিক শিক্ষা কর্মসূচি
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">কোর্সের উদ্দেশ্য</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  রমজান মাস আসার আগেই নিজেকে প্রস্তুত করুন। এই কোর্সের মাধ্যমে আপনি শিখবেন:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span><strong>পরিপূর্ণ নামাজ:</strong> সানা থেকে শুরু করে সালাম পর্যন্ত সম্পূর্ণ নামাজের সকল দোয়া ও তাসবীহ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span><strong>১১টি বেসিক সূরা:</strong> ফাতিহা, আসর, ফীল, কুরাইশ, মাউন, কাউসার, কাফিরুন, নাসর, লাহাব, ইখলাস, ফালাক, নাস</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span><strong>দৈনন্দিন মাসনূন দোয়া:</strong> ঘুম, খাওয়া, ওযু, মসজিদ, ঘর এবং অন্যান্য প্রয়োজনীয় দোয়া</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span><strong>আরবি হরফ উচ্চারণ:</strong> সঠিক তাজবীদ সহ আরবি হরফ প্রাক্টিস</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Fee */}
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-2xl p-8 md:p-12 mb-12 text-white text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-8 py-3 mb-4">
                <p className="text-4xl md:text-5xl font-bold">
                  <span className="line-through opacity-60">২৯৯</span> <span className="text-white">১৯৯</span> টাকা/মাস
                </p>
              </div>
              <p className="text-xl md:text-2xl text-amber-50 mb-4">মাত্র ১৯৯ টাকা মাসিক ফি তে সম্পূর্ণ কোর্স</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-amber-50">টপ ৩ পুরস্কার</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-amber-50">ফি ফেরতের সুযোগ</span>
                </div>
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-emerald-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">কোর্স কাঠামো</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">১৬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">মোট ১৬টি ক্লাস</h3>
                    <p className="text-gray-700">২ মাস (রজব ও শাবান) ধরে প্রতি শুক্রবার ও শনিবার ক্লাস অনুষ্ঠিত হবে</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">৬০</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">প্রতি ক্লাস ৬০ মিনিট</h3>
                    <p className="text-gray-700">রিভিশন, হরফ প্রাক্টিস, সূরা শিক্ষা, সমস্যা সমাধান ও দোয়া শিক্ষা</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">চূড়ান্ত পরীক্ষা</h3>
                    <p className="text-gray-700">১৬তম ক্লাসে সম্পূর্ণ কোর্সের পরীক্ষা ও সার্টিফিকেট প্রদান</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Should Join */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">কারা যোগ দিতে পারবেন</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">👨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">শুধুমাত্র ভাইদের জন্য</h3>
                  <p className="text-gray-700">এই কোর্সটি শুধুমাত্র পুরুষদের জন্য ডিজাইন করা হয়েছে</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">সকল স্তরের শিক্ষার্থী</h3>
                  <p className="text-gray-700">নতুন শিক্ষার্থী থেকে অভিজ্ঞ সবাই যোগ দিতে পারবেন</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">নিয়মিত উপস্থিতি</h3>
                  <p className="text-gray-700">যারা প্রতি শুক্র-শনিবার ক্লাসে উপস্থিত থাকতে পারবেন</p>
                </div>

                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">💪</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">শেখার আগ্রহ</h3>
                  <p className="text-gray-700">যাদের দ্বীন শেখার প্রবল ইচ্ছা ও আগ্রহ রয়েছে</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-amber-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">কোর্সের সুবিধা</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">অভিজ্ঞ হাফেজ ও মাওলানাদের সরাসরি শিক্ষা</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">সঠিক তাজবীদ ও উচ্চারণ শিক্ষা</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">প্রতি ক্লাসে রিভিশন ও সমস্যা সমাধান সেশন</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">রেকর্ডেড ক্লাস দেখার সুবিধা</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">টেলিগ্রাম গ্রুপে সার্বক্ষণিক সহায়তা</p> 
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">কোর্স শেষে সার্টিফিকেট প্রদান</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">পড়াশোনার উপকরণ ও গাইডলাইন</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                প্রস্তুত আছেন কি?
              </h3>
              <p className="text-emerald-100 mb-6 text-lg">
                রমজানের আগেই শুরু করুন আপনার ইসলামিক শিক্ষা যাত্রা
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/register"
                  className="inline-block bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all transform hover:-translate-y-1"
                >
                  এখনই রেজিস্ট্রেশন করুন
                </a>
                <a
                  href="/syllabus"
                  className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 transition-all"
                >
                  সিলেবাস দেখুন
                </a>
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
              <p className="text-gray-300">ইমেইল: info@ramadanprep.com</p>
              <p className="text-gray-300">ফোন: +880 1XXX-XXXXXX</p>
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
