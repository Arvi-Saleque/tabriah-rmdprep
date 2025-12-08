import mongoose, { Schema, Model } from 'mongoose';

export interface IRegistration {
  // Step 1: Basic Info
  name: string;
  email: string;
  phone: string;
  
  // Step 2: Payment Info
  bkashNumber?: string;
  transactionId?: string;
  
  // Step 3: Additional Info
  age?: number;
  occupation?: string;
  education?: string;
  address?: string;
  courseSource?: string;
  motivation?: string;
  
  // Metadata
  registrationDate: Date;
  status: 'pending' | 'approved' | 'rejected';
}

const RegistrationSchema = new Schema<IRegistration>({
  // Step 1
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  
  // Step 2: Payment
  bkashNumber: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  
  // Step 3: Additional Info
  age: {
    type: Number,
  },
  occupation: {
    type: String,
  },
  education: {
    type: String,
  },
  address: {
    type: String,
  },
  courseSource: {
    type: String,
  },
  motivation: {
    type: String,
  },
  
  // Metadata
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

const Registration: Model<IRegistration> = mongoose.models.Registration || mongoose.model<IRegistration>('Registration', RegistrationSchema);

export default Registration;
