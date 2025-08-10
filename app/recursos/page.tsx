import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calculator } from "lucide-react"
import ResourcesGallery from "@/components/ui/resources-gallery"

export const metadata: Metadata = {
  title: "Recursos | FracciÓN - Aprende Fracciones",
  description:
    "Recursos descargables y enlaces para apoyar la enseñanza de fracciones en grado 5° de primaria: guías, actividades, presentaciones y videos.",
}

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
       <header className="bg-white shadow-sm border-b-2 border-blue-200">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Fracciones</h1>
            <p className="text-sm text-gray-600">Grado 5° - Educación Primaria</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Inicio
          </Link>
          
        </nav>
      </div>
    </div>
  </header>
      <section className="border-b bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Volver al inicio
            </Link>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">Recursos para Compartir</h1>
          <div className="w-[120px]" aria-hidden="true" />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 max-w-3xl mb-6">
            Encuentra materiales para trabajar fracciones en aula: guías imprimibles, actividades interactivas,
            presentaciones y videos. Puedes abrirlos en una pestaña nueva o copiar el enlace para compartir con tus
            estudiantes y colegas.
          </p>

          <ResourcesGallery />
        </div>
      </section>
    </main>
  )
}
