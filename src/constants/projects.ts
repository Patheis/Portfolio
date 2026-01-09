export interface Project {
  id: string;
  title: string;
  category: string[];
  shortDescription: string;
  problem: string;
  methodology: string[];
  insights: string[];
  results: string;
  tools: string[];
  imageUrl: string;
  videoUrl?: string;
  articleUrl?: string; // CAMPO ADICIONADO AQUI
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'acompanhamento-gestantes-web',
    title: 'Sistema de Acompanhamento de Gestantes',
    category: ['Soluções', 'Acadêmico'],
    shortDescription: 'Aplicação Web para automação de cronogramas gestacionais e exames críticos no SUS.',
    problem: 'Dificuldade manual no cálculo de datas previstas de parto e agendamento de exames essenciais (Translucência Nucal e Ultrassom).',
    methodology: [
      'Desenvolvimento de lógica de cálculo baseada na DUM (Data da Última Menstruação)',
      'Arquitetura Full Stack para persistência de dados das pacientes',
      'Integração de Frontend (React) com Backend (Node.js)'
    ],
    insights: [
      'Redução de erros humanos no agendamento de exames cruciais para a saúde fetal.',
      'Melhoria na eficiência do atendimento primário municipal.',
      'Acompanhamento centralizado e acessível via navegador.'
    ],
    results: 'Automação completa do cronograma gestacional, facilitando o suporte à decisão clínica para profissionais de saúde municipal.',
    tools: ['React', 'Node.js', 'MySQL'],
    imageUrl: '/Portfolio/imagens/gestantes.png', 
    videoUrl: '/Portfolio/videos/gestantes.mp4', 
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_saaeqde-gestantes-sus-activity-7341682020504199168-ZYx-',
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_saaeqde-gestantes-sus-activity-7341682020504199168-ZYx-'
  },
];