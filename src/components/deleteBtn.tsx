"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteBtn = ({ id }: { id: any }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Error deleting topic");
      }
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={handleDelete}>
      <MdDelete className="text-2xl text-red-500" />
    </button>
  );
};

export default DeleteBtn;
