import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ClassData from '@/models/ClassData';

// GET all classes
export async function GET() {
  try {
    await dbConnect();
    const classes = await ClassData.find({}).sort({ classNumber: 1 });
    return NextResponse.json({ success: true, data: classes });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch classes' },
      { status: 500 }
    );
  }
}

// POST - Create new class
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    const classData = await ClassData.create(body);
    return NextResponse.json({ success: true, data: classData }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create class' },
      { status: 400 }
    );
  }
}
