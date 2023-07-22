import { Link } from "react-router-dom";
import Card from "../../components/card";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import CardProductos from "../../components/CardProductos";
import Footer from "../../components/Footer";

export default function NuestrasMarcas (){
    return(
        <div>
           <Navbar2></Navbar2> 
           <br/><br/><br/>
           
           <div className="grid grid-cols-3 gap-9 pt-8 flex-col max-w-9xl max-h-10xl m-auto w-95 h-50 object-cover rounded-2xl ">
        <Link to="https://www.pepsico.com.mx/inicio">
        <Card
          nombre="Familia Pepsico"
          imagen={
            "https://www.revistaneo.com/sites/default/files/2017-12/PEPSICO.png"
          }
        />
        </Link>
        
        <Link to="https://quaker.lat/mx/">
        <Card 
          nombre=""
          imagen="https://quaker.co.uk/assets/images/Quaker-logo-vector.png"
        />
        </Link>
        
        <Link to="https://gepp.com.mx/consumidor/">
        <Card
          nombre="Grupo Gepp"
          imagen="https://play-lh.googleusercontent.com/akU6yGBFOf3S11BsSt26C3lP1Xm03b7MQfmHQQGc8RPTdrOQteEiOyoKRdKTVXkPQw"
        />
        </Link>
        
        <Link to="https://sabritas.com.mx/promocion/">
        <Card
          nombre="Sabritas"
          imagen={
            "https://w7.pngwing.com/pngs/807/569/png-transparent-sabritas-hd-logo.png"
          }
        />
        </Link>
        
        <Link to="https://sonrics.com.mx/">
        <Card
          nombre="Sonric's"
          imagen={
            "https://i.pinimg.com/originals/24/3a/1a/243a1aad6c70359c3ef72a1ba621196d.jpg"
          }
        />
        </Link>
        
        <Link to="https://joyapp.mx/inicio">
        <Card
          nombre="Gamesa"
          imagen={
            "https://w7.pngwing.com/pngs/765/417/png-transparent-gamesa-hd-logo.png"
          }
        />
        </Link>     
      </div>
      <br/><br/><br/><br/><br/><br/>
            <Footer></Footer>
        </div>
    )}