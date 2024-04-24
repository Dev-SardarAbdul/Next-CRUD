"use client";
import React, { useState } from "react";
import Label from "./label";
import { useRouter } from "next/navigation";

const UpdateTopicForm = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!newTitle || !newDescription) {
        alert("Title or description is required");
        return;
      }

      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("failed to update topic");
      }
      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4 className="text-white text-center text-opacity-80 text-3xl font-semibold">
        Update Topic
      </h4>

      <div className="mt-8">
        <Label text="Add title" />
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add title"
          className="w-full bg-transparent border border-lightGrayish px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-80 mt-2"
        />
      </div>
      <div className="mt-8">
        <Label text="Add Description" />
        <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Add Description"
          className="w-full bg-transparent border border-lightGrayish px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-80 mt-2"
        />
      </div>

      <button
        onClick={handleFormSubmit}
        className="bg-mainColor rounded-lg px-4 py-2 text-white font-semibold mt-8"
      >
        Update Topic
      </button>
    </div>
  );
};

export default UpdateTopicForm;
