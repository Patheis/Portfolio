"use client";
import { Project } from "@/constants/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      <div className="p-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 border border-blue-200 px-2 py-1 rounded">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mt-4 text-slate-800">{project.title}</h3>
        <p className="text-slate-600 mt-2 text-sm line-clamp-2">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tools.slice(0, 3).map(tool => (
            <span key={tool} className="text-[11px] bg-slate-100 px-2 py-1 rounded text-slate-500">{tool}</span>
          ))}
        </div>

        <Link href={`/projeto/${project.id}`} className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600">
          Explorar Insights <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}