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
  bd?: string;
}

export const projects: Project[] = [
  {
    id: 'site-senebra',
    title: 'Escritório Contábil Senebra',
    category: ['Soluções', 'Profissional'],
    shortDescription: 'Desenvolvimento e deploy do site oficial para um dos escritórios de contabilidade mais tradicionais da região.',
    problem: 'Necessidade de presença digital para reforçar a credibilidade e ampliar o alcance dos serviços contábeis no ambiente online.',
    methodology: [
      'Desenvolvimento de interface moderna focada em autoridade e confiança',
      'Implementação de protocolo de segurança SSL para proteção de dados',
      'Configuração de pipeline de Integração Contínua (CI/CD) para deploy automatizado',
      'Otimização de SEO para busca local (Mococa e região)'
    ],
    insights: [
      'A presença digital transforma a tradição do escritório em autoridade acessível 24h.',
      'Certificação SSL e segurança ativa são pilares fundamentais para o setor contábil.',
      'A automação do deploy garante que o site esteja sempre atualizado com baixo esforço de manutenção.'
    ],
    results: 'Site 100% em produção, seguro e funcional, servindo como o principal ponto de contato digital para novos clientes.',
    tools: ['React', 'Next.js', 'CSS', 'GitHub', 'Vercel'],
    imageUrl: '/Portfolio/imagens/site-senebra.png',
    videoUrl: '/Portfolio/videos/site-senebra.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_nextjs-webdev-sucesso-ugcPost-7420457772175118336-oGUl',
    link: 'https://escritoriocontabilsenebra.com.br/'
  },

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
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_saaeqde-gestantes-sus-activity-7341682020504199168-ZYx-',
    bd: '/Portfolio/bd/gestantes.png'
  },
  {
    id: 'automacao-nfe-xml-python',
    title: 'Automação de Notas Fiscais (XML)',
    category: ['Soluções', 'Estudo de Caso', 'Profissional'],
    shortDescription: 'Sistema Full Stack para extração automatizada de dados de arquivos XML de NF-e e armazenamento estruturado.',
    problem: 'Processo manual e lento de extração de dados de notas fiscais, suscetível a erros de digitação e falta de padronização.',
    methodology: [
      'Desenvolvimento de script Python para parsing de arquivos XML utilizando ElementTree',
      'Criação de interface Web com Flask para upload de arquivos únicos ou diretórios',
      'Estruturação de banco de dados MySQL para armazenamento de impostos, clientes e valores',
      'Tratamento de dados e validação de duplicidade com a biblioteca Pandas'
    ],
    insights: [
      'A automação eliminou o risco de duplicidade de registros no banco de dados.',
      'A integração Flask + MySQL permitiu uma consulta rápida e centralizada de impostos.',
      'A manipulação de XML abriu caminho para futuras integrações automáticas com ERPs.'
    ],
    results: 'Eliminação total do trabalho manual de digitação de NF-e, garantindo integridade dos dados para análises financeiras futuras.',
    tools: ['Python', 'Flask', 'MySQL', 'Pandas', 'HTML', 'CSS', 'Git'],
    imageUrl: '/Portfolio/imagens/automacao-xml.png',
    videoUrl: '/Portfolio/videos/automacao-xml.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_python-flask-mysql-activity-7292381469392433152-13ZN',
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_python-flask-mysql-activity-7292381469392433152-13ZN',
    bd: '/Portfolio/bd/importa.png'
  },

  {
    id: 'dashboard-analise-financeira-nfe',
    title: 'Dashboard de Análise Financeira (NF-e)',
    category: ['Dashboard', 'Soluções', 'Profissional'],
    shortDescription: 'Integração End-to-End: Automação de extração de NF-e em Python com visualização estratégica no Power BI.',
    problem: 'Dificuldade em visualizar o impacto tributário e financeiro acumulado devido ao volume de arquivos XML dispersos.',
    methodology: [
      'Desenvolvimento de pipeline ETL para extração de dados brutos de XMLs (NF-e)',
      'Modelagem de dados no Power BI conectada ao banco MySQL',
      'Criação de métricas (DAX) para cálculo de impostos e faturamento líquido',
      'Design de interface (UI/UX) focada em acompanhamento de custos empresariais'
    ],
    insights: [
      'A visualização clara dos impostos permitiu identificar picos de custos tributários.',
      'A automação do upload reduziu o tempo de atualização do Dashboard de horas para segundos.',
      'A centralização dos dados no MySQL possibilitou um histórico financeiro auditável.'
    ],
    results: 'Dashboard interativo que permite decisões assertivas através da análise clara de custos reais e impostos pagos.',
    // Ícones que ficarão acesos na Home
    tools: ['Power BI', 'Python', 'MySQL'],
    imageUrl: '/Portfolio/imagens/dashboard-nfe.png',
    videoUrl: '/Portfolio/videos/dashboard-nfe.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_powerbi-etl-dataanalytics-activity-7293106153280954369-Ur8Z',
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_powerbi-etl-dataanalytics-activity-7293106153280954369-Ur8Z'
  },

  {
    id: 'conversor-vob-para-mp4-python',
    title: 'Conversor de Vídeo: VOB para MP4',
    category: ['Soluções', 'Profissional'],
    shortDescription: 'Desenvolvimento de uma ferramenta de automação para conversão ultra-rápida de formatos de vídeo legados (VOB) para MP4.',
    problem: 'Incompatibilidade de arquivos VOB (extraídos de DVDs antigos) com dispositivos e players modernos, além da demora em processos manuais de conversão.',
    methodology: [
      'Utilização da biblioteca OS para mapeamento e gestão de diretórios de arquivos multimídia',
      'Integração com o FFmpeg para processamento de vídeo via linha de comando no Python',
      'Implementação de lógica de automação para processamento em lote (Batch Processing)',
      'Otimização de hardware para atingir a marca de 1h30 de vídeo convertido em apenas 5 minutos'
    ],
    insights: [
      'A automação via script eliminou a necessidade de softwares de conversão pesados e limitados.',
      'O uso do FFmpeg permitiu uma conversão sem perda perceptível de qualidade original.',
      'A eficiência do código demonstrou como Python pode ser uma ponte poderosa para ferramentas de baixo nível.'
    ],
    results: 'Conversão de alta performance: redução drástica no tempo de processamento, tornando memórias de 25 anos atrás acessíveis em qualquer dispositivo atual.',
    // Ícones que ficarão "acesos" na Home
    tools: ['Python', 'Git'],
    imageUrl: '/Portfolio/imagens/conversor-vhs.png',
    videoUrl: '/Portfolio/videos/conversor-vhs.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_python-projetos-tecnologia-activity-7286395562768146433-UuP3',
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_python-projetos-tecnologia-activity-7286395562768146433-UuP3'
  },
  {
    id: 'sistema-gestao-hospitalar-seguranca-paciente',
    title: 'Sistema de Gestão Hospitalar e Prescrição',
    category: ['Acadêmico', 'Soluções', 'Estudo de Caso'],
    shortDescription: 'Sistema de prontuário e prescrição médica com foco em segurança do paciente, controle de dosagem e alertas de comorbidades.',
    problem: 'Risco de erros humanos em prescrições médicas, confusão de dosagens e falta de histórico centralizado de patologias e medicamentos.',
    methodology: [
      'Desenvolvimento utilizando linguagem Java com arquitetura voltada para segurança de dados',
      'Modelagem de banco de dados MySQL para controle rigoroso de comorbidades e patologias',
      'Implementação de lógica de validação para restrições de medicamentos e dosagens recomendadas',
      'Integração de serviços de e-mail e geração de relatórios dinâmicos em PDF'
    ],
    insights: [
      'A implementação de restrições por patologia reduziu drasticamente o risco de prescrições inadequadas.',
      'A automação da geração de receitas agilizou o fluxo de atendimento médico sem comprometer a segurança.',
      'O histórico centralizado permitiu uma visão holística do tratamento, evitando reações adversas por medicamentos conflitantes.'
    ],
    results: 'Aprovação com nota máxima (10): Um sistema robusto que garante a integridade da vida do paciente através de controles sistêmicos inteligentes.',
    // Ícones que ficarão "acesos" na Home
    tools: ['Java', 'MySQL', 'Git'],
    imageUrl: '/Portfolio/imagens/tcc-hospitalar.png',
    videoUrl: '/Portfolio/videos/tcc-hospitalar.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_%C3%A9-com-muito-orgulho-que-apresento-meu-trabalho-activity-7279615953418567681-cvVN',
    link: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_%C3%A9-com-muito-orgulho-que-apresento-meu-trabalho-activity-7279615953418567681-cvVN',
    bd: '/Portfolio/bd/tcc.png'
  },

  {
    id: 'automacao-qr-code-vba-python',
    title: 'Automação de Geração de QR Codes',
    category: ['Soluções', 'Profissional'],
    shortDescription: 'Sistema híbrido VBA/Python para geração massiva de 450 QR Codes com tratamento automatizado de imagem.',
    problem: 'Necessidade de gerar 450 QR Codes exclusivos de forma rápida, com fundo transparente para aplicação em diversos materiais de design.',
    methodology: [
      'Desenvolvimento de script em VBA para geração em lote de QR Codes dentro do ambiente Excel',
      'Criação de script Python utilizando a biblioteca Pillow para processamento de imagem',
      'Implementação de rotina de remoção automatizada de fundo (background removal)',
      'Gestão de arquivos e organização de diretórios para entrega massiva ao cliente'
    ],
    insights: [
      'A integração VBA + Python reduziu o que seriam dias de trabalho manual para apenas alguns minutos de execução.',
      'O uso da biblioteca Pillow garantiu uma padronização visual profissional para todos os 450 arquivos.',
      'A solução demonstrou como automações simples podem gerar economia de escala imediata em demandas comerciais.'
    ],
    results: 'Geração e tratamento de 450 QR Codes finalizada com sucesso, eliminando o erro humano e garantindo 100% de produtividade na entrega.',
    // Ícones que ficarão "acesos" na Home
    tools: ['Python', 'Git', 'Excel'],
    imageUrl: '/Portfolio/imagens/automacao-qrcode.png',
    videoUrl: '/Portfolio/videos/automacao-qrcode.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_automaaexaeto-python-vba-activity-7262953582327447552-FddJ',
    link: 'https://github.com/Patheis/Conversor-VOB-MP4' // Link do GitHub que você forneceu no post
  },

  {
    id: 'sistema-login-seguro-php',
    title: 'Sistema de Login com Segurança Robusta',
    category: ['Acadêmico', 'Estudo de Caso'],
    shortDescription: 'Desenvolvimento de um sistema de autenticação em PHP focado em Segurança da Informação, com criptografia SHA-256 e proteção contra ataques comuns.',
    problem: 'Vulnerabilidades em sistemas de autenticação que permitem ataques de SQL Injection e exposição de senhas em texto puro.',
    methodology: [
      'Implementação de criptografia SHA-256 para armazenamento seguro de credenciais no banco de dados',
      'Desenvolvimento de camadas de proteção contra SQL Injection e ataques de força bruta',
      'Criação de filtros de validação para garantir o uso de senhas fortes e sanitização de entradas',
      'Estruturação do backend em PHP integrado a uma interface dinâmica em JavaScript'
    ],
    insights: [
      'A utilização de SHA-256 elevou o padrão de segurança, garantindo que mesmo em caso de vazamento, os dados sensíveis permaneçam protegidos.',
      'A prevenção proativa contra SQL Injection demonstrou a importância de práticas de codificação segura desde o início do desenvolvimento.',
      'O sistema foi projetado seguindo as diretrizes de Segurança da Informação aprendidas na FATEC Mococa.'
    ],
    results: 'Sistema de autenticação aprovado e funcional, garantindo uma barreira eficiente contra as ameaças web mais comuns.',
    // Ícones que ficarão "acesos" na Home
    tools: ['PHP', 'JavaScript', 'MySQL', 'Git'],
    imageUrl: '/Portfolio/imagens/login-seguro.png',
    videoUrl: '/Portfolio/videos/login-seguro.mp4',
    articleUrl: 'https://www.linkedin.com/posts/jo%C3%A3o-vitor-patheis-dos-santos-922a3620b_seguranaexadainformaaexaeto-php-javascript-activity-7257940046421368832-PHp_',
    link: 'https://github.com/Patheis/Login_Seguro'
  },
];