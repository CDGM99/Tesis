import { productosApi } from "../services/InventarioServices";
import { almacenesApi } from "../services/AlmacenServices";
import { configureStore } from "@reduxjs/toolkit";
import { ordenesApi } from "../services/OrdenesServices";
import { pagoeApi } from "../services/PagoEServices";
import { pagopApi } from "../services/PagoPServices";
import { facturasiApi } from "../services/FacturasIServices";
import { salidaseApi } from "../services/SalidaseServices";
import { sendEmailApi } from "../services/send.email";
import { loginLogOutApi } from "../services/Seguridad";
import { graficaVentasApi } from "../services/GraficaVentas";
import { graficaProductosApi } from "../services/GraficaProductos";
import { usuariosApi } from "../services/Usuarios";
import { groupsApi } from "../services/Groups";

export const store = configureStore({
  reducer: {
    [almacenesApi.reducerPath]: almacenesApi.reducer,
    [productosApi.reducerPath]: productosApi.reducer,
    [ordenesApi.reducerPath]: ordenesApi.reducer,
    [pagoeApi.reducerPath]: pagoeApi.reducer,
    [pagopApi.reducerPath]: pagopApi.reducer,
    [facturasiApi.reducerPath]: facturasiApi.reducer,
    [salidaseApi.reducerPath]: salidaseApi.reducer,
    [sendEmailApi.reducerPath]: sendEmailApi.reducer,
    [loginLogOutApi.reducerPath]: loginLogOutApi.reducer,
    [graficaVentasApi.reducerPath]: graficaVentasApi.reducer,
    [graficaProductosApi.reducerPath]: graficaProductosApi.reducer,
    [usuariosApi.reducerPath]: usuariosApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      almacenesApi.middleware,
      productosApi.middleware,
      ordenesApi.middleware,
      pagoeApi.middleware,
      pagopApi.middleware,
      facturasiApi.middleware,
      salidaseApi.middleware,
      sendEmailApi.middleware,
      loginLogOutApi.middleware,
      graficaVentasApi.middleware,
      graficaProductosApi.middleware,
      usuariosApi.middleware,
      groupsApi.middleware,
    ]),
});

export default store;
