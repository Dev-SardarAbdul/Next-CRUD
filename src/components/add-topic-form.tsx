"use client";
import React, { useState } from "react";
import Label from "./label";
import { useRouter } from "next/navigation";

const AddTopicForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!title || !description) {
        alert("Title and description are required");
        return;
      }
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error("Error creating topic.");
      }
      if (res.ok) {
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4 className="text-white text-center text-opacity-80 text-3xl font-semibold">
        Add Topic
      </h4>

      <div className="mt-8">
        <Label text="Add title" />
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Add title"
          className="w-full bg-transparent border border-lightGrayish px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-80 mt-2"
        />
      </div>
      <div className="mt-8">
        <Label text="Add Description" />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Add Description"
          className="w-full bg-transparent border border-lightGrayish px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-80 mt-2"
        />
      </div>

      <button
        onClick={handleFormSubmit}
        className="bg-mainColor rounded-lg px-4 py-2 text-white font-semibold mt-8"
      >
        Add Topic
      </button>
    </div>
  );
};

export default AddTopicForm;
