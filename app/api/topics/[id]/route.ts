import Topic from "@/models/topic-model";
import connectDB from "@/src/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  try {
    await connectDB();
    const { id } = res.params;
    const topic = await Topic.findById(id);
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const DELETE = async (req: any, res: any) => {
  try {
    await connectDB();
    const { id } = res.params;
    await Topic.findByIdAndDelete({ _id: id });
    return NextResponse.json(
      { message: "Topic deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const PUT = async (req: any, res: any) => {
  try {
    await connectDB();
    const { id } = res.params;
    const { newTitle: title, newDescription: description } = await req.json();
    await Topic.findByIdAndUpdate({ _id: id }, { title, description });
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
