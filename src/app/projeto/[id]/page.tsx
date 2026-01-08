"use client";
import { projects } from "@/constants/projects";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, BarChart3, Target, Lightbulb, ExternalLink } from "lucide-react";
import Link from "next/link";

// NOMES CORRIGIDOS PARA A API SIMPLE ICONS
const techIcons: { [key: string]: string } = {
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'MySQL': 'https://cdn.simpleicons.org/mysql/4479A1',
  'Sequelize': 'https://cdn.simpleicons.org/sequelize/52B0E7',
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  // O slug correto para o Power BI é 'powerbi' (tudo junto e minúsculo)
  'Power BI': 'https://cdn.simpleicons.org/powerbi/F2C811', 
  // O slug correto para SQL (usando SQLite como base visual) é 'sqlite' ou 'postgresql'
  'SQL': 'https://cdn.simpleicons.org/sqlite/003B57' 
};

export default function DetalheProjeto() {
  const { id } = useParams();
  const projeto = projects.find((p) => p.id === id);
  
  const categoryStyles: { [key: string]: string } = {
    'Acadêmico': 'bg-blue-50 text-blue-600 border-blue-100',
    'Profissional': 'bg-red-50 text-red-600 border-red-100',
    'Soluções': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Dashboard': 'bg-purple-50 text-purple-600 border-purple-100',
    'Estudo de Caso': 'bg-amber-50 text-amber-600 border-amber-100'
  };
   
  if (!projeto) return <div className="p-20 text-center font-serif text-slate-500">Projeto não encontrado.</div>;
  
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A]">
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Voltar
        </Link>
        {projeto.link && (
          <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
            Ver no LinkedIn <ExternalLink size={14} />
          </a>
        )}
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap gap-2 mb-6">
            {projeto.category.map((cat, i) => (
              <span key={i} className={`text-[10px] font-bold border px-3 py-1 rounded uppercase tracking-wider ${categoryStyles[cat] || 'bg-slate-50'}`}>
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mt-4 mb-8 leading-[1.1]">{projeto.title}</h1>
          <p className="text-xl md:text-2xl font-serif italic text-slate-500 mb-16 max-w-3xl leading-relaxed">
            "{projeto.shortDescription}"
          </p>
        </motion.div>

        {projeto.videoUrl && (
          <section className="mb-24">
            <div className="flex items-center gap-2 mb-6 text-blue-600 font-bold uppercase text-xs tracking-[0.2em]">
              <Play size={18} fill="currentColor" /> Demonstração Interativa
            </div>
            <div className="rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video border-[8px] border-white">
              <video controls className="w-full h-full object-cover">
                <source src={projeto.videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </section>
        )}

        {/* CONTEÚDO TÉCNICO E TECNOLOGIAS EM DESTAQUE */}
        <div className="border-t border-slate-200 pt-16 mb-20">
          
          {/* SEÇÃO DE TECNOLOGIAS - MAIOR E ACIMA DOS INSIGHTS */}
          <section className="mb-20">
            <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-slate-400 mb-8 text-xs">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-12">
              {projeto.tools.map((tool) => (
                <motion.div 
                  key={tool} 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 group-hover:border-blue-500 transition-all duration-300">
                    <img 
                      src={techIcons[tool] || `https://cdn.simpleicons.org/code/slate`} 
                      alt={tool} 
                      className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter text-slate-400 group-hover:text-slate-900 transition-colors">
                    {tool}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* GRID DE PROBLEMA, RESULTADO E INSIGHTS */}
          <div className="grid md:grid-cols-3 gap-16 border-t border-slate-100 pt-16">
            <div className="space-y-12 text-sm">
              <div>
                <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <Target size={14}/> Problema
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">{projeto.problem}</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-slate-400 mb-4">
                  <BarChart3 size={14}/> Resultado
                </h3>
                <p className="text-blue-600 font-bold text-2xl tracking-tight leading-tight">{projeto.results}</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="flex items-center gap-2 font-bold uppercase tracking-widest text-slate-400 mb-8 text-xs">
                <Lightbulb size={16}/> Insights Estratégicos
              </h3>
              <div className="grid gap-6">
                {projeto.insights.map((insight, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm border-l-4 border-l-blue-600 transition-all"
                  >
                    <p className="font-medium text-lg leading-snug text-slate-800">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Esta função diz ao Next quais IDs de projeto existem para gerar as páginas estáticas
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}