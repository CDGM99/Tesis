import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Receipt, Reply, UserCog, Warehouse } from "lucide-react";
import { useLogoutMutation } from "../services/Seguridad";

const Inicio = () => {
  const navigate = useNavigate();
  const [logout, { isError, isSuccess, isLoading, error }] =
    useLogoutMutation();
  return (
    <div className="flex flex-row  min-h-screen w-full ">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col h-auto w-auto">
          <div className="  flex flex-col py-32 gap-5">
            <div className="flex items-center justify-center py-10 pr-4">
              <img src="/CBM_1.png" alt="hello" className=" h-[75px]" />
            </div>
            <h1 className="text-center font-semibold text-[2rem] text-[#0280CA]">
              Selecciona el portal al que deseas acceder.
            </h1>
          </div>
          <div className=" flex flex-row justify-center items-center py-10 gap-36">
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                <span className="flex justify-center items-center flex-col">
                  <Warehouse size={60} color="#0280CA" />
                  <p className="text-[#0280CA] text-lg">Almacén</p>
                </span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/dashe")}
              >
                <span className="flex justify-center items-center flex-col">
                  <Receipt size={60} color="#0280CA" />
                  <p className="text-[#0280CA] text-lg">Economía</p>
                </span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => navigate("/usuarios")}
              >
                <span className="flex justify-center items-center flex-col">
                  <UserCog size={60} color="#0280CA" />
                  <p className="text-[#0280CA] text-lg">Usuarios</p>
                </span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  return navigate(`/`), logout();
                }}
              >
                <span className="flex justify-center items-center flex-col">
                  <LogOut size={60} color="#0280CA" />
                  <p className="text-[#0280CA] text-lg">Salir</p>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-center bg-no-repeat bg-cover h-[100px] bg-[url('/navbar.jpeg')]" />
      </div>
    </div>
  );
};

export default Inicio;
