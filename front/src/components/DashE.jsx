import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WelE from "../layouts/WelE";
import { Outlet, useLocation } from "react-router-dom";

const DashE = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row  min-h-screen w-full p-0 bg-[#ffffff]">
      {/* sidebar --------------------------------------------------------------------------------------------------------------------- */}
      {/* <div className="bg-slate-200 opacity-90 flex float-left w-auto min-h-screen gap-3 px-3  rounded-md">
        <Sidebar />
      </div> */}
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col h-auto w-auto">
          {/* navbar --------------------------------------------------------------------------------------------------------------------- */}
          <div className="bg-[#0280CA]  flex flex-col drop-shadow-2xl rounded-b-lg ">
            <Navbar
              links={[
                { name: "Inicio", url: "/dashe" },
                { name: "Graficas de ventas", url: "/dashe/barchart" },
                { name: "Ventas", url: "/dashe/ordenes" },
                { name: "Pago Embajadores", url: "/dashe/pagoe" },
                { name: "Pago Proveedores", url: "/dashe/pagop" },
                { name: "Facturas Internas", url: "/dashe/facturasi" },
                { name: "Salir", url: "/" },
              ]}
            />
          </div>
          {/* content --------------------------------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col ">
            {location.pathname === "/dashe" ? <WelE /> : <Outlet />}
          </div>
        </div>
        {/* footer --------------------------------------------------------------------------------------------------------------------- */}
        <div className="bg-slate-100 flex flex-col rounded-t-lg">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashE;
