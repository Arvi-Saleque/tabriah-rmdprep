import mongoose from 'mongoose';
import { syllabusData } from '../src/data/syllabusData.js';

const MONGODB_URI = 'mongodb+srv://alifsalekas_db_user:ui7f2hGrjINXHFFN@dha-cluster.pcvzzmx.mongodb.net/ramadan-prep';

interface IClassData {
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

const ClassDataSchema = new mongoose.Schema<IClassData>({
  classNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    default: '',
  },
  videoLink: {
    type: String,
    default: '',
  },
  resourceLink: {
    type: String,
    default: '',
  },
  topics: {
    harf: {
      type: String,
      required: true,
    },
    prayers: {
      type: [String],
      required: true,
    },
    dua: {
      type: String,
      required: true,
    },
  },
}, {
  timestamps: true,
});

const ClassData = mongoose.models.ClassData || mongoose.model<IClassData>('ClassData', ClassDataSchema);

async function seedDatabase() {
  try {
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await ClassData.deleteMany({});
    console.log('✅ Existing data cleared');

    // Insert seed data
    console.log('📝 Inserting seed data...');
    await ClassData.insertMany(syllabusData);
    console.log('✅ Seed data inserted successfully!');

    console.log(`\n📊 Total classes inserted: ${syllabusData.length}`);
    
    // Verify the data
    const count = await ClassData.countDocuments();
    console.log(`✅ Verified: ${count} classes in database`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
}

seedDatabase();
