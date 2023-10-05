import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  min-h-screen w-full ">
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col h-auto w-auto">
          <div className="  flex flex-col py-32 ">
            <h1 className="text-center font-semibold text-[5rem] text-[#0280CA]">
              Bienvenido a Cubamodela
            </h1>
          </div>

          <div className=" flex flex-row justify-center items-center py-10 gap-36">
            <div className="flex justify-center">
              <Button
                variant="me"
                size="lg"
                onClick={() => navigate("/dashboard")}
              >
                Modulo Almacén
              </Button>
            </div>
            <div className="flex justify-center">
              <Button variant="me" size="lg" onClick={() => navigate("/dashe")}>
                Modulo Economía
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
