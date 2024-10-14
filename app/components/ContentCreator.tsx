import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaPlus, FaVideoSlash } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { PersonIcon } from "@radix-ui/react-icons";
import { Ellipsis } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AiFillCompass } from "react-icons/ai";
import { CiBellOn, CiCircleCheck, CiLink } from "react-icons/ci";
import Image from "next/image";
import Profile from "../../images/1.jpg";
import { FiSend } from "react-icons/fi";

const ContentCreator = () => {
  // Define your icons and headers in an array
  const blocks = [
    { icon: <PersonIcon />, header: "Header" },
    { icon: <AiFillCompass />, header: "Images" },
    { icon: <CiLink />, header: "Links" },
    { icon: <FaVideoSlash />, header: "Videos" },
  ];
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <Card
        className="xl:col-span-2 bg-white max-h-[500px] overflow-y-auto"
        x-chunk="dashboard-01-chunk-4"
      >
        <CardHeader className="flex flex-row items-center">
          <Button className="w-full p-7" style={{ background: "#153700" }}>
            <FaPlus className="mr-5" />
            Add Content Block
          </Button>
        </CardHeader>
        <CardContent>
          {blocks.map((block, index) => (
            <div
              key={index}
              className="px-5 py-5 border border-gray-200 rounded-lg mb-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                  <BiMenu /> {/* Same icon for all */}
                  <div className="text-green-900 text-lg">
                    {block.icon}
                  </div>{" "}
                  {/* Dynamic icon from the array */}
                  <h1>{block.header}</h1> {/* Dynamic header from the array */}
                </div>
                <div className="flex space-x-4 items-center cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Switch id={`switch-${index}`} />
                  </div>
                  <Ellipsis />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div x-chunk="dashboard-01-chunk-5 rounded-xl">
        <div
          className="rounded-t-md pb-10 mb-10"
          style={{ background: "#1e1e1e" }}
        >
          <div className="relative h-60 bg-repeat bg-cover w-full">
            <Image
              src={Profile}
              alt="profile-img"
              fill
              className="object-cover rounded-md"
            />
            <div className="flex justify-between text-white z-10 absolute px-10 py-10 items-center w-[100%]">
              <div className="flex">
                <Button className="bg-white text-green-900 rounded-full hover:bg-white hover:text-green-900">
                  <CiBellOn className="mr-2 text-lg text-green-900" />
                  Subscribe
                </Button>
              </div>
              <div className="flex ml-auto">
                <Button className="bg-white rounded-full hover:bg-white hover:text-green-900">
                  <FiSend className="text-lg text-green-900" />
                </Button>
              </div>
            </div>
            <h1 className="absolute bottom-5 text-white text-[24px] text-center w-[100%]">
              Joel Angel
            </h1>
          </div>
          <div className=" text-white px-10 mt-6">
            <h1 className="text-[21px] mb-2">Images</h1>
            <div
              className="items-center text-white px-5 py-5 rounded-xl"
              style={{ background: "#484848" }}
            >
              <div className="py-4 space-y-3 text-center">
                {/* Images Section */}
                <CiCircleCheck className="text-[80px] rounded-lg text-white mx-auto" />
                <h1 className="text-lg">Images</h1>
                <p className="text-sm text-nowrap">
                  Make it pop by adding some images
                </p>
              </div>
            </div>
          </div>
          {/* Links Section */}
          <div className="text-white px-10 mt-5">
            <h1 className="text-[21px] mb-2">Links</h1>
            <div
              className="items-center text-white px-5 py-10 rounded-xl"
              style={{ background: "#484848" }}
            >
              <div className="flex items-center rounded-md mb-5">
                <div className="bg-green-500 rounded p-2 mr-3">
                  <CiBellOn className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-white text-[15px]">Link1</p>
                  <p className="text-white text-sm text-nowrap">
                    Add a link to remove placeholder
                  </p>
                </div>
              </div>

              <div className="flex items-center rounded-md ">
                <div className="bg-green-500 rounded p-2 mr-3">
                  <CiBellOn className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium text-[15px]">Link2</p>
                  <p className="text-white text-sm text-nowrap">
                    Add a link to remove placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
