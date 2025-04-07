import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Tours Alvarado
            </h3>
            <p className="mb-4">
              Ofrecemos experiencias turísticas únicas en Alvarado, Cartago,
              Costa Rica.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Destinos
                </Link>
              </li>
              <li>
                <Link
                  href="/paquetes"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Paquetes
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-emerald-400" />
                <span>Alvarado, Cartago, Costa Rica</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-400" />
                <span>+506 8888-8888</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-400" />
                <span>@alvaradotours.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Tours Alvarado. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link
              href="/politica-privacidad"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terminos-condiciones"
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
