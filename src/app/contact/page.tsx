import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ</h1>
            <p className="text-lg md:text-xl text-emerald-100">
              কোর্স সম্পর্কে যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Phone/WhatsApp */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-emerald-700 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">মোবাইল / হোয়াটসঅ্যাপ</h3>
                <a 
                  href="tel:+8801988468065" 
                  className="block text-center text-emerald-700 font-bold text-xl hover:text-emerald-800 transition-colors mb-4"
                >
                  ০১৯৮৮-৪৬৮০৬৫
                </a>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://wa.me/8801988468065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+8801988468065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center transition-all"
                  >
                    Telegram
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-emerald-700 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">ইমেইল</h3>
                <a 
                  href="mailto:alifsalek.as@gmail.com" 
                  className="block text-center text-emerald-700 font-bold text-lg hover:text-emerald-800 transition-colors mb-4"
                >
                  alifsalek.as@gmail.com
                </a>
                <a
                  href="mailto:alifsalek.as@gmail.com"
                  className="block bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-lg font-semibold text-center transition-all"
                >
                  ইমেইল পাঠান
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-xl p-8 md:p-12 border-l-4 border-emerald-700 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">যোগাযোগের সময়</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">সাধারণ যোগাযোগ</h4>
                  <p className="text-gray-700">সকাল ৯টা - রাত ১০টা</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">জরুরি যোগাযোগ</h4>
                  <p className="text-gray-700">যেকোনো সময় (WhatsApp/Telegram)</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">সাধারণ প্রশ্ন</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-700 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">কোর্স ফি কত?</h4>
                  <p className="text-gray-700">কোর্স ফি মাত্র <strong className="text-emerald-700"><span className="line-through opacity-60">২৯৯</span> ১৯৯ টাকা/মাস</strong> (মোট ২ মাস = ৩৯৮ টাকা)। প্রথম ১০ জন ফাইনাল পরীক্ষায় ভালো নম্বর পেলে ১ মাসের ফি ফেরত পাবেন।</p>
                </div>
                <div className="border-l-4 border-emerald-700 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">কিভাবে পেমেন্ট করব?</h4>
                  <p className="text-gray-700">বিকাশের মাধ্যমে পেমেন্ট করতে পারবেন। </p>
                </div>
                <div className="border-l-4 border-emerald-700 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">ক্লাস মিস হলে কি করব?</h4>
                  <p className="text-gray-700">ক্লাস রেকর্ডিং গ্রুপে আপলোড করা হবে। আপনি যেকোনো সময় দেখতে পারবেন।</p>
                </div>
                <div className="border-l-4 border-emerald-700 pl-6 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">কোর্স কখন শুরু হবে?</h4>
                  <p className="text-gray-700">রজব মাসের প্রথম জুমুয়ার দিন থেকে</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                এখনও কোনো প্রশ্ন আছে?
              </h3>
              <p className="text-emerald-100 mb-6 text-lg">
                আমাদের সাথে সরাসরি যোগাযোগ করুন অথবা এখনই রেজিস্ট্রেশন করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8801988468065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-gray-100 text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all transform hover:-translate-y-1"
                >
                  WhatsApp এ যোগাযোগ করুন
                </a>
                <a
                  href="/register"
                  className="inline-block bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/30 transition-all"
                >
                  রেজিস্ট্রেশন করুন
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
