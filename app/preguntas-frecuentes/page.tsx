import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PreguntasFrecuentes() {
  const faqCategories = [
    {
      id: "reservas",
      title: "Reservas y Pagos",
      questions: [
        {
          question: "¿Cómo puedo reservar un tour o paquete?",
          answer:
            "Puedes reservar a través de nuestro sitio web, por teléfono o enviándonos un correo electrónico. Recomendamos hacer la reserva con al menos 3 días de anticipación para garantizar disponibilidad, especialmente en temporada alta.",
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer:
            "Aceptamos pagos con tarjetas de crédito/débito (Visa, MasterCard, American Express), transferencias bancarias y efectivo. Para reservas, solicitamos un depósito del 30% del valor total, y el saldo restante puede pagarse antes o al inicio del tour.",
        },
        {
          question: "¿Cuál es su política de cancelación?",
          answer:
            "Si cancelas con más de 7 días de anticipación, te reembolsaremos el 90% del depósito. Con 3-7 días de anticipación, el reembolso será del 50%. Para cancelaciones con menos de 3 días de anticipación, no hay reembolso. En caso de condiciones climáticas adversas, ofrecemos reprogramar la actividad sin costo adicional.",
        },
      ],
    },
    {
      id: "tours",
      title: "Tours y Actividades",
      questions: [
        {
          question: "¿Qué debo llevar a los tours?",
          answer:
            "Recomendamos llevar ropa cómoda, calzado adecuado para caminatas, protector solar, repelente de insectos, una chaqueta ligera o impermeable (el clima puede cambiar rápidamente), cámara fotográfica, y una botella de agua reutilizable. Para tours específicos, te enviaremos una lista detallada al confirmar tu reserva.",
        },
        {
          question: "¿Los tours son adecuados para niños?",
          answer:
            "La mayoría de nuestros tours son aptos para familias con niños. Cada descripción de tour indica la edad mínima recomendada. Los tours de aventura como rafting y canopy tienen restricciones de edad y peso por razones de seguridad. Contamos con opciones especialmente diseñadas para familias con niños pequeños.",
        },
        {
          question: "¿Ofrecen tours en otros idiomas además del español?",
          answer:
            "Sí, ofrecemos tours con guías bilingües en español e inglés sin costo adicional. Para otros idiomas como francés, alemán o italiano, podemos organizar guías especializados con un cargo adicional y reserva anticipada.",
        },
      ],
    },
    {
      id: "logistica",
      title: "Logística y Preparativos",
      questions: [
        {
          question: "¿Incluyen transporte desde mi hotel?",
          answer:
            "La mayoría de nuestros paquetes incluyen transporte de ida y vuelta desde hoteles ubicados en el área central de Cartago. Para ubicaciones fuera de esta zona, podemos organizar el transporte con un costo adicional dependiendo de la distancia.",
        },
        {
          question: "¿Cuál es el tamaño de los grupos en los tours?",
          answer:
            "Mantenemos grupos pequeños para garantizar una experiencia personalizada. El tamaño máximo varía según el tour: para senderismo y tours culturales, máximo 15 personas; para tours de aventura como rafting o canopy, máximo 8-10 personas. También ofrecemos tours privados para grupos familiares o de amigos.",
        },
        {
          question: "¿Qué sucede en caso de mal tiempo?",
          answer:
            "Costa Rica tiene un clima tropical, y las lluvias ocasionales son parte de la experiencia. La mayoría de nuestros tours operan con lluvia ligera (proporcionamos ponchos si es necesario). En caso de condiciones climáticas severas que comprometan la seguridad, ofrecemos reprogramar la actividad o un reembolso completo si la reprogramación no es posible.",
        },
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
            alt="Preguntas Frecuentes"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros
            servicios
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Si tienes alguna pregunta adicional o necesitas más información, no
            dudes en contactarnos. Nuestro equipo estará encantado de ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:info@toursalvarado.com">info@toursalvarado.com</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
