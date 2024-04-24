import UpdateTopicForm from "@/src/components/update-topic-form";
import React from "react";

const getTopic = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Page = async ({ params }: { params: any }) => {
  const { id } = params;
  const { topic } = await getTopic(id);
  const { title, description } = topic;

  return (
    <div className="max-w-2xl mx-auto my-4 border border-lightGrayish px-6 rounded-lg py-8">
      <UpdateTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default Page;
