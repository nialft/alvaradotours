import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SobreNosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
            alt="Equipo de Tours Alvarado"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-xl max-w-3xl mx-auto">Conoce nuestra historia</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-4">
                somos un grupo de estudiantes del curso Planificación del
                Desarrollo Turístico, dirigidos por la MPM. Chantal Andrea
                Fernández Llantén, de la UIA. Estamos para servirle, si le
                interesa algún tour, sírvase en llenar el siguiente formulario
                de contacto y un asesor se comunicará con usted.
              </p>

              <p className="text-gray-600">
                Nuestro compromiso con el turismo sostenible y el apoyo a las
                comunidades locales ha sido fundamental en nuestro crecimiento y
                éxito.
              </p>
            </div>
            <div className="relative h-80 lg:h-96">
              <Image
                src="resources/img/Logo.jpg"
                alt="Historia de Tours Alvarado"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 mb-6">
                Promover el desarrollo turístico sostenible en Alvarado mediante
                la creación de experiencias auténticas que integren la cultura,
                la agricultura y la naturaleza, generando beneficios económicos,
                sociales y ambientales para la comunidad local, al tiempo que
                fomentamos la conservación de los recursos naturales y
                culturales del cantón.
              </p>
              <ul className="space-y-3">
                {[
                  "Excelencia en servicio",
                  "Respeto por la naturaleza",
                  "Apoyo a comunidades locales",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">
                Nuestra Visión
              </h3>
              <p className="text-gray-600 mb-6">
                Convertirnos en el tour operadora líder de la provincia de
                Cartago, reconocida por ofrecer experiencias turísticas
                sostenibles, auténticas y de alta calidad, que posicionen a
                Alvarado como un destino turístico destacado a nivel nacional e
                internacional.
              </p>
              <ul className="space-y-3">
                {[
                  "Innovación constante",
                  "Crecimiento sostenible",
                  "Conservación ambiental",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nos enorgullece la satisfacción de nuestros clientes y sus
              experiencias con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Elena Vargas",
                location: "San José, Costa Rica",
                quote:
                  "Una experiencia increíble. Los guías son muy conocedores y amables. Definitivamente volveré a contratar sus servicios.",
              },
              {
                name: "Bryan López",
                location: "Alajuela, Costa Rica",
                quote:
                  "Visitamos Costa Rica por primera vez y gracias a Tours Alvarado pudimos conocer lugares maravillosos fuera de las rutas turísticas tradicionales.",
              },
              {
                name: "Marta González",
                location: "Jaco, Costa Rica",
                quote:
                  "El tour superó todas nuestras expectativas. El guía nos mostró la verdadera esencia de Cartago y su cultura.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
