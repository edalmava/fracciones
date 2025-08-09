"use client"

import { ReactNode, useMemo, useState } from "react"
import {
  FileText,
  FileDown,
  ExternalLink,
  Youtube,
  Presentation,
  Puzzle,
  Search,
  Filter,
  Link2,
  ClipboardCheck,
  ClipboardIcon,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ResourceType = "Guía" | "Actividad" | "Presentación" | "Video" | "Enlace" | "Manipulativo"

type Resource = {
  id: string
  title: string
  description: string
  type: ResourceType
  url: string
  cover: string
  tags?: string[]
}

const RESOURCES: Resource[] = [
  {
    id: "guia-intro",
    title: "Guía: ¿Qué es una fracción?",
    description: "Concepto, numerador y denominador con ejemplos visuales.",
    type: "Guía",
    url: "https://example.com/guia-introduccion-fracciones.pdf",
    cover: "/fracciones-introduccion.png",
    tags: ["imprimible", "conceptos"],
  },
  {
    id: "act-equivalentes",
    title: "Actividad: Fracciones equivalentes",
    description: "Empareja figuras y fracciones equivalentes.",
    type: "Actividad",
    url: "https://example.com/actividad-fracciones-equivalentes",
    cover: "/fracciones-equivalentes-quinto-grado.png",
    tags: ["equivalentes", "ludico"],
  },
  {
    id: "ppt-operaciones",
    title: "Presentación: Operaciones con fracciones",
    description: "Suma y resta con denominadores iguales.",
    type: "Presentación",
    url: "https://example.com/presentacion-operaciones-fracciones.pptx",
    cover: "/operaciones-con-fracciones.png",
    tags: ["suma", "resta"],
  },
  {
    id: "video-comparacion",
    title: "Video: Comparación de fracciones",
    description: "Estrategias para comparar usando diagramas.",
    type: "Video",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    cover: "/comparing-fractions-video-still.png",
    tags: ["comparación", "visual"],
  },
  {
    id: "manip-pizzas",
    title: "Manipulativo: Pizzas de fracciones",
    description: "Imprimible para recortar y armar fracciones.",
    type: "Manipulativo",
    url: "https://example.com/recortables-pizzas-fracciones.pdf",
    cover: "/printable-fraction-pizza-manipulatives.png",
    tags: ["recortable", "visual"],
  },
  {
    id: "enlace-classroom",
    title: "Google Classroom: Secuencia Grado 5°",
    description: "Únete a la clase de fracciones.",
    type: "Enlace",
    url: "https://classroom.google.com/c/NzkxMzg4MzMwMzU1?cjc=ak57jgrk",
    cover: "/google-classroom-fracciones-grado-5.png",
    tags: ["aula", "virtual"],
  },
  {
    id: "guia-problemas",
    title: "Guía: Problemas con fracciones",
    description: "Situaciones de la vida diaria con soluciones.",
    type: "Guía",
    url: "https://example.com/guia-problemas-fracciones.pdf",
    cover: "/fracciones-contexto.png",
    tags: ["contexto", "aplicacion"],
  },
  {
    id: "act-juego",
    title: "Actividad: Juego de memoria",
    description: "Empareja fracciones y representaciones.",
    type: "Actividad",
    url: "https://example.com/juego-memoria-fracciones",
    cover: "/fractions-memory-game.png",
    tags: ["memoria", "ludico"],
  },
]

const typeIconMap: Record<ResourceType, ReactNode> = {
  Guía: <FileText className="h-4 w-4" />,
  Actividad: <Puzzle className="h-4 w-4" />,
  Presentación: <Presentation className="h-4 w-4" />,
  Video: <Youtube className="h-4 w-4" />,
  Enlace: <Link2 className="h-4 w-4" />,
  Manipulativo: <Puzzle className="h-4 w-4" />,
}

export default function ResourcesGallery() {
  const [query, setQuery] = useState("")
  const [type, setType] = useState<ResourceType | "Todos">("Todos")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchesType = type === "Todos" ? true : r.type === type
      const q = query.trim().toLowerCase()
      const matchesQuery =
        q.length === 0 ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        (r.tags ?? []).some((t) => t.toLowerCase().includes(q))
      return matchesType && matchesQuery
    })
  }, [query, type])

  const handleCopy = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(id)
      setTimeout(() => setCopiedId((curr) => (curr === id ? null : curr)), 1500)
    } catch {
      // no-op
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, descripción o etiqueta..."
              className="pl-9"
              aria-label="Buscar recursos"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-gray-500" aria-hidden="true" />
          <Select value={type} onValueChange={(v) => setType(v as ResourceType | "Todos")}>
            <SelectTrigger aria-label="Filtrar por tipo">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Guía">Guía</SelectItem>
              <SelectItem value="Actividad">Actividad</SelectItem>
              <SelectItem value="Presentación">Presentación</SelectItem>
              <SelectItem value="Video">Video</SelectItem>
              <SelectItem value="Enlace">Enlace</SelectItem>
              <SelectItem value="Manipulativo">Manipulativo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((r) => (
          <Card key={r.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={r.cover || "/placeholder.svg"}
                alt={`Portada del recurso: ${r.title}`}
                width={320}
                height={160}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur">
                  <span className="inline-flex items-center gap-1">
                    {typeIconMap[r.type]}
                    <span>{r.type}</span>
                  </span>
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base line-clamp-2">{r.title}</CardTitle>
              <CardDescription className="line-clamp-2">{r.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-4">
                {(r.tags ?? []).map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between gap-2">
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${r.title} en nueva pestaña`}
                  >
                    {r.type === "Guía" ? (
                      <FileDown className="h-4 w-4 mr-2" />
                    ) : (
                      <ExternalLink className="h-4 w-4 mr-2" />
                    )}
                    {r.type === "Guía" ? "Abrir/Descargar" : "Abrir"}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(r.url, r.id)}
                  aria-label={`Copiar enlace de ${r.title}`}
                >
                  {copiedId === r.id ? (
                    <>
                      <ClipboardCheck className="h-4 w-4 mr-2 text-green-600" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <ClipboardIcon className="h-4 w-4 mr-2" />
                      Copiar enlace
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-600">No se encontraron recursos para tu búsqueda.</div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        ¿Quieres agregar más recursos? Indícame el enlace o sube el archivo y lo integramos aquí.
      </div>
    </div>
  )
}
