import DeleteBtn from "@/src/components/deleteBtn";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const { topics } = await getTopics();

  return (
    <main className="py-4 flex flex-col gap-4">
      {topics.map((topic: any) => (
        <div
          key={topic._id}
          className="border border-lightGrayish rounded-lg p-4"
        >
          <div className="flex justify-between items-center gap-4">
            <h4 className="text-white text-opacity-80 text-3xl font-semibold">
              {topic.title}
            </h4>
            <div className="flex justify-center items-center gap-2">
              <DeleteBtn id={topic._id} />
              <Link href={`/edit-topic/${topic._id}`}>
                <MdEdit className="text-mainColor text-2xl" />
              </Link>
            </div>
          </div>
          <p className="text-base text-lightGrayish mt-2">
            {topic.description}
          </p>
        </div>
      ))}
    </main>
  );
}
