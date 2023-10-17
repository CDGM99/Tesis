import React from "react";
import TablaMensual from "../layouts/TablaMensual";
import TablaProductos from "../layouts/TablaProductos";

export function BarChart() {
  return (
    <div className="flex py-48 h-full w-full justify-center items-center">
      <div className="p-4 w-1/2 flex ">
        <TablaMensual />
      </div>
      <div className="p-4 w-1/2 flex ">
        <TablaProductos />
      </div>
    </div>
  );
}
