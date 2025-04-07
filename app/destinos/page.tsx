"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function Destinos() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "naturaleza", name: "Naturaleza" },
    { id: "cultural", name: "Cultural" },
    { id: "gastronomico", name: "Gastronómico" },
  ]

  const destinos = [
    {
      id: 1,
      name: "Restaurante y Museo Trotamundos",
      description:
        "Un ambiente familiar con amplio parqueo, bellos paisajes; además de un menú variado en el cual puede degustar deliciosas comidas típicas, cortes de pollo, res y cerdo… entre otras carnes.",
      category: "gastronomico",
      image: "/resources/img/museo trotamundos.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico"],
    },
    {
      id: 2,
      name: "Escuela Alberto González Soto",
      description:
        "Fue construida a inicios de la década de 1950 con maderas extraídas de la región; posee especial significado para la comunidad y forma parte de su patrimonio cultural.",
      category: "cultural",
      image: "/resources/img/escuela  gonza soto.jpeg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico"],
    },
    {
      id: 3,
      name: "Escuela Encarnación Gamboa",
      description:
        "Edificación antigua que antes fue una escuela, hoy día declarado patrimonio cultural y arquitectónico de la zona aprovechado para brindar capacitaciones, y clases de baile Folclórico, a cargo de Johanny Loaiza; fue reinaugurada como el nuevo Centro Cultural y Artístico de la comunidad de Capellades.",
      category: "cultural",
      image: "/resources/img/esc encarnacion gamboa.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico"],
    },
    {
      id: 4,
      name: "Iglesia Santa Teresita",
      description:
        "Es el templo más antiguo del cantón de Alvarado, construida en 1887 en donde se dejó una cruz como recuerdo de bendición del templo. Este templo fue construido por la comunidad acompañado y apoyados por los Capuchinos y Fray Bernardino de Capellades.",
      category: "cultural",
      image: "/resources/img/igle santa teresita.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico"],
    },
    {
      id: 5,
      name: "Corredor Biológico Cordillera Volcánica Central Talamanca",
      description:
        "El Corredor biológico permite la conexión entre las cordilleras Volcánica Central y de Talamanca, facilitando el desplazamiento entre ocho áreas silvestres protegidas de Costa Rica y dos territorios indígenas.",
      category: "naturaleza",
      image: "/resources/img/Cordillera volcanica central Talamanca.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico", "Entrada al lugar"],
    },
    {
      id: 6,
      name: "Hacienda Los Alpes",
      description:
        "Es una finca con 640 hectáreas, está compuesta por importantes nacientes de agua, y de su totalidad de hectáreas 300 corresponden a bosque primario, y está conectada con el Corredor Biológico Volcánica Central Talamanca. La propiedad cuenta con una casona antigua compuesta por 4 dormitorios grandes, y una lechería.",
      category: "naturaleza",
      image: "/resources/img/hacienda.jpeg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico", "Entrada al lugar"],
    },
    {
      id: 7,
      name: "Catarata Río Playas",
      description:
        "Es un lugar con una exuberante belleza natural tanto de flora y fauna, la catarata playas se localiza en la toma de la JASEC llamada Playas, es una catarata angosta, de unos 20 metros aproximadamente.",
      category: "naturaleza",
      image: "/resources/img/rioplayas.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico", "Entrada al lugar"],
    },
    {
      id: 8,
      name: "Cañón del Río Turrialba",
      description:
        "El cañón del rio Turrialba, está conformado por aproximadamente 35 metros de ancho, rodeado de exuberante vegetación, rico en flora y fauna. Después de caminar durante una hora por el cañón se llega a un majestuoso lugar conformado al lado derecho por once caídas de agua de diferentes tamaños, hasta llegar al final del cañón.",
      category: "naturaleza",
      image: "/resources/img/canion.jpg",
      includes: ["Transporte", "Almuerzo", "Guía Turístico", "Entrada al lugar"],
    },
  ]

  const filteredDestinos =
    selectedCategory === "todos" ? destinos : destinos.filter((destino) => destino.category === selectedCategory)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Destinos naturales en Alvarado"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Destinos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubre los lugares más impresionantes de Alvarado y sus alrededores
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinos.map((destino) => (
              <Card key={destino.id} id={`destino-${destino.id}`} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={destino.image || "/placeholder.svg"}
                    alt={destino.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                    {categories.find((c) => c.id === destino.category)?.name}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{destino.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{destino.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Incluye:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {destino.includes.map((item, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Check className="h-3 w-3 mr-1 text-emerald-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Alvarado, Cartago</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 p-0">
                      <span className="mr-1">Detalles</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">¿Listo para explorar estos destinos?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para planificar tu visita a cualquiera de estos increíbles lugares
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/paquetes">Ver Paquetes</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

