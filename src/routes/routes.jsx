import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import NuestrasMarcas from "../pages/home/NuestrasMarcas";
import Ofertas from "../pages/home/Ofertas";
import Bebidas from "../pages/home/Bebidas";
import Alimentos from "../pages/home/Alimentos";
import AcercaDe from "../pages/home/acercade";
import Error from "../pages/error/error";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import HomeCatalogs from "../pages/catalogs";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "acercade",
        element: <AcercaDe />,
      },
      {
        path: "products",
        element: <HomeCatalogs/>
      },
      {
        path: "NuestrasMarcas",
        element: <NuestrasMarcas/>
      },
      {
        path: "Ofertas",
        element: <Ofertas/>
      },
      {
        path: "Bebidas",
        element: <Bebidas/>
      },
      {
        path: "Alimentos",
        element: <Alimentos/>
      },
    ],
  },
{
  path: "/login",
  element: <Login />,
},
{
  path: "/register",
  element: <Register />,
},
{
  path: "*",
  element: <Error />,
},
]);