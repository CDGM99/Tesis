import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Almacenes from "./layouts/Almacenes";
import Inventario from "./layouts/Inventario";
import Ordenes from "./layouts/Ordenes";
import Inicio from "./components/Inicio";
import DashE from "./components/DashE";
import PagoE from "./layouts/PagoE";
import PagoP from "./layouts/PagoP";
import Facturasi from "./layouts/FacturasI";
import Salidase from "./layouts/Salidase";
import NewAlmacen from "./layouts/Almacenes/new.almacen";
import NewFacturasi from "./layouts/Facturas Internas/new.facturasi";
import NewPagop from "./layouts/PagoP/new.pagop";
import NewPagoe from "./layouts/PagoE/new.pagoe";
import NewOrden from "./layouts/Ordenes/new.orden";
import NewProducto from "./layouts/Inventario/new.inventario";
import TablaMensual from "./layouts/TablaMensual";
import TablaProductos from "./layouts/TablaProductos";
import Usuarios from "./layouts/Usuarios";
import NewUsuario from "./layouts/Usuarios/new.usuarios";
import NewSalidase from "./layouts/SalidasE/new.salidase";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Inicio />} />
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />

      <Route path="/dashe" element={<DashE />}>
        {""}
        <Route path="ordenes" element={<Ordenes />}></Route>
        <Route path="ordenes/create" element={<NewOrden />}></Route>
        <Route path="ordenes/edit/:id" element={<NewOrden />}></Route>
        <Route path="pagoe" element={<PagoE />}></Route>
        <Route path="pagoe/create" element={<NewPagoe />}></Route>
        <Route path="pagoe/edit/:id" element={<NewPagoe />}></Route>
        <Route path="pagop" element={<PagoP />}></Route>
        <Route path="pagop/create" element={<NewPagop />}></Route>
        <Route path="pagop/edit/:id" element={<NewPagop />}></Route>
        <Route path="facturasi" element={<Facturasi />}></Route>
        <Route path="facturasi/create" element={<NewFacturasi />}></Route>
        <Route path="facturasi/edit/:id" element={<NewFacturasi />}></Route>
        <Route path="tablamensual" element={<TablaMensual />}></Route>
      </Route>

      <Route path="/dashboard" element={<Dashboard />}>
        {" "}
        <Route path="almacenes" element={<Almacenes />}></Route>
        <Route path="almacenes/create" element={<NewAlmacen />}></Route>
        <Route path="almacenes/edit/:id" element={<NewAlmacen />}></Route>
        <Route path="inventario" element={<Inventario />}></Route>
        <Route path="inventario/create" element={<NewProducto />}></Route>
        <Route path="inventario/edit/:id" element={<NewProducto />}></Route>
        <Route path="ordenes" element={<Ordenes />}></Route>
        <Route path="ordenes/create" element={<NewOrden />}></Route>
        <Route path="ordenes/edit/:id" element={<NewOrden />}></Route>
        <Route path="salidase" element={<Salidase />}></Route>
        <Route path="salidase/create" element={<NewSalidase />}></Route>
        <Route path="salidase/edit/:id" element={<NewSalidase />}></Route>
        <Route path="tablaproductos" element={<TablaProductos />}></Route>
      </Route>
      <Route path="usuarios" element={<Usuarios />}></Route>
      <Route path="usuarios/edit/:id" element={<NewUsuario />}></Route>
      <Route path="usuarios/create" element={<NewUsuario />}></Route>
    </Routes>
  );
}

export default App;
