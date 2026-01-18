import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";



export default function Home() {
  const { titulo , descripcion } = {
    titulo: "Visualizador de juegos de loteria",
    descripcion: "Resultados actualizados de la semana",
  }
  const juegos = [
    {
      nombre: "Quiniela",
      descripcion: "",
      url: "https://vivitusuerte.com/cabezas",
      estilo: "bg-blue-50 border-blue-200 text-blue-900", // Azul
      badgeColor: "bg-blue-200 text-blue-800 hover:bg-blue-300",
      mostrarBadge: false,
    },
    {
      nombre: "Quini 6",
      descripcion: "",
      url: "https://www.loteriasantafe.gov.ar/index.php/resultados/quini-6",
      estilo: "bg-green-50 border-green-200 text-green-900", // Verde
      badgeColor: "bg-green-200 text-green-800 hover:bg-green-300",
      mostrarBadge: true,
    },
    {
      nombre: "Loto",
      descripcion: "",
      url: "https://loto.loteriadelaciudad.gob.ar/",
      estilo: "bg-amber-50 border-amber-200 text-amber-900", // Naranja/Amarillo
      badgeColor: "bg-amber-200 text-amber-800 hover:bg-amber-300",
      mostrarBadge: true,
    },
    {
      nombre: "Brinco",
      descripcion: "",
      url: "https://www.loteriasantafe.gov.ar/index.php/resultados/brinco",
      estilo: "bg-rose-50 border-rose-200 text-rose-900", // Rojo/Rosa
      badgeColor: "bg-rose-200 text-rose-800 hover:bg-rose-300",
      mostrarBadge: true,
    },
  ]
  return (
    <div className="min-h-screen p-4 md:p-8 bg-slate-50">
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Titulo y descricion */}
      <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800"> {titulo} </h1>
          <p className="text-slate-500 mt-2"> {descripcion} </p>
        </div>
        {/* GRILLA DE TARJETAS */}
        {/* grid-cols-1: Una columna en celular */}
        {/* gap-4: Espacio entre tarjetas */}
        <div className="grid grid-cols-1 gap-4"></div>
        {juegos.map((juego, index) => (
            <Card 
              key={index} 
              className={`border-l-4 shadow-sm hover:shadow-md transition-shadow ${juego.estilo}`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">
                  {juego.nombre}
                </CardTitle>
                {juego.mostrarBadge && (
                <Badge className={`${juego.badgeColor} border-none`}>
                  Oficial
                </Badge>
                )}

              </CardHeader>

              <CardContent>
                <p className="opacity-80 font-medium">{juego.descripcion}</p>
              </CardContent>

              <CardFooter>
                {/* Botón ancho completo */}
                <Button className="w-full bg-white text-black border border-gray-200 hover:bg-gray-100" asChild>
                  <a href={juego.url} target="_blank" rel="noopener noreferrer">
                    Ver Resultados 🔗
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
  );
}
