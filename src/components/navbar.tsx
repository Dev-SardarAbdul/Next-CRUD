import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-4 my-4 flex justify-between items-center gap-2">
      <Link href={"/"}>
        <h4 className="text-mainColor text-3xl font-semibold cursor-pointer">
          Fig Flow{" "}
        </h4>
      </Link>
      <Link href={"/add-topic"}>
        <button className="bg-mainColor rounded-lg px-4 py-2 text-white font-semibold">
          Add Topic
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
