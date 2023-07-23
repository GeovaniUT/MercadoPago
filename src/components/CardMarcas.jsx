export default function CardMarcas({nombre,imagen}){
  return(
      <div className="h-40 p-4 rounded-[100%]  content-center object-center bg-center text-center" style={{background:`url(${imagen})`, object:`center`, backgroundSize: `cover`}}>
          <h1 className="text-2xl text-blue-700">{nombre}</h1>
      </div>
  )
}