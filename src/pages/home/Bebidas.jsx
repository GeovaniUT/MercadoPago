import { Link } from "react-router-dom";
import CardMarcas from "../../components/CardMarcas";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import CardProductos from "../../components/CardProductos";
import Footer from "../../components/Footer";
import axios from 'axios';


export default function Bebidas (){

    const ejecutarPago = async () => {
      const response = await axios.post("http://localhost:3001/pagos", {
          title: titledata,
          unit_price: price,
          // currency_id: "MXN"
      });
    }

    return(
      <div className="">
        <Navbar2></Navbar2>
        <div className="max-w-6xl m-auto">
          <h1 className="text-2xl font-semibold text-start pt-8">
            Las mejores bebidas para tu negocio
          </h1>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <CardProductos
              nombre="Caja de Pepsi-Cola de 235ml de 8 unidades"
              precio={108}
              imagen={
                "https://images.unsplash.com/photo-1546695259-ad30ff3fd643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
              }
              // boton={
              //   <button 
              //     className = "bg-blue-500 text-white"  
              //     onClick={ejecutarPago}
              //   >
              //     Comprar
              //   </button>
              // }
            />

            <CardProductos
              nombre="Gatorade sabor Ponche De Frutas de 1 litro cada uno. 6 Pack"
              precio={145.80}
              imagen={
                "https://m.media-amazon.com/images/I/51YQoO5Q6VL.jpg"
              }
              // boton={<button className = "bg-blue-500 text-white" >Comprar</button>}
            />
            <CardProductos
              nombre="Manzanita Sol, Refresco con Jugo de Manzana, Pet de 400 mililitros. Paquete de 12, 4900 grams, 4800 mililitro"
              precio={100}
              imagen={
                "https://m.media-amazon.com/images/I/81ZH+TW9jAL._AC_UF894,1000_QL80_.jpg"
              }
              // boton={<button className = "bg-blue-500 text-white">Comprar</button>}
            />
            <CardProductos
              nombre="7UP, Refresco de Lima-Limón, 12 Pack Pet, 400ml."
              precio={90}
              imagen={
                "https://m.media-amazon.com/images/I/71zGJj0OlLL._AC_UF894,1000_QL80_.jpg"
              }
              // boton={<button className = "bg-blue-500 text-white">Comprar</button>}
            />
            <CardProductos
              nombre="Pepsi Regular, Refresco De Sabor Cola, Pet De 500 Mililitros. Paquete De 12"
              precio={130}
              imagen={
                "https://m.media-amazon.com/images/I/61kqRkk5tuL._AC_SX679_.jpg"
              }
              // boton={<button className = "bg-blue-500 text-white">Comprar</button>}
            />
            <CardProductos
              nombre="Refresco Pepsi Mix 24 pzas de 400 ml c/u a precio de socio | Sam's Club en línea"
              precio={190}
              imagen={
                "https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/980007627m.jpg"
              }
              // boton={<button className = "bg-blue-500 text-white">Comprar</button>}
            />
          </div>
  
        </div>
        <br/><br/><br/>
              <Footer></Footer>
      </div>
    );
  }