import Navbar from '@/components/Navbar';
import Image from 'next/image';

const teachers = [
  {
    name: "হাফেজ সালেক বিন হোসেন",
    role: "কোর্স ইন্সট্রাক্টর",
    description: "",
    qualifications: [
      "হাফেজে কুরআন",
      "ত্বলিবুল ইলম"  
    ],
    initial: "হা",
    type: "main"
  },
  {
    name: "হাফেজ মাওলানা আব্দুল্লাহ ওসামা",
    role: "সার্বিক তত্ত্বাবধায়ক",
    institution: "খতিব ও প্রিন্সিপাল, দারুল হিকমাহ একাডেমি",
    description: "দীর্ঘ ৭ বছরের পাঠদানে অভিজ্ঞতা। ইসলামিক শিক্ষায় বিশেষায়িত জ্ঞান এবং কমিউনিটি সেবায় নিবেদিত।",
    qualifications: [
      "হাফেজে কুরআন",
      "মাওলানা (আলিম)",
      "প্রিন্সিপাল",
      "খতিব"
    ],
    initial: "মা",
    type: "supervisor"
  },
  {
    name: "হাফেজ মাওলানা মুফতি ওসমান যুবায়ের",
    role: "সার্বিক তত্ত্বাবধায়ক",
    institution: "প্রিন্সিপাল, দারুন নাজাত মহিলা মাদ্রাসা",
    institution2: "খতিব, বাইতুল মা'মুর জামে মসজিদ",
    description: "ফিকহ ও ফতোয়া বিশেষজ্ঞ। মহিলাদের ইসলামিক শিক্ষায় অগ্রণী ভূমিকা পালন করছেন।",
    qualifications: [
      "হাফেজে কুরআন",
      "মুফতি (ফতোয়া বিশেষজ্ঞ)",
      "মাদ্রাসা প্রধান",
      "খতিব" 
    ],
    initial: "মু",
    type: "supervisor"
  }
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">শিক্ষকবৃন্দ</h1>
            <p className="text-lg md:text-xl text-emerald-100">
              অভিজ্ঞ ও দক্ষ উস্তাদদের তত্ত্বাবধানে শিখুন
            </p>
          </div>
        </div>
      </section>

      {/* Main Instructor */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">কোর্স ইন্সট্রাক্টর</h2>
              <p className="text-gray-600 text-lg">যিনি সরাসরি ক্লাস পরিচালনা করবেন</p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-emerald-700">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-6xl font-bold">{teachers[0].initial}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-white font-semibold">{teachers[0].role}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{teachers[0].name}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{teachers[0].description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <h4 className="font-bold text-gray-900 text-lg">যোগ্যতা ও দক্ষতা:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {teachers[0].qualifications.map((qual, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-emerald-50 rounded-lg px-4 py-2">
                          <svg className="w-5 h-5 text-emerald-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-800 font-medium">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certificate */}
                  <div className="mt-6 border-t pt-6">
                    <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <span>📜</span>
                      সার্টিফিকেট
                    </h4>
                    <div className="rounded-lg overflow-hidden shadow-lg border-2 border-emerald-200">
                      <Image
                        src="/images/certificate.jpg"
                        alt="সালেক বিন হোসেন - সার্টিফিকেট"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervisors */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-stone-50 via-amber-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">সার্বিক তত্ত্বাবধানে</h2>
              <p className="text-gray-600 text-lg">বিশিষ্ট ইসলামী স্কলারদের নির্দেশনায়</p>
            </div>

            <div className="space-y-6">
              {teachers.slice(1).map((teacher, index) => (
                <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden border-l-4 border-amber-600">
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-amber-600 to-emerald-700 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-5xl font-bold">{teacher.initial}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                      <div className="mb-4 space-y-1">
                        <p className="text-emerald-700 font-semibold">{teacher.institution}</p>
                        {teacher.institution2 && (
                          <p className="text-emerald-700 font-semibold">{teacher.institution2}</p>
                        )}
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{teacher.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {teacher.qualifications.map((qual, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-emerald-100 to-amber-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Teachers Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              কেন আমাদের শিক্ষকদের বেছে নেবেন?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-700">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">সুদীর্ঘ অভিজ্ঞতা</h3>
                <p className="text-gray-700">বছরের পর বছর ইসলামিক শিক্ষাদানে নিয়োজিত অভিজ্ঞ উস্তাদ</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-700">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">প্রমাণিত যোগ্যতা</h3>
                <p className="text-gray-700">হাফেজ, মাওলানা ও মুফতি - স্বীকৃত ইসলামিক স্কলার</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-700">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">কমিউনিটি সেবা</h3>
                <p className="text-gray-700">প্রতিষ্ঠান পরিচালনা ও মসজিদের খতিব হিসেবে দায়িত্ব পালন</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-700">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">বয়স্ক শিক্ষায় পারদর্শী</h3>
                <p className="text-gray-700">সহজবোধ্য শিক্ষাদান পদ্ধতি ও ছাত্রদের প্রতি যত্নশীল</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-8 md:p-12 shadow-2xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                অভিজ্ঞ উস্তাদদের কাছে শিখতে চান?
              </h3>
              <p className="text-emerald-100 mb-6 text-lg">
                এখনই রেজিস্ট্রেশন করুন এবং শুরু করুন আপনার ইসলামিক শিক্ষা যাত্রা
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
