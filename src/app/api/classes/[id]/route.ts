import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ClassData from '@/models/ClassData';

// GET single class
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const classData = await ClassData.findOne({ classNumber: parseInt(id) });
    
    if (!classData) {
      return NextResponse.json(
        { success: false, error: 'Class not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: classData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch class' },
      { status: 500 }
    );
  }
}

// PUT - Update class
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    
    const classData = await ClassData.findOneAndUpdate(
      { classNumber: parseInt(id) },
      body,
      { new: true, runValidators: true }
    );
    
    if (!classData) {
      return NextResponse.json(
        { success: false, error: 'Class not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: classData });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update class' },
      { status: 400 }
    );
  }
}

// DELETE class
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;
    const classData = await ClassData.findOneAndDelete({ classNumber: parseInt(id) });
    
    if (!classData) {
      return NextResponse.json(
        { success: false, error: 'Class not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete class' },
      { status: 500 }
    );
  }
}
