import { productosApi } from "../services/InventarioServices";
import { almacenesApi } from "../services/AlmacenServices";
import { configureStore } from "@reduxjs/toolkit";
import { ordenesApi } from "../services/OrdenesServices";
import { pagoeApi } from "../services/PagoEServices";
import { pagopApi } from "../services/PagoPServices";
import { facturasiApi } from "../services/FacturasIServices";

export const store = configureStore({
  reducer: {
    [almacenesApi.reducerPath]: almacenesApi.reducer,
    [productosApi.reducerPath]: productosApi.reducer,
    [ordenesApi.reducerPath]: ordenesApi.reducer,
    [pagoeApi.reducerPath]: pagoeApi.reducer,
    [pagopApi.reducerPath]: pagopApi.reducer,
    [facturasiApi.reducerPath]: facturasiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      almacenesApi.middleware,
      productosApi.middleware,
      ordenesApi.middleware,
      pagoeApi.middleware,
      pagopApi.middleware,
      facturasiApi.middleware,
    ]),
});

export default store;