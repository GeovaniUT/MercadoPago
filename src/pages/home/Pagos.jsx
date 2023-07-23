
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { Navbar } from 'react-bootstrap';

function Pagos() {

    // _______________________________________________________________________
    //  CONFIGURACION PARA LA OPCION DE MERCADO PAGO
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-27d170a2-53f5-4aca-b386-b24e3aeeda84'); //Poner la llaver PUBLIC_KEY


    // se realizara una peticion a la api que se creo de mercado pago
    const Pagos = async (titledata, price) => {
        try {
            const response = await axios.post("http://localhost:3001/pagos", {
                title: titledata,
                unit_price: price,
                // currency_id: "MXN"
            });
            console.log(response)
            const { id } = response.data;
            console.log(id)
            return id;
        } catch (error) {
            console.log(error)
        }


    }

    // de acuerdo a la respuesta que se obtiene como respuesta se almacena 
    const handleBuy = async (titledata, price) => {
        const id = await createPreference(titledata, price);
        if (id) {
          
            setPreferenceId(id);
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <div className=' md:w-1/3 lg:w-2/ 1   container bg-clip-padding'>



                <div class="container">
                    <div className="row float-right">





                        {Productos.map((productos) => (
                            <div >
                                <div  >

                                    <div>

                                        <h2 >{productos.Name}</h2>
                                        <p >  {productos.Description} </p>
                                        <p > $ {productos.Price} MXN </p>
                                        <br />
                                        <button onClick={()=>handleBuy(productos.Name, productos.Price)} className="btn btn-success">Go </button>
                                        {

                                            preferenceId && <Wallet initialization={{ preferenceId }} />

                                        }

                                    </div>

                                </div>



                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <Footer></Footer>

        </>
    )
}