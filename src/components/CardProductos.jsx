export default function CardProductos({nombre, imagen, precio}){
    return(
        <div className="bg-white flex flex-col items-center rounded-xl gap-5 p-4">
            <img src={imagen} className="w-110 h-60 object-cover rounded-xl "/>
            <h1 className="text-center text-2xl text-black">{nombre}</h1>
            <h2 className="text-center text-black">${precio}</h2>
        </div>
    );
}