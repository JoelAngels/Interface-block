import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaPlus, FaVideoSlash } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { PersonIcon } from "@radix-ui/react-icons";
import { Ellipsis } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AiFillCompass } from "react-icons/ai";
import { CiLink } from "react-icons/ci";

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
      <Card className="xl:col-span-2 bg-white" x-chunk="dashboard-01-chunk-4">
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
          {/* <div className="px-5 py-5 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <BiMenu />
                <PersonIcon />
                <h1>Header</h1>
              </div>
              <div className="flex space-x-4 items-center cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" className="text-red-500" />
                </div>
                <Ellipsis />
              </div>
            </div>
          </div> */}
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-5">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8">
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/02.png" alt="Avatar" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Jackson Lee</p>
              <p className="text-sm text-muted-foreground">
                jackson.lee@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/03.png" alt="Avatar" />
              <AvatarFallback>IN</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                Isabella Nguyen
              </p>
              <p className="text-sm text-muted-foreground">
                isabella.nguyen@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/04.png" alt="Avatar" />
              <AvatarFallback>WK</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">William Kim</p>
              <p className="text-sm text-muted-foreground">will@email.com</p>
            </div>
            <div className="ml-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/05.png" alt="Avatar" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Sofia Davis</p>
              <p className="text-sm text-muted-foreground">
                sofia.davis@email.com
              </p>
            </div>
            <div className="ml-auto font-medium">+$39.00</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentCreator;
