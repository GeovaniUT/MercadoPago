import { Link } from "react-router-dom";
import CardMarcas from "../../components/CardMarcas";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import CardProductos from "../../components/CardProductos";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar2></Navbar2>
      <Link to="/products">
      <div className=" bg-fondo bg-blue-400 p-0 flex flex-col items-center justify-center gap-4 rounded-2xl h-[32em] max-w-100xl m-auto">
      </div>
      </Link>

      {/* <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto">
      <Link to="https://www.pepsico.com.mx/inicio">
        <CardMarcas className="content-center object-center	"
          nombre="Familia Pepsico"
          imagen={'Proyecto_Pepsico_final/src/image/Pepsico.jpg'}
        />
        </Link>
        
        <Link to="https://quaker.lat/mx/">
        <CardMarcas className="content-center object-center	"
          nombre="Quaker"
          imagen="Proyecto_Pepsico_final/src/image/quaker.jpg"
        />
        </Link>
        
        <Link to="https://gepp.com.mx/consumidor/">
        <CardMarcas className="content-center object-center"
          nombre="Grupo Gepp"
          imagen="Proyecto_Pepsico_final/src/image/Gepp.jpg"
        />
        </Link>
        
        <Link to="https://sabritas.com.mx/promocion/">
        <CardMarcas className="content-center object-center	" 
          nombre="Sabritas"
          imagen={
            "Proyecto_Pepsico_final/src/image/Sabritas-logo.png"
          }
        />
        </Link>
        
        <Link to="https://sonrics.com.mx/">
        <CardMarcas className="content-center object-center	"
          nombre="Sonric's"
          imagen={
            "Proyecto_Pepsico_final/src/image/sonrics.webp"
          }
        />
        </Link>

        <Link to="https://joyapp.mx/inicio">
        <CardMarcas className="content-center object-center	"
          nombre="Gamesa"
          imagen={
            "Proyecto_Pepsico_final/src/image/Gamesa.jpg"
          }
        />
        </Link> 
      </div> */}

      <Link to="/products">
      <div className= "bg-fondo1 mt-20 p-0 flex flex-col items-center justify-center h-[26rem] max-w-100xl m-auto">
      <div className="max-w-6xl mt-80 p-0">
        <h1 className="text-20xl text-white ">
          Compra los mejores productos para tu negocio
        </h1>
      </div>
      </div>
      </Link>

      <br />

      <Footer />


    </div>
  );
}
