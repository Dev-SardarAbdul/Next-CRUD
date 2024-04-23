import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteBtn = () => {
  return (
    <button>
      <MdDelete className="text-2xl text-red-500" />
    </button>
  );
};

export default DeleteBtn;
