import { useLoaderData } from "react-router-dom";
import { Lession } from "../../Type/Type";
import { useState } from "react";

export const Lessions = () => {
  const Lessions: Lession[] | any = useLoaderData();
  const [selectedL, setSelectedL] = useState(Lessions[0])
  return (
    <>
      <div className="pt-28 flex px-10">
        <div className="w-3/4">
          <video className="w-full mb-5" autoPlay controls>
            <source src={selectedL?.videoUrl} type="video/mp4" />
          </video>
          <div className="text-4xl font-light mb-3">{selectedL?.title}</div>
          <div className="text-2xl font-light">{selectedL?.content}</div>
        </div>
        <div className="w-1/4 h-screen overflow-x-scroll py-10 px-5 bg-neutral-200">
          {Lessions?.map((lession: Lession) => (
            <div onClick={() => setSelectedL(lession)} className={`px-5 mb-5 bg-white`}>
              <video className="w-full">
                <source src={lession.videoUrl} type="video/mp4" />
              </video>
              <hr className={`mt-5 ${lession===selectedL?"border-2 border-black":<></>}`} />
              <div className="text-center text-xl font-bold">
                {lession.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
