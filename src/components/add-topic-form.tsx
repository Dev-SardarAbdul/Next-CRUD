import React from "react";
import Label from "./label";

const AddTopicForm = () => {
  return (
    <div>
      <h4 className="text-white text-center text-opacity-80 text-3xl font-semibold">
        Add Topic
      </h4>

      <div className="mt-8">
        <Label text="Add title" />
        <input
          placeholder="Add title"
          className="w-full bg-transparent border border-borderDarkColor px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-30 mt-2"
        />
      </div>
      <div className="mt-8">
        <Label text="Add Description" />
        <input
          placeholder="Add Description"
          className="w-full bg-transparent border border-borderDarkColor px-4 h-12 placeholder:text-white placeholder:text-opacity-50 text-white outline-none rounded-[3px] focus:border-white focus:border-opacity-30 mt-2"
        />
      </div>

      <button className="bg-mainColor rounded-lg px-4 py-2 text-white font-semibold mt-8">
        Add Topic
      </button>
    </div>
  );
};

export default AddTopicForm;
