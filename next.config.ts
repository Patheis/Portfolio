import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Essencial para gerar os arquivos estáticos para o GitHub Pages
  images: {
    unoptimized: true,   // Necessário para evitar erro de build com o componente Image do Next
  },
  // ATENÇÃO: Substitua 'NOME-DO-REPOSITORIO' pelo nome exato do seu projeto no GitHub
  // Exemplo: se o link for patheis.github.io/meu-projeto, use '/meu-projeto'
  basePath: 'Portfolio', 
  
  // Opcional: Garante que os links de navegação e assets funcionem com a barra final
  trailingSlash: true,
};

export default nextConfig;
