import mongoose, { Schema, Model } from 'mongoose';

export interface IClassData {
  classNumber: number;
  date?: string;
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

const ClassDataSchema = new Schema<IClassData>({
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
  demoVideoLink: {
    type: String,
    default: '',
  },
  demoResourceLink: {
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

const ClassData: Model<IClassData> = mongoose.models.ClassData || mongoose.model<IClassData>('ClassData', ClassDataSchema);

export default ClassData;
