import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import NuestrasMarcas from "../pages/home/NuestrasMarcas";
import Ofertas from "../pages/home/Ofertas";
import Bebidas from "../pages/home/Bebidas";
import Alimentos from "../pages/home/Alimentos";
import AcercaDe from "../pages/home/Acercade";
import Error from "../pages/error/error";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import HomeDash from '../PagesDash/HomeDash';
import MarcasDash from "../PagesDash/MarcasDash";
import ClientesDash from "../PagesDash/ClientesDash";
import CategoriasDash from "../PagesDash/CategoriasDash";
import ProductosDash from "../PagesDash/ProductosDash";

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
        path: "nuestrasMarcas",
        element: <NuestrasMarcas/>
      },
      {
        path: "ofertas",
        element: <Ofertas/>
      },
      {
        path: "bebidas",
        element: <Bebidas/>
      },
      {
        path: "alimentos",
        element: <Alimentos/>
      },
      {
        path: "/productos",  
        element: <HomeDash />,
      },
      {
        path: "/homedash",  
        element: <HomeDash />,
      },
      {
        path: "/marcasdash",  
        element: <MarcasDash/>,
      },
      {
        path: "/clientesdash",  
        element: <ClientesDash/>,
      },
      {
        path: "/categoriasdash",  
        element: <CategoriasDash/>,
      },      
      {
        path: "/productosdash",  
        element: <ProductosDash/>,
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