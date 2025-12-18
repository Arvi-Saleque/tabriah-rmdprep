'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

interface ClassData {
  _id?: string;
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

interface Registration {
  _id: string;
  name: string;
  email: string;
  phone: string;
  bkashNumber?: string;
  transactionId?: string;
  age?: number;
  occupation?: string;
  education?: string;
  address?: string;
  courseSource?: string;
  motivation?: string;
  status: 'pending' | 'approved' | 'rejected';
  registrationDate: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'classes' | 'registrations'>('classes');
  const [editingClass, setEditingClass] = useState<ClassData | null>(null);
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'ramadan2025';

  useEffect(() => {
    if (isAuthenticated) {
      fetchClasses();
      fetchRegistrations();
    }
  }, [isAuthenticated]);

  const fetchClasses = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/classes');
      const result = await response.json();
      if (result.success) {
        setClasses(result.data);
      }
    } catch (error) {
      console.error('Failed to fetch classes:', error);
      setNotification('ডেটা লোড করতে ব্যর্থ');
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/registrations');
      const result = await response.json();
      if (result.success) {
        setRegistrations(result.data);
        setRegistrationCount(result.count || result.data.length);
      }
    } catch (error) {
      console.error('Failed to fetch registrations:', error);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setNotification('সফলভাবে লগইন হয়েছে');
      setTimeout(() => setNotification(''), 2000);
    } else {
      setNotification('ভুল পাসওয়ার্ড');
      setTimeout(() => setNotification(''), 2000);
    }
  };

  const handleEdit = (classItem: ClassData) => {
    setEditingClass({ ...classItem });
  };

  const handleSave = async () => {
    if (editingClass) {
      setLoading(true);
      try {
        const response = await fetch(`/api/classes/${editingClass.classNumber}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editingClass),
        });

        const result = await response.json();
        
        if (result.success) {
          setNotification('সফলভাবে সংরক্ষিত হয়েছে');
          setTimeout(() => setNotification(''), 2000);
          setEditingClass(null);
          fetchClasses(); // Refresh the list
        } else {
          setNotification('সংরক্ষণ করতে ব্যর্থ');
        }
      } catch (error) {
        console.error('Failed to save:', error);
        setNotification('সংরক্ষণ করতে ব্যর্থ');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    if (editingClass) {
      setEditingClass({ ...editingClass, [field]: value });
    }
  };

  const updateRegistrationStatus = async (id: string, status: 'pending' | 'approved' | 'rejected') => {
    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();
      
      if (result.success) {
        setNotification(`স্ট্যাটাস ${status === 'approved' ? 'অনুমোদিত' : status === 'rejected' ? 'প্রত্যাখ্যাত' : 'পেন্ডিং'} হয়েছে`);
        setTimeout(() => setNotification(''), 2000);
        fetchRegistrations(); // Refresh the list
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      setNotification('আপডেট করতে ব্যর্থ');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">অ্যাডমিন প্যানেল</h2>
            <p className="text-gray-600">লগইন করতে পাসওয়ার্ড দিন</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-900 font-semibold mb-2">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-emerald-700 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                placeholder="পাসওয়ার্ড লিখুন"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-bold transition-all"
            >
              লগইন করুন
            </button>
          </form>

          {notification && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-center">
              {notification}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-white">
      <Navbar />

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-xl">
          {notification}
        </div>
      )}

      {/* Admin Header */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-white max-w-6xl mx-auto">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">অ্যাডমিন প্যানেল</h1>
              <p className="text-lg md:text-xl text-emerald-100">কোর্স ও রেজিস্ট্রেশন ম্যানেজমেন্ট</p>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              লগআউট
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-8 max-w-6xl mx-auto">
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'classes'
                  ? 'bg-white text-emerald-800'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              ক্লাস ম্যানেজমেন্ট
            </button>
            <button
              onClick={() => setActiveTab('registrations')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
                activeTab === 'registrations'
                  ? 'bg-white text-emerald-800'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              রেজিস্ট্রেশন ({registrationCount})
              {registrations.filter(r => r.status === 'pending').length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                  {registrations.filter(r => r.status === 'pending').length}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-emerald-700 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">লোড হচ্ছে...</p>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto space-y-4">
            {/* Classes Tab */}
            {activeTab === 'classes' && (
              <>
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
                  <p className="text-gray-800">
                    <strong>নোট:</strong> পরিবর্তন সরাসরি ডেটাবেসে সেভ হবে।
                  </p>
                </div>

                <div className="space-y-6">
                  {classes.map((classItem) => (
                    <div
                      key={classItem.classNumber}
                      className="bg-white rounded-xl shadow-lg border-l-4 border-emerald-700 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            ক্লাস {classItem.classNumber}
                          </h3>
                          <button
                            onClick={() => handleEdit(classItem)}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                          >
                            এডিট করুন
                          </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                      <div><strong>তারিখ:</strong> {classItem.date}</div>
                      <div><strong>হরফ:</strong> {classItem.topics.harf}</div>
                      <div><strong>ভিডিও:</strong> {classItem.videoLink || 'যুক্ত করা হয়নি'}</div>
                      <div><strong>রিসোর্স:</strong> {classItem.resourceLink || 'যুক্ত করা হয়নি'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              </>
            )}

            {/* Registrations Tab */}
            {activeTab === 'registrations' && (
              <>
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">রেজিস্ট্রেশন সামারি</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-600">মোট</p>
                      <p className="text-3xl font-bold text-gray-900">{registrationCount}</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-yellow-800">পেন্ডিং</p>
                      <p className="text-3xl font-bold text-yellow-900">
                        {registrations.filter(r => r.status === 'pending').length}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800">অনুমোদিত</p>
                      <p className="text-3xl font-bold text-green-900">
                        {registrations.filter(r => r.status === 'approved').length}
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800">প্রত্যাখ্যাত</p>
                      <p className="text-3xl font-bold text-red-900">
                        {registrations.filter(r => r.status === 'rejected').length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-emerald-700 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left">নাম</th>
                          <th className="px-4 py-3 text-left">ফোন</th>
                          <th className="px-4 py-3 text-left">ইমেইল</th>
                          <th className="px-4 py-3 text-left">বিকাশ নম্বর</th>
                          <th className="px-4 py-3 text-left">TrxID</th>
                          <th className="px-4 py-3 text-left">বয়স</th>
                          <th className="px-4 py-3 text-left">পেশা</th>
                          <th className="px-4 py-3 text-left">শিক্ষা</th>
                          <th className="px-4 py-3 text-left">দক্ষতা</th>
                          <th className="px-4 py-3 text-left">উদ্দেশ্য</th>
                          <th className="px-4 py-3 text-left">স্ট্যাটাস</th>
                          <th className="px-4 py-3 text-left">ভেরিফাইড</th>
                        </tr>
                      </thead>
                      <tbody>
                        {registrations.map((reg, index) => (
                          <tr key={reg._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-4 py-3 font-semibold">{reg.name}</td>
                            <td className="px-4 py-3">{reg.phone}</td>
                            <td className="px-4 py-3 text-sm">{reg.email}</td>
                            <td className="px-4 py-3">{reg.bkashNumber || '-'}</td>
                            <td className="px-4 py-3 text-sm">{reg.transactionId || '-'}</td>
                            <td className="px-4 py-3">{reg.age || '-'}</td>
                            <td className="px-4 py-3 text-sm">{reg.occupation || '-'}</td>
                            <td className="px-4 py-3 text-sm">{reg.education || '-'}</td>
                            <td className="px-4 py-3 text-sm">
                              {reg.courseSource === 'beginner' ? 'শুরু পর্যায়' : 
                               reg.courseSource === 'intermediate' ? 'মধ্যম পর্যায়' : 
                               reg.courseSource === 'advanced' ? 'উন্নত পর্যায়' : '-'}
                            </td>
                            <td className="px-4 py-3 max-w-xs truncate text-sm">
                              {reg.motivation || '-'}
                            </td>
                            <td className="px-4 py-3">
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                reg.status === 'approved' 
                                  ? 'bg-green-100 text-green-800' 
                                  : reg.status === 'rejected'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {reg.status === 'approved' ? 'অনুমোদিত' : reg.status === 'rejected' ? 'প্রত্যাখ্যাত' : 'পেন্ডিং'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <button
                                onClick={() => updateRegistrationStatus(reg._id, reg.status === 'approved' ? 'pending' : 'approved')}
                                className={`${
                                  reg.status === 'approved'
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-gray-300 hover:bg-emerald-600'
                                } text-white px-4 py-2 rounded transition-all flex items-center justify-center`}
                                title={reg.status === 'approved' ? 'ভেরিফাই বাতিল করুন' : 'ভেরিফাই করুন'}
                              >
                                {reg.status === 'approved' ? '✓' : '○'}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {registrations.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      কোনো রেজিস্ট্রেশন পাওয়া যায়নি
                    </div>
                  )}
                </div>
              </>
            )}
            </div>
          )}
        </div>
      </section>

      {/* Edit Modal */}
      {editingClass && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-emerald-700 text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">ক্লাস {editingClass.classNumber} এডিট করুন</h3>
              <button
                onClick={() => setEditingClass(null)}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">তারিখ</label>
                <input
                  type="text"
                  value={editingClass.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                  placeholder="যেমন: ২৪ জানুয়ারি, ২০২৫"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">ভিডিও লিংক</label>
                <input
                  type="url"
                  value={editingClass.videoLink || ''}
                  onChange={(e) => handleChange('videoLink', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                  placeholder="https://youtube.com/..."
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">রিসোর্স লিংক</label>
                <input
                  type="url"
                  value={editingClass.resourceLink || ''}
                  onChange={(e) => handleChange('resourceLink', e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                  placeholder="https://drive.google.com/..."
                />
              </div>

              {/* Demo Section */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 space-y-4">
                <h4 className="text-lg font-bold text-amber-800 flex items-center gap-2">
                  <span>🎬</span>
                  ডেমো ক্লাস লিংক
                </h4>
                
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">ডেমো ভিডিও লিংক</label>
                  <input
                    type="url"
                    value={editingClass.demoVideoLink || ''}
                    onChange={(e) => handleChange('demoVideoLink', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                    placeholder="https://youtube.com/..."
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">ডেমো রিসোর্স লিংক</label>
                  <input
                    type="url"
                    value={editingClass.demoResourceLink || ''}
                    onChange={(e) => handleChange('demoResourceLink', e.target.value)}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                    placeholder="https://drive.google.com/..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">হরফ</label>
                <input
                  type="text"
                  value={editingClass.topics.harf}
                  onChange={(e) => setEditingClass({
                    ...editingClass,
                    topics: { ...editingClass.topics, harf: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">দোয়া</label>
                <input
                  type="text"
                  value={editingClass.topics.dua}
                  onChange={(e) => setEditingClass({
                    ...editingClass,
                    topics: { ...editingClass.topics, dua: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-emerald-700 outline-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg font-bold transition-all"
                >
                  সংরক্ষণ করুন
                </button>
                <button
                  onClick={() => setEditingClass(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg font-bold transition-all"
                >
                  বাতিল করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 রমজানের প্রস্তুতি কোর্স - অ্যাডমিন প্যানেল</p>
        </div>
      </footer>
    </div>
  );
}
