import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Registration from '@/models/Registration';

// GET all registrations
export async function GET() {
  try {
    await dbConnect();
    const registrations = await Registration.find({}).sort({ registrationDate: -1 });
    const count = await Registration.countDocuments();
    
    return NextResponse.json({ 
      success: true, 
      data: registrations,
      count: count
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch registrations' },
      { status: 500 }
    );
  }
}

// POST - Create new registration
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const registration = await Registration.create(body);
    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create registration' },
      { status: 400 }
    );
  }
}
