import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Welcome from "../layouts/Welcome";
import { Outlet, useLocation } from "react-router-dom";
import useUser from "../hooks/user";

const Dashboard = () => {
  const [user] = useUser();

  const location = useLocation();
  const enlacesNegocio = [{ name: "Salir", url: "/" }];
  const enlaces = [
    { name: "Inicio", url: "/dashboard" },
    { name: "Inventario", url: "/dashboard/inventario" },
    { name: "Almacenes", url: "/dashboard/almacenes" },
    { name: "Pre despacho", url: "/dashboard/ordenes" },
    { name: "Salidas Especiales", url: "/dashboard/salidase" },
    { name: "Gráfica de ventas", url: "/dashboard/tablaproductos" },
    { name: "Salir", url: "/" },
  ];

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
            {user.groups[0] === 4 ? (
              <Navbar links={enlacesNegocio} />
            ) : (
              <Navbar links={enlaces} />
            )}
          </div>
          {/* content --------------------------------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col">
            {location.pathname === "/dashboard" ? <Welcome /> : <Outlet />}
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

export default Dashboard;
