"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/constants/projects';
import { ArrowUpRight, PlayCircle, Image as ImageIcon, FileText, Linkedin, Mail, Github } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script'; // Adicione esta linha

// Estilizacao do botao da traducao
const googleTranslateStyles = `
  .goog-te-banner-frame.skiptranslate {
    display: none !important;
  }

  body {
    top: 0px !important;
  }

  /* Remove textos extras */
  .goog-te-gadget span,
  .goog-logo-link {
    display: none !important;
  }

  .goog-te-gadget {
    display: flex !important;
    align-items: center !important;
  }

  .goog-te-combo {
      font-size: 11px !important;
  font-weight: 600 !important;
  letter-spacing: 0.08em !important;

  background: transparent !important;
  border: none !important;
  padding: 0 16px 0 0 !important;
  margin: 0 !important;

  cursor: pointer !important;
  color: #2563eb !important;

  appearance: none !important;
  -webkit-appearance: none !important;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%232563eb' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat !important;
  background-position: right center !important;
  }
`;



const allTools = [
  { name: 'Power BI', slug: 'powerbi', color: 'F2C811' },
  { name: 'Excel', slug: 'excel', color: 'F2C811' },
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'SQL', slug: 'sqlite', color: '003B57' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'Java', slug: 'java', color: 'F7DF1E' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'HTML', slug: 'html5', color: 'E34F26' },
  { name: 'CSS', slug: 'css', color: '1572B6' },
  { name: 'GitHub', slug: 'github', color: '181717' },
  { name: 'Gemini', slug: 'googlegemini', color: '8E75FF' },
  { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
  { name: 'Vercel', slug: 'vercel', color: '000000' },
  { name: 'Supabase', slug: 'supabase', color: '3ECF8E' },
  { name: 'Resend', slug: 'resend', color: '000000' },
];

export default function Home() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Acadêmico', 'Profissional', 'Soluções', 'Dashboard', 'Estudo de Caso'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(p => Array.isArray(p.category) && p.category.includes(filter));

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] selection:bg-blue-100 overflow-x-hidden">

      <style>{googleTranslateStyles}</style>

      {/* BOTÃO DE TRADUÇÃO */}
      <div className="fixed top-6 right-6 z-[100] flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md hover:border-blue-600 transition">
        <span className="text-xs text-blue-600 font-semibold">
          🌐 PT | EN
        </span>

        <div id="google_translate_element" className="flex items-center">
          <Script id="google-translate-init" strategy="afterInteractive">
            {`
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'pt',
                    includedLanguages: 'pt,en',
                    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
                    autoDisplay: false
                  },
                  'google_translate_element'
                );
              }
            `}
          </Script>

          <Script
            src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            strategy="afterInteractive"
          />
        </div>
      </div>

      {/* ... seu código do botão de idioma se mantém aqui ... */}
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 mt-10 items-center">

          {/* COLUNA DO NOME (ESQUERDA) */}
          <div className="md:col-span-7 lg:col-span-8">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] uppercase tracking-tighter"
            >
              João Vitor <br />
              <span className="text-blue-600 italic">Patheis</span> <br />
              <span className="text-slate-400">Dos Santos</span>
            </motion.h1>
          </div>

          {/* COLUNA DA LOGO + DESCRIÇÃO (DIREITA) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end justify-center space-y-8">

            {/* LOGO AGORA DENTRO DO GRID E RESPONSIVA */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              src="/Portfolio/imagens/logo.png"
              alt="Logo João Vitor"
              className="w-40 md:w-56 lg:w-64 h-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-all duration-700"
            />

            <div className="text-center md:text-right space-y-4">
              <p className="font-serif italic text-lg md:text-xl text-slate-500 leading-snug">
                "Transformando dados complexos em decisões de alto impacto estratégico."
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold border-t border-slate-200 pt-4">
                Tecnólogo em Analise e Desenvolvimento de Sistemas <br /> From Mococa, SP
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>

      {/* CARROSSEL DE FERRAMENTAS */}
      <section className="py-10 bg-white overflow-hidden border-b border-slate-100">
        <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
          {[...allTools, ...allTools, ...allTools].map((tool, i) => (
            <div key={i} className="flex items-center gap-4 mx-12 grayscale hover:grayscale-0 transition-all duration-500 cursor-default group">
              <img
                src={
                  tool.slug === 'powerbi'
                    ? "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg"
                    : tool.slug === 'java'
                      ? "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                      : tool.slug === 'excel'
                        ? "https://img.icons8.com/?size=100&id=117561&format=png&color=000000"
                        : `https://cdn.simpleicons.org/${tool.slug}/${tool.color}`
                }
                alt={tool.name}
                className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity object-contain"
              />
              <span className={`text-2xl font-display uppercase tracking-tighter transition-colors duration-500 text-slate-200 ${tool.slug === 'powerbi' ? 'group-hover:text-[#F2C811]' :
                tool.slug === 'java' ? 'group-hover:text-[#ED8B00]' : 'group-hover:text-slate-900'
                }`}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FILTROS */}
      <section className="sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-wrap gap-6 items-center">
          <span className="text-[9px] uppercase tracking-widest font-bold text-slate-300">Filtrar</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs uppercase tracking-wider transition-all px-3 py-1 rounded-full border ${filter === cat ? 'bg-blue-600 text-white border-blue-600 font-bold' : 'text-slate-400 border-transparent hover:border-slate-200 hover:text-slate-900'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* LISTA DE PROJETOS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </section>

      {/* FOOTER INTEGRADO: VAMOS CONVERSAR + ICONES LINKADOS */}
      <footer className="px-6 md:px-12 py-24 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-end">

          {/* LADO ESQUERDO: TEXTO E ICONES */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter uppercase leading-none text-slate-900">
                Vamos <br /> conversar?
              </h2>
              <p className="text-base md:text-lg text-slate-500 font-serif italic max-w-sm">
                Disponível para novos projetos e parcerias estratégicas.
              </p>
            </div>

            {/* LINKS SOCIAIS LADO A LADO */}
            <div className="flex flex-wrap gap-8 text-lg font-medium">
              <SocialLink href="https://www.linkedin.com/in/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="mailto:joao.patheisds@gmail.com" icon={<Mail size={20} />} label="Email" />
              <SocialLink href="https://github.com/Patheis" icon={<Github size={20} />} label="GitHub" />
            </div>
          </div>

          {/* LADO DIREITO: CHAMADA DE E-MAIL */}
          <div className="md:text-right pb-1">
            <a
              href="mailto:joao.patheisds@gmail.com"
              className="inline-block text-lg font-bold uppercase tracking-tighter border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors"
            >
              Me envie um e-mail →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-all border-b border-transparent hover:border-blue-600 group">
      <span className="text-slate-400 group-hover:text-blue-600 transition-colors">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function ProjectRow({ project, index }: { project: Project, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const categoryStyles: { [key: string]: string } = {
    'Acadêmico': 'bg-blue-50 text-blue-600 border-blue-100',
    'Profissional': 'bg-red-50 text-red-600 border-red-100',
    'Soluções': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Dashboard': 'bg-purple-50 text-purple-600 border-purple-100',
    'Estudo de Caso': 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <motion.div
      layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-slate-100 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-slate-50/10 px-4 transition-all duration-300"
    >
      {/* IMAGEM NO HOVER - POSICIONAMENTO CORRIGIDO */}
      <AnimatePresence>
        {isHovered && project.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x - 150,
              y: mousePos.y - 280
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{ position: 'fixed', left: 0, top: 0 }}
            className="pointer-events-none z-[100] hidden lg:block w-80 h-52 overflow-hidden rounded-xl shadow-2xl border-4 border-white"
          >
            <img src={project.imageUrl} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {Array.isArray(project.category) && project.category.map((cat, i) => (
            <span key={i} className={`text-[9px] font-mono border px-2 py-0.5 rounded uppercase font-bold transition-colors ${categoryStyles[cat] || 'bg-slate-50 text-slate-600'}`}>
              {cat}
            </span>
          ))}
        </div>

        <Link href={`/projeto/${project.id}`}>
          <h3 className="text-1xl md:text-1xl lg:text-4xl font-medium tracking-tighter group-hover:italic group-hover:translate-x-4 transition-all duration-500 cursor-pointer uppercase">
            {project.title}
          </h3>
        </Link>

        {/* ÍCONES DE MÍDIA COLORIDOS */}
        <div className="flex gap-4 mt-6">
          <PlayCircle size={20} className={project.videoUrl ? "text-blue-600" : "text-slate-200"} />
          <ImageIcon size={20} className={project.imageUrl ? "text-blue-600" : "text-slate-200"} />
          <FileText size={20} className={project.articleUrl ? "text-blue-600" : "text-slate-200"} />
        </div>
      </div>

      <div className="relative z-10 mt-6 md:mt-0">
        <Link href={`/projeto/${project.id}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all cursor-pointer group-hover:rotate-45 duration-500">
            <ArrowUpRight size={28} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}