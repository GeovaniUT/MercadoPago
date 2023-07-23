import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-black">Bienvenido</h1>
        <p className="text-xl">Inicia sesión para continuar</p>
        <span className="mt-2">
          <Link to={"/"} className="text-blue-700">
            Regresar al inicio
          </Link>
        </span>
      </div>

      <form className="flex flex-col gap-4 mt-8 w-80">
        <div className="flex flex-col">
          <label className="text-black mb-2">Correo electrónico</label>
          <div className="flex items-center border rounded-md px-4 py-2">
            <box-icon name="envelope" color="gray"></box-icon>
            <input
              className="flex-1 ml-2 bg-transparent border-none outline-none"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black mb-2">Contraseña</label>
          <div className="flex items-center border rounded-md px-4 py-2">
            <box-icon name="lock" color="gray"></box-icon>
            <input
              className="flex-1 ml-2 bg-transparent border-none outline-none"
              type="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button className="bg-black text-white rounded-md py-2 mt-4">
          Iniciar sesión
        </button>
      </form>
      <p className="mt-4 font-bold">
        ¿No tienes cuenta?{" "}
        <Link to={"/register"} className="text-blue-700">
          Registrate
        </Link>
      </p>
    </div>
  );
}
