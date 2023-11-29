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
import { LogOut, Menu, Reply } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../services/Seguridad";
import useUser from "../hooks/user";
import { Separator } from "./ui/separator";

const Navbar = ({ links }) => {
  const path = useLocation();
  const [logout, { isError, isSuccess, isLoading, error }] =
    useLogoutMutation();
  const navigate = useNavigate();
  const [user] = useUser();

  return (
    <div className="flex flex-row justify-between ">
      <div className="grid grid-cols-2 gap-2 py-3">
        {user.groups[0] === 1 ||
        user.groups[0] === 2 ||
        user.groups[0] === 3 ? (
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
                      <div className="flex gap-2 items-center justify-center pr-4">
                        <img
                          src="/CBM_1.png"
                          alt="hello"
                          className=" h-[50px]"
                        />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col py-6 pt-16">
                    {links?.map((el) => (
                      <Link key={el.url} to={el.url}>
                        <div
                          className={`h-12 py-[1.6rem] items-center justify-center flex dark:text-[#2081F6] active:bg-[#216DDB] active:opacity-80 rounded-md active:text-blue-50 text-xl ${
                            path === el.url &&
                            "bg-slate-400/60 text-black font-normal"
                          }`}
                          onClick={() => {
                            if (el.url === "/") {
                              return logout();
                            }
                          }}
                        >
                          {el.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <SheetFooter className={"w-auto"}>
                    <p className="text-[#313132] text-sm">
                      Contactenos en:
                      <a
                        href="https://cbmtienda.com/contacto/"
                        class="text-[#313132B2] text-sm font-semibold pl-1"
                      >
                        cbmtienda.com
                      </a>
                    </p>
                  </SheetFooter>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row justify-end gap-2 px-2 py-3">
        <div className="flex">
          {user.groups[0] === 1 ? (
            <Button
              variant="icon"
              size="sm"
              onClick={() => navigate("/inicio")}
            >
              <Reply size={35} color="#ffffff" />
            </Button>
          ) : (
            <Button
              variant="icon"
              size="sm"
              onClick={() => {
                return navigate(`/`), logout();
              }}
            >
              <LogOut size={35} color="#ffffff" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
