import Topic from "@/models/topic-model";
import connectDB from "@/src/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const POST = async (req: any) => {
  try {
    const { title, description } = await req.json();
    await connectDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created!" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
