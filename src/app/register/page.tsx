'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';

interface FormData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  // Step 2
  bkashNumber: string;
  transactionId: string;
  // Step 3
  age: string;
  occupation: string;
  education: string;
  address: string;
  courseSource: string;
  motivation: string;
}

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    bkashNumber: '',
    transactionId: '',
    age: '',
    occupation: '',
    education: '',
    address: '',
    courseSource: '',
    motivation: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setError('সকল তথ্য পূরণ করুন');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('সঠিক ইমেইল দিন');
      return false;
    }
    if (!/^01[3-9]\d{8}$/.test(formData.phone)) {
      setError('সঠিক মোবাইল নাম্বার দিন (01XXXXXXXXX)');
      return false;
    }
    setError('');
    return true;
  };

  const validateStep2 = () => {
    if (!formData.bkashNumber || !formData.transactionId) {
      setError('সকল তথ্য পূরণ করুন');
      return false;
    }
    if (!/^01[3-9]\d{8}$/.test(formData.bkashNumber)) {
      setError('সঠিক বিকাশ নাম্বার দিন (01XXXXXXXXX)');
      return false;
    }
    if (formData.transactionId.length < 5) {
      setError('সঠিক ট্রানজেকশন আইডি দিন');
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          bkashNumber: formData.bkashNumber,
          transactionId: formData.transactionId,
          age: formData.age ? parseInt(formData.age) : undefined,
          occupation: formData.occupation,
          education: formData.education,
          address: formData.address,
          courseSource: formData.courseSource,
          motivation: formData.motivation,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError('রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                রেজিস্ট্রেশন সফল হয়েছে!
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                আপনার রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-8">
                <p className="text-emerald-800 font-semibold mb-2">পরবর্তী পদক্ষেপ:</p>
                <ul className="text-left text-emerald-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>আপনার পেমেন্ট ভেরিফাই করা হবে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>কনফার্মেশন ইমেইল/SMS পাবেন</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>WhatsApp গ্রুপে যুক্ত করা হবে</span>
                  </li>
                </ul>
              </div>
              <a
                href="/"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                হোম পেজে ফিরে যান
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">রেজিস্ট্রেশন ফর্ম</h1>
            <p className="text-lg md:text-xl text-emerald-100">
              রমজানের প্রস্তুতি কোর্সে যোগ দিন
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-start justify-between relative">
                {/* Connection Lines */}
                <div className="absolute top-7 left-0 right-0 flex items-center px-8">
                  <div className={`flex-1 h-1 transition-all ${currentStep > 1 ? 'bg-emerald-700' : 'bg-gray-200'}`} />
                  <div className={`flex-1 h-1 transition-all ${currentStep > 2 ? 'bg-emerald-700' : 'bg-gray-200'}`} />
                </div>

                {/* Steps */}
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center flex-1 relative z-10">
                    <div className={`w-14 h-14 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-lg ${
                      currentStep >= step 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-white text-gray-500 border-2 border-gray-300'
                    }`}>
                      {step}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-center px-2">
                      <span className={currentStep >= step ? 'text-emerald-700' : 'text-gray-500'}>
                        {step === 1 ? 'ব্যক্তিগত তথ্য' : step === 2 ? 'পেমেন্ট তথ্য' : 'অতিরিক্ত তথ্য'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">ব্যক্তিগত তথ্য</h3>
                    
                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        পূর্ণ নাম <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        ইমেইল <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="example@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        মোবাইল নাম্বার <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="01XXXXXXXXX"
                        required
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg font-bold text-lg transition-all"
                    >
                      পরবর্তী
                    </button>
                  </div>
                )}

                {/* Step 2: Payment Info */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">পেমেন্ট তথ্য</h3>
                    
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
                      <p className="text-amber-900 font-semibold mb-4 text-lg">
                        <span className="line-through opacity-60">২৯৯</span> <span className="text-emerald-700 font-bold">১৯৯</span> টাকা/মাস
                      </p>
                      <p className="text-amber-800 text-sm mb-4">২ মাস = ৩৯৮ টাকা</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <span className="text-amber-700 mt-1">🏆</span>
                          <p className="text-amber-900 text-sm">টপ ৩ জনের জন্য বিশেষ পুরস্কার (প্রথম ৩ জন)</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-amber-700 mt-1">🔥</span>
                          <p className="text-amber-900 text-sm">ফাইনাল পরীক্ষায় স্ট্যান্ডার্ড নম্বর পেলে ফি ফেরত (প্রথম ১০ জন)</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-5 border-2 border-amber-300">
                        <p className="text-gray-900 font-bold mb-3">বিকাশ Send Money করুন:</p>
                        <p className="text-gray-800 mb-2">বিকাশ পার্সোনাল: <strong className="text-emerald-700 text-lg">01988468065</strong></p>
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-3">
                          <p className="text-emerald-900 text-sm font-semibold mb-1">রেফারেন্স লিখুন:</p>
                          <p className="text-emerald-700 font-mono text-lg font-bold">tabriahRP25</p>
                        </div>
                        <p className="text-gray-600 text-xs mt-3">⚠️ Send Money করার সময় রেফারেন্সে অবশ্যই <strong>tabriahRP25</strong> লিখবেন</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        যে নাম্বার থেকে Send Money করেছেন <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="bkashNumber"
                        value={formData.bkashNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="01XXXXXXXXX"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        ট্রানজেকশন আইডি (TrxID) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="transactionId"
                        value={formData.transactionId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="8A1B2C3D4E"
                        required
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        💡 বিকাশ মেসেজে পাওয়া TrxID লিখুন
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-bold text-lg transition-all"
                      >
                        পূর্ববর্তী
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg font-bold text-lg transition-all"
                      >
                        পরবর্তী
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Info */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">অতিরিক্ত তথ্য</h3>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        বয়স
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="আপনার বয়স"
                        min="10"
                        max="100"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        পেশা
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="ছাত্র / চাকরিজীবী / ব্যবসা"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        শিক্ষাগত যোগ্যতা
                      </label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="এসএসসি / এইচএসসি / স্নাতক"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        ঠিকানা
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="আপনার ঠিকানা লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        কুরআন পড়ার দক্ষতা <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="courseSource"
                        value={formData.courseSource}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        required
                      >
                        <option value="">নির্বাচন করুন</option>
                        <option value="beginner">শুরু পর্যায় (হরফ/মাখরাজ শিখছি)</option>
                        <option value="intermediate">মধ্যম পর্যায় (সূরা পড়তে পারি)</option>
                        <option value="advanced">উন্নত পর্যায় (নামাজ পড়তে পারি)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                        কেন এই কোর্সে যোগ দিতে চান?
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                        placeholder="আপনার উদ্দেশ্য লিখুন..."
                      />
                    </div>

                    <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 w-5 h-5 text-emerald-700 border-2 border-gray-300 rounded focus:ring-2 focus:ring-emerald-200"
                        />
                        <span className="text-gray-900 text-sm">
                          আমি নিয়মিত ক্লাসে উপস্থিত থাকার এবং কোর্সের নিয়মকানুন মেনে চলার অঙ্গীকার করছি। <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-bold text-lg transition-all"
                        disabled={loading}
                      >
                        পূর্ববর্তী
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-lg font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                      >
                        {loading ? 'সাবমিট হচ্ছে...' : 'সাবমিট করুন'}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
