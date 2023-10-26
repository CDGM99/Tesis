import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  min-h-screen w-full ">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col h-auto w-auto">
          <div className="  flex flex-col py-32 gap-5">
            <div className="flex items-center justify-center py-10 pr-4">
              <img src="/CBM_1.png" alt="hello" className=" h-[75px]" />
            </div>
            <h1 className="text-center font-semibold text-[2rem] text-[#0280CA]">
              Selecciona el módulo al que deseas acceder.
            </h1>
          </div>
          <div className=" flex flex-row justify-center items-center py-10 gap-36">
            <div className="flex justify-center">
              <Button
                variant="me"
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                Almacén
              </Button>
            </div>
            {/* <div className="flex justify-center">
              <Button variant="me" size="lg" onClick={() => navigate("/dashe")}>
                Economía
              </Button>
            </div> */}
            <div className="flex justify-center">
              <Button
                variant="me"
                size="lg"
                onClick={() => navigate("/usuarios")}
              >
                Usuarios
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
