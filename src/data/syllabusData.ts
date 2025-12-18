// Course data structure
export interface ClassData {
  classNumber: number;
  date: string;
  videoLink?: string;
  resourceLink?: string;
  demoVideoLink?: string;
  demoResourceLink?: string;
  topics: {
    harf: string;
    prayers: string[];
    dua: string;
  };
}

export const syllabusData: ClassData[] = [
  {
    classNumber: 1,
    date: "২৪ জানুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "যাল য",
      prayers: ["আউজুবিল্লাহ", "বিসমিল্লাহ", "সানা সালাম তাকবীর"],
      dua: "ঘুমানোর দোয়া"
    }
  },
  {
    classNumber: 2,
    date: "২৫ জানুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "তা ত্ব",
      prayers: ["সূরা ফাতিহা"],
      dua: "ঘুম থেকে ওঠার দোয়া"
    }
  },
  {
    classNumber: 3,
    date: "৩১ জানুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "হা' গোল হা",
      prayers: ["সূরা আসর", "রুকুর তাসবীহ"],
      dua: "খাওয়া শুরু ও শেষের দোয়া"
    }
  },
  {
    classNumber: 4,
    date: "১ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "র  ক্বফ",
      prayers: ["সূরা ফীল", "সেজদার তাসবীহ"],
      dua: "ওযু শুরু ও শেষের দোয়া"
    }
  },
  {
    classNumber: 5,
    date: "৭ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "আইন",
      prayers: ["সূরা কুরাইশ", "সেজদার মধ্যবর্তী দোয়া"],
      dua: "এস্তেঞ্জায় যাওয়ার দোয়া"
    }
  },
  {
    classNumber: 6,
    date: "৮ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "আলিফ হামযাহ ইয়া",
      prayers: ["সূরা মাউন অর্ধেক", "আত্তাহিয়্যাতু ১/৩"],
      dua: "এস্তেঞ্জা থেকে বের হওয়ার দোয়া"
    }
  },
  {
    classNumber: 7,
    date: "১৪ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "বা মিম ফা",
      prayers: ["সূরা মাউন বাকি অর্ধেক", "আত্তাহিয়্যাতু ২/৩"],
      dua: "ঘরে প্রবেশের দোয়া"
    }
  },
  {
    classNumber: 8,
    date: "১৫ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "ছা সিন",
      prayers: ["সূরা কাউসার", "আত্তাহিয়্যাতু ফুল"],
      dua: "ঘর থেকে বের হওয়ার দোয়া"
    }
  },
  {
    classNumber: 9,
    date: "২১ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "জিম ঝা",
      prayers: ["সূরা কাফিরুন", "দূরূদ শরীফ অর্ধেক"],
      dua: "ইফতারের দোয়া"
    }
  },
  {
    classNumber: 10,
    date: "২২ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "দাল দোয়াদ",
      prayers: ["সুরা নাসর", "দূরূদ শরীফ ফুল"],
      dua: "মসজিদে প্রবেশের দোয়া"
    }
  },
  {
    classNumber: 11,
    date: "২৮ ফেব্রুয়ারি, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "কাফ লাম",
      prayers: ["সূরা লাহাব", "দোয়া মাসুরা অর্ধেক"],
      dua: "মসজিদ থেকে বের হওয়ার দোয়া"
    }
  },
  {
    classNumber: 12,
    date: "১ মার্চ, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "সোয়াদ",
      prayers: ["সুরা ইখলাস", "দোয়া মাসুরা ফুল"],
      dua: "সাইয়েদুল এস্তেগফার ১/২"
    }
  },
  {
    classNumber: 13,
    date: "৭ মার্চ, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "নুন ওয়াও",
      prayers: ["সূরা ফালাক", "দোয়ায়ে কুনুত ১/৩"],
      dua: "সাইয়েদুল এস্তেগফার ফুল"
    }
  },
  {
    classNumber: 14,
    date: "৮ মার্চ, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "ছা সিন",
      prayers: ["সূরা নাস", "দোয়ায়ে কুনুত ২/৩"],
      dua: "বিসমিল্লাহিল্লাযি"
    }
  },
  {
    classNumber: 15,
    date: "১৪ মার্চ, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "গইন খ",
      prayers: ["সূরা রিভিশন", "দোয়ায়ে কুনুত ফুল"],
      dua: "সকাল সন্ধার বাকি দোয়া"
    }
  },
  {
    classNumber: 16,
    date: "১৫ মার্চ, ২০২৫",
    videoLink: "",
    resourceLink: "",
    topics: {
      harf: "পরীক্ষা",
      prayers: ["সকল সূরা ও দোয়া রিভিশন"],
      dua: "সম্পূর্ণ কোর্স পরীক্ষা"
    }
  }
];
