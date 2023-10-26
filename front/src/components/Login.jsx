import { useStatee } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../services/Seguridad";
import { useLazyGetUsuariosByIdQuery } from "../services/Usuarios";
import useUser from "../hooks/user";

const Login = () => {
  const navigate = useNavigate();
  const [saveUser] = useUser();
  const [getUsuarioById, { data: usuario }] = useLazyGetUsuariosByIdQuery();
  const [
    login,
    {
      isError: isErrorD,
      isLoading: isLoadingD,
      isSuccess: isSuccessD,
      error: errorD,
    },
  ] = useLoginMutation();

  const handleSubmit = async (values) => {
    login(values).then((resp) => {
      if (resp.data.user) {
        getUsuarioById(
          resp.data.user.pk + "?timestamp=" + new Date().getTime()
        ).then((res) => {
          sessionStorage.setItem("user", JSON.stringify(res.data));
          if (res.data && res.data.groups) {
            switch (res.data.groups[0]) {
              case 1: // Comparar con valores numéricos en lugar de "1"
                return navigate("/inicio");

              case 2: // Comparar con valores numéricos en lugar de "2"
                return navigate("/dashboard");

              case 3: // Comparar con valores numéricos en lugar de "3"
                return navigate("/dashe");

              case 4: // Comparar con valores numéricos en lugar de "4"
                return navigate("/dashboard/inventario");

              default:
                console.log("Correo electrónico no reconocido");
            }
          }
        });
      }

      if (isErrorD) {
        console.log(errorD);
      }
    });
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 mt-48 lg:px-8">
      <div className="flex gap-2 items-center justify-center pr-4">
        <img src="/CBM_1.png" alt="hello" className=" h-[50px]" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia con tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {formik.errors.password}
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Entrar
            </button>
            {errorD &&
              Object.values(errorD.data)
                .flat()
                .map((errorMsg, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full text-center mt-3 mb-3 text-red-600"
                    >
                      <p>Usuario o contraseña incorrectos</p>
                    </div>
                  );
                })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
