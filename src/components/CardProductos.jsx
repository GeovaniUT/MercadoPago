import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

export default function CardProductos({nombre, imagen, precio, boton }){
    const [idPago, setIdpago ] = useState(null)
    initMercadoPago('TEST-27d170a2-53f5-4aca-b386-b24e3aeeda84')
    const ejecutarPago = async () => {
        console.log(nombre, precio)
        const response = await axios.post("http://localhost:3001/pagos", {
            title: nombre,
            unit_price: precio,
        });

        console.log("ejecutando api ===> ", response)

        setIdpago(response.data.id)
    }
      
    
    return(
        <div className="bg-white flex flex-col items-center rounded-xl gap-5 p-4">
            <img src={imagen} className="w-110 h-60 object-cover rounded-xl "/>
            <h1 className="text-center text-2xl text-black">{nombre}</h1>
            <h2 className="text-center text-black">${precio}</h2>
            <h2></h2>
            <button 
                onClick={ejecutarPago}
                className = "bg-blue-500 text-white"
            >
                COMPRAR
            </button>

            {idPago? <Wallet initialization={{ preferenceId: idPago }} /> : null}
        </div>
    );
}