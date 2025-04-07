import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Calendar, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Paisaje natural de Alvarado, Cartago"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Descubre Alvarado</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explora la belleza natural y cultural de Alvarado, Cartago con nuestros tours personalizados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/destinos">Ver Destinos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link href="/paquetes">Nuestros Paquetes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Destinos Destacados</h2>
            <Button asChild variant="link" className="text-emerald-600">
              <Link href="/destinos" className="flex items-center">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Restaurante y Museo Trotamundos",
                image: "/resources/img/museo trotamundos.jpg",
              },
              {
                id: 5,
                name: "Corredor Biológico",
                image: "/resources/img/Cordillera volcanica central Talamanca.jpg",
              },
              {
                id: 7,
                name: "Catarata Río Playas",
                image: "/resources/img/rioplayas.jpg",
              },
            ].map((destino) => (
              <div
                key={destino.id}
                className="group rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={destino.image || "/placeholder.svg"}
                    alt={destino.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">Alvarado, Cartago</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{destino.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Disfruta de la belleza natural y las experiencias únicas que ofrece este maravilloso destino.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <Link href={`/destinos#destino-${destino.id}`}>Más Información</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Paquetes Populares</h2>
            <Button asChild variant="link" className="text-emerald-600">
              <Link href="/paquetes" className="flex items-center">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: 1,
                name: "Sabores y Tradición de Pacayas",
                image: "/resources/img/fotoPacayasPaQ.png",
                duration: "1 día",
                people: "Hasta 15 personas",
                price: "₡65,000",
              },
              {
                id: 2,
                name: "Aventura y Fe en Capellades",
                image: "/resources/img/CapelladesPaqTour.png",
                duration: "1 día",
                people: "Hasta 12 personas",
                price: "₡70,000",
              },
            ].map((paquete) => (
              <div key={paquete.id} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64 md:h-auto md:w-2/5">
                  <Image src={paquete.image || "/placeholder.svg"} alt={paquete.name} fill className="object-cover" />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold mb-2">{paquete.name}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{paquete.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{paquete.people}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Disfruta de una experiencia completa con transporte, alimentación y guía turístico incluido.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 text-sm">Desde</span>
                      <p className="text-emerald-600 font-bold text-xl">{paquete.price}</p>
                    </div>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                      <Link href={`/paquetes#paquete-${paquete.id}`}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-6">
                Somos una empresa de turismo local comprometida con mostrar la belleza natural y cultural de Alvarado,
                Cartago. Nuestro equipo de guías expertos le brindará una experiencia inolvidable.
              </p>
              <p className="text-gray-600 mb-6">
                Con más de 10 años de experiencia, nos especializamos en crear experiencias auténticas y sostenibles que
                benefician a las comunidades locales.
              </p>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/sobre-nosotros">Conoce Más</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-80 lg:h-96">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Nuestro Equipo"
                alt="Nuestro equipo de guías"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros tours y servicios
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/preguntas-frecuentes">Ver Todas las Preguntas</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para tu próxima aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para planificar tu visita a Alvarado, Cartago
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

