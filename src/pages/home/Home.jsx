import { Link } from "react-router-dom";
import Card from "../../components/card";
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

      <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto object-center ">
      <Link to="https://www.pepsico.com.mx/inicio">
        <Card className="content-center object-center	"
          nombre="Familia Pepsico"
          imagen={'Proyecto_Pepsico_final/src/image/Pepsico.jpg'}
        />
        </Link>
        
        <Link to="https://quaker.lat/mx/">
        <Card className="content-center object-center	"
          nombre="Quaker"
          imagen="Proyecto_Pepsico_final/src/image/quaker.jpg"
        />
        </Link>
        
        <Link to="https://gepp.com.mx/consumidor/">
        <Card className="content-center object-center"
          nombre="Grupo Gepp"
          imagen="Proyecto_Pepsico_final/src/image/Gepp.jpg"
        />
        </Link>
        
        <Link to="https://sabritas.com.mx/promocion/">
        <Card className="content-center object-center	" 
          nombre="Sabritas"
          imagen={
            "Proyecto_Pepsico_final/src/image/Sabritas-logo.png"
          }
        />
        </Link>
        
        <Link to="https://sonrics.com.mx/">
        <Card className="content-center object-center	"
          nombre="Sonric's"
          imagen={
            "Proyecto_Pepsico_final/src/image/sonrics.webp"
          }
        />
        </Link>

        <Link to="https://joyapp.mx/inicio">
        <Card className="content-center object-center	"
          nombre="Gamesa"
          imagen={
            "Proyecto_Pepsico_final/src/image/Gamesa.jpg"
          }
        />
        </Link> 
      </div>

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

      <div className="max-w-6xl m-auto">
        <h1 className="text-5xl font-semibold text-start pt-8 mb-8">
          Los mejores productos para tu negocio
        </h1>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <CardProductos
            nombre="Caja de Pepsi-Cola de 235ml de 8 unidades"
            precio={108}
            imagen={
              "https://images.unsplash.com/photo-1546695259-ad30ff3fd643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            }
          />
          <CardProductos
            nombre="Gatorade sabor Ponche De Frutas de 1 litro cada uno. 6 Pack"
            precio={145.80}
            imagen={
              "https://m.media-amazon.com/images/I/51YQoO5Q6VL.jpg"
            }
          />
          <CardProductos
            nombre="Sabritas Minis Surtido de Botanas - 50 Piezas"
            precio={399}
            imagen={
              "https://m.media-amazon.com/images/I/61+e+C0dmYL._AC_SX679_.jpg"
            }
          />
          <CardProductos
            nombre="Galleta de Avena Quaker sabor Chocolate, caja con 6 paquetes, 240 g"
            precio={180}
            imagen={
              "https://m.media-amazon.com/images/I/61R43pUI05L._AC_SX679_.jpg"
            }
          />
          <CardProductos
            nombre="SONRICS - Rockaleta Bola, 320 gramos"
            precio={50}
            imagen={
              "https://m.media-amazon.com/images/I/61o97q80cyL.__AC_SX300_SY300_QL70_ML2_.jpg"
            }
          />
          <CardProductos
            nombre="MAMUT MINI MAMUT GAMESA CAJA GRANDE DE 720 GRAMOS CON 60 PIEZAS"
            precio={90}
            imagen={
              "https://m.media-amazon.com/images/I/61fEWtGl-rL._AC_SX679_.jpg"
            }
          />
        </div>
      </div>

      <Footer />


    </div>
  );
}
