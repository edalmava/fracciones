import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Users, Target, Play, FileText, Award } from 'lucide-react'
import Link from "next/link"

export default function HomePage() {
return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
  {/* Header */}
  <header className="bg-white shadow-sm border-b-2 border-blue-200">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">FraccionesMath</h1>
            <p className="text-sm text-gray-600">Grado 5° - Educación Primaria</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">
            Inicio
          </Link>
          <Link href="#objetivos" className="text-gray-700 hover:text-blue-600 font-medium">
            Objetivos
          </Link>
          <Link href="#contenidos" className="text-gray-700 hover:text-blue-600 font-medium">
            Contenidos
          </Link>
          <Link href="#recursos" className="text-gray-700 hover:text-blue-600 font-medium">
            Recursos
          </Link>
        </nav>
      </div>
    </div>
  </header>

  {/* Hero Section */}
  <section id="inicio" className="py-16 px-4">
    <div className="container mx-auto text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          ¡Descubre el Mundo de las{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            Fracciones!
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Estrategia didáctica interactiva diseñada especialmente para estudiantes de quinto grado. Aprende fracciones de manera divertida y práctica con actividades adaptadas al currículo colombiano.
        </p>

        {/* Visual Fraction Examples */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-400 rounded-full mb-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-600"></div>
            </div>
            <p className="text-sm font-semibold text-gray-700">1/2</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-red-400 rounded-full mb-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1/4 h-full bg-red-600"></div>
            </div>
            <p className="text-sm font-semibold text-gray-700">1/4</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-400 rounded-full mb-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-3/4 h-full bg-purple-600"></div>
            </div>
            <p className="text-sm font-semibold text-gray-700">3/4</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://classroom.google.com/c/Nzc5NzMxNzg4MzI4?cjc=s3kbmesc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Play className="w-5 h-5" />
            <span>Comenzar Aprendizaje</span>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
          >
            <FileText className="w-5 h-5 mr-2" />
            Guía del Docente
          </Button>
        </div>
      </div>
    </div>
  </section>

  {/* Objetivos de Aprendizaje */}
  <section id="objetivos" className="py-16 px-4 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Objetivos de Aprendizaje</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Competencias y habilidades que desarrollarán los estudiantes según los Estándares Básicos de Competencias
          del MEN
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-lg">Conceptualización</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Comprender el concepto de fracción como parte de un todo y como relación entre cantidades.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Calculator className="w-8 h-8 text-green-500" />
              <CardTitle className="text-lg">Operaciones</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Realizar operaciones básicas con fracciones: suma, resta, multiplicación y división.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-purple-500" />
              <CardTitle className="text-lg">Aplicación</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Resolver problemas cotidianos utilizando fracciones en contextos reales y significativos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  {/* Contenidos de la Secuencia */}
  <section id="contenidos" className="py-16 px-4 bg-gray-50">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contenidos de la Estrategia</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Módulos organizados progresivamente para un aprendizaje efectivo
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <CardTitle className="text-lg text-blue-800">¿Qué es una fracción?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-blue-700">
              Introducción al concepto, numerador, denominador y representación gráfica.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <CardTitle className="text-lg text-green-800">Fracciones Equivalentes</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-green-700">
              Identificación y creación de fracciones que representan la misma cantidad.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <CardTitle className="text-lg text-orange-800">Comparación</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-orange-700">
              Ordenar y comparar fracciones usando diferentes estrategias.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <CardTitle className="text-lg text-purple-800">Operaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-center text-purple-700">
              Suma, resta y multiplicación de fracciones con denominadores iguales.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>

  {/* Recursos Didácticos */}
  <section id="recursos" className="py-16 px-4 bg-white">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Recursos Didácticos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Materiales y herramientas para enriquecer el proceso de enseñanza-aprendizaje
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Actividades Interactivas</h3>
          <p className="text-gray-600">
            Ejercicios digitales y manipulativos para practicar conceptos de manera lúdica.
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Trabajo Colaborativo</h3>
          <p className="text-gray-600">
            Dinámicas grupales que fomentan el aprendizaje cooperativo y la comunicación matemática.
          </p>
        </div>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Material Imprimible</h3>
          <p className="text-gray-600">
            Fichas de trabajo, evaluaciones y recursos para usar sin conexión a internet.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Call to Action */}
  <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-4">¡Comienza tu Aventura con las Fracciones!</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Únete a miles de estudiantes colombianos que ya están aprendiendo matemáticas de manera divertida y
        efectiva.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
          <a
            href="https://classroom.google.com/c/Nzc5NzMxNzg4MzI4?cjc=s3kbmesc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Play className="w-5 h-5 mr-2" />
            Iniciar Aprendizaje
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
        >
          Descargar Recursos
        </Button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 text-white py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">FraccionesMath</h3>
          <p className="text-gray-300 text-sm">
            Estrategia didáctica desarrollada bajo los lineamientos del Ministerio de Educación Nacional de Colombia para la enseñanza de matemáticas en educación básica primaria.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Estándares Básicos MEN
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Derechos Básicos de Aprendizaje
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Mallas de Aprendizaje
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white">
                Colombia Aprende
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-gray-300 text-sm mb-2">Para instituciones educativas públicas de Colombia</p>
          <p className="text-gray-300 text-sm">Soporte técnico y pedagógico disponible</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 FraccionesMath - Educación Pública Colombia. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</div>
)
}
