import DeleteBtn from "@/src/components/deleteBtn";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

export default function Home() {
  return (
    <main className="py-4 flex flex-col gap-4">
      <div className="border border-lightGrayish rounded-lg p-4">
        <div className="flex justify-between items-center gap-4">
          <h4 className="text-white text-opacity-80 text-3xl font-semibold">
            Title
          </h4>
          <div className="flex justify-center items-center gap-2">
            <DeleteBtn />
            <Link href={"/edit-topic/123"}>
              <MdEdit className="text-mainColor text-2xl" />
            </Link>
          </div>
        </div>
        <p className="text-base text-lightGrayish mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          laudantium reiciendis aliquam blanditiis deleniti quo! Assumenda ipsam
          voluptates debitis eligendi rerum, consequuntur ab fugit in doloremque
          maxime aliquid adipisci unde necessitatibus officiis inventore
          incidunt, ipsa illo laudantium! Tempore possimus earum alias
          reiciendis, maxime ullam iste, enim facilis temporibus obcaecati nam
          architecto adipisci commodi exercitationem! Dicta quidem eveniet
          obcaecati, laborum vel tempore? Excepturi animi optio delectus,
          obcaecati dolores a culpa voluptatum, eaque ratione vero assumenda
          autem nam. Eaque eligendi eius repellendus molestiae necessitatibus
          quis odit, labore sit. Nulla ducimus, eum quia placeat, soluta sunt
          voluptatem quisquam, fuga veniam reiciendis a tenetur.
        </p>
      </div>
    </main>
  );
}
