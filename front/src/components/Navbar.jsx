import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ links }) => {
  const path = useLocation();
  return (
    // hay que hacer otro div por fuera de los grandes de abajo
    <div className="flex flex-row justify-between ">
      <div className="grid grid-cols-2 gap-2 py-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="icon" size="sm">
              <Menu size={35} color="#ffffff" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col py-2">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        src="/WhatsApp Image 2023-09-14 at 3.35.22 AM (22).jpeg"
                        alt="hello"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col py-6 ">
                  {links?.map((el) => (
                    <Link key={el.url} to={el.url}>
                      <div
                        className={`h-12 items-center justify-center flex dark:text-[#2081F6] active:bg-[#216DDB] active:opacity-80 rounded-md active:text-blue-50 ${
                          path === el.url &&
                          "bg-slate-400/60 text-black font-normal"
                        }`}
                      >
                        {el.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <SheetFooter className={"w-auto"}>
                  <p className="text-[#313132] text-xs">
                    Contactenos en:
                    <span className="text-[#313132B2] text-xs font-semibold pl-1">
                      cubamodela.com
                    </span>
                  </p>
                </SheetFooter>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-row justify-end gap-2 px-6 py-3">
        <div className="flex">
          {path.pathname === "/dashboard" ? (
            ""
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
