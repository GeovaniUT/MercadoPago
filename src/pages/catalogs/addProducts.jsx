import axios from "axios";
import { useEffect, useState } from "react";

export default function AddProducts() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const producto = JSON.stringify(formulario);
    console.log(producto)
    axios.post("http://localhost:3001/api/productos", producto, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(){
        console.log("Producto agregado")
    }).catch(function(){
        console.error("Error")
    })

    //go to products page
    window.location.href = "/products";



  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Add Products</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          onChange={handleChange}
        />
        <label>Descripcion</label>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion del producto"
        />
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio del producto"
          onChange={handleChange}
        />
        <label>Stock</label>
        <input
          type="number"
          name="stock"
          placeholder="Stock del producto"
          onChange={handleChange}
        />
        <label>Imagen</label>
        <input
          type="text"
          name="imagen"
          placeholder="Imagen del producto"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-black text-white"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
