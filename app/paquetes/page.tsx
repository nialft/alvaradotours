import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, CheckCircle2 } from "lucide-react";

export default function Paquetes() {
  const paquetes = [
    {
      id: 1,
      name: "Sabores y Tradición de Pacayas",
      description:
        "Un recorrido rural, educativo y gastronómico por Pacayas, ideal para familias, estudiantes, amantes de la agricultura y la cultura local.",
      price: "$59.99",
      duration: "1 día",
      maxPeople: "15 personas",
      image: "/resources/img/fotoPacayasPaQ.png",
      features: [
        "Transporte desde Cartago y durante el recorrido",
        "Entrada a la Granja Didáctica",
        "Caminata guiada a la catarata",
        "Almuerzo típico",
        "Entrada al Museo del Agricultor",
        "Degustación de repostería artesanal",
        "Guía turístico local",
      ],
      itinerary: [
        "8:00 a.m. – Salida desde Cartago centro",
        "9:00 a.m. – Finca La Granja Didáctica La Enseñanza",
        "11:00 a.m. – Caminata hacia la Catarata El Salto",
        "1:00 p.m. – Almuerzo típico en Restaurante Donde Juanca",
        "2:30 p.m. – Museo del Agricultor",
        "4:00 p.m. – Parada en Panadería María Auxiliadora",
        "5:00 p.m. – Regreso a Cartago",
      ],
    },
    {
      id: 2,
      name: "Aventura y Fe en Capellades",
      description:
        "Una experiencia de naturaleza, religiosa y gastronómica, ideal para turistas religiosos, senderistas, fotógrafos y grupos culturales.",
      price: "$59.99",
      duration: "1 día",
      maxPeople: "12 personas",
      image: "/resources/img/CapelladesPaqTour.png",
      features: [
        "Transporte desde Cartago y durante el recorrido",
        "Entrada a zonas naturales",
        "Almuerzo típico",
        "Degustación en productora local",
        "Visita guiada a iglesias históricas",
        "Guía turístico",
      ],
      itinerary: [
        "8:00 a.m. – Salida desde Cartago",
        "9:00 a.m. – Parada en el Cañón del Río Turrialba",
        "10:30 a.m. – Catarata Río Playas",
        "12:00 m.d. – Almuerzo en Rancho el Sapito",
        "1:30 p.m. – Iglesias Santa Teresita y San Vicente de Paul",
        "3:00 p.m. – Lácteos Tío Luis",
        "4:00 p.m. – Café en Soda San Teresa",
        "5:00 p.m. – Regreso a Cartago",
      ],
    },
    {
      id: 3,
      name: "Ruta Gastronómica en Cervantes",
      description:
        "Una experiencia gastronómica y cultural de medio día, ideal para foodies, parejas, adultos mayores y pequeños grupos.",
      price: "$49.99",
      duration: "Medio día / tarde",
      maxPeople: "10 personas",
      image: "/resources/img/CervantesPaqTour.png",
      features: [
        "Transporte desde Cartago",
        "Almuerzo gourmet",
        "Experiencia de cocina tradicional",
        "Café y repostería",
        "Guía acompañante",
      ],
      itinerary: [
        "11:00 a.m. – Salida desde Cartago",
        "12:00 m.d. – Almuerzo en Restaurante los Pizotes",
        "1:30 p.m. – Cafetería Terrazas del Café",
        "2:30 p.m. – Taller con Doña Zayra",
        "4:00 p.m. – Helado o café en Soda Dare",
        "5:00 p.m. – Regreso a Cartago",
      ],
    },
    {
      id: 4,
      name: "Experiencia Viva – Cultura, Naturaleza y Religión",
      description:
        "Un tour festivo, natural y espiritual, ideal para visitantes culturales, religiosos, adultos mayores y escuelas.",
      price: "$69.99",
      duration: "1 día",
      maxPeople: "15 personas",
      image: "/resources/img/ExpVivaCultNatReliPAQ.png",
      features: [
        "Transporte desde Cartago",
        "Entrada a reserva biológica",
        "Almuerzo típico con música (en fechas especiales)",
        "Actividades culturales (según festividad)",
        "Visitas guiadas",
        "Refrigerio de tarde",
      ],
      itinerary: [
        "8:00 a.m. – Salida desde Cartago",
        "9:00 a.m. – Corredor Biológico Cordillera Volcánica",
        "11:00 a.m. – Museo del Agricultor",
        "12:30 p.m. – Almuerzo con música en Restaurante Coyotes",
        "2:00 p.m. – Participación en festividades culturales",
        "4:00 p.m. – Panadería Dulce Arte",
        "5:00 p.m. – Regreso a Cartago",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Paquetes Turísticos"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros Paquetes
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experiencias completas diseñadas para que disfrutes al máximo tu
            visita
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 gap-10">
            {paquetes.map((paquete) => (
              <Card
                key={paquete.id}
                id={`paquete-${paquete.id}`}
                className="overflow-hidden border-0 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={paquete.image || "/placeholder.svg"}
                      alt={paquete.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-600 hover:bg-emerald-700">
                      Destacado
                    </Badge>
                  </div>
                  <div className="lg:col-span-2">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold mb-2">
                            {paquete.name}
                          </h2>
                          <p className="text-gray-600 mb-4">
                            {paquete.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Desde</div>
                          <div className="text-2xl font-bold text-emerald-600">
                            {paquete.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            por persona
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>{paquete.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>Máximo {paquete.maxPeople}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>Alvarado, Cartago</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1 text-emerald-600" />
                          <span>Salidas: Lun, Mié, Vie</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Incluye:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {paquete.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-emerald-600" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-3">
                          Itinerario:
                        </h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {paquete.itinerary.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0 flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        <Link href="/contacto">Reservar Ahora</Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/paquetes/detalles/${paquete.id}`}>
                          Más Información
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                ¿Buscas algo personalizado?
              </h2>
              <p className="text-gray-600 mb-6">
                Podemos crear un paquete a medida según tus intereses, tiempo
                disponible y presupuesto. Nuestro equipo de expertos diseñará
                una experiencia única para ti y tu grupo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-0.5 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold">Flexibilidad total</h3>
                    <p className="text-sm text-gray-600">
                      Adapta las actividades, duración y servicios a tus
                      necesidades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-0.5 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold">Atención personalizada</h3>
                    <p className="text-sm text-gray-600">
                      Un asesor dedicado te ayudará en todo el proceso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 mr-3 mt-0.5 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold">Experiencias exclusivas</h3>
                    <p className="text-sm text-gray-600">
                      Acceso a actividades y lugares fuera de los circuitos
                      turísticos habituales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contacto">Solicitar Paquete Personalizado</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="resources/img/Logo.jpg"
                alt="/placeholder.svg?height=600&width=800&text=Paquetes Personalizados"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
