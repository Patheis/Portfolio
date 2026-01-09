import { projects } from "@/constants/projects";
import { notFound } from "next/navigation";
import ProjectClientContent from "./ProjectClientContent";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Corrigido: params agora é uma Promise no Next.js moderno
export default async function DetalheProjeto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Aguarda o ID chegar
  const projeto = projects.find((p) => p.id === id);

  if (!projeto) {
    return notFound();
  }

  return <ProjectClientContent projeto={projeto} />;
}