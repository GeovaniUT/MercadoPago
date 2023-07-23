import React from 'react'
import Navbar2 from '../../components/Navbar2'
import Footer from '../Components/Footer'

function DetalleComp() {
  return (
    <>
       <Navbar2></Navbar2>

       <div className='container mt-6'>
        <div className='card'>
            <h1>Detalle de la compra</h1>
        </div>

       </div>


       <Footer></Footer>
    </>
  )
}

export default DetalleComp