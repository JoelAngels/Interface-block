import { AiFillOpenAI } from "react-icons/ai";

export const ContentBlock = () => {
  return (
    <div className="flex justify-between py-10 ">
      <div>
        <h1 className="text-[30px]" style={{ color: "#5f6062" }}>
          Content
        </h1>
      </div>
      <div className="flex text-black">
        <button className="px-7 border border-gray-300 rounded-lg py-3 flex items-center mr-5">
          <AiFillOpenAI className="mr-2" /> {/* Icon with right margin */}
          Joel.creator.io
        </button>
        <button
          className="px-7 border border-gray-400 rounded-lg py-3 flex items-center mr-5 text-white"
          style={{ background: "#858585" }}
        >
          <AiFillOpenAI className="mr-2" /> {/* Icon with right margin */}
          Copy
        </button>
        <button
          className="px-7 border border-gray-400 rounded-lg py-3 flex items-center mr-5 text-white"
          style={{ background: "#153700" }}
        >
          <AiFillOpenAI className="mr-2" /> {/* Icon with right margin */}
          Share
        </button>
      </div>
    </div>
  );
};
