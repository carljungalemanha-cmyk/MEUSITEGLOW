export interface FeedbackItem {
  id: string;
  nome: string;
  cargo: string;
  area: string;
  cidade: string;
  foto?: string;
  estrelas: number;
  texto: string;
  destaque?: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface RecursoItem {
  id: string;
  categoria: 'Identidade e design' | 'Conteúdo' | 'Agendamento' | 'Visibilidade' | 'Técnico';
  titulo: string;
  subtitulo: string;
  explicacao: string;
}

export const SITE = {
  marca: {
    nome: 'Glow Sites',
    tagline: 'Sites de luxo para a estética avançada',
    instagram: 'https://www.instagram.com/glow.websites/',
    instagramUser: '@glow.websites',
    whatsapp: '557192102766',
    whatsappFormatado: '(71) 9210-2766',
    email: 'contato@glowsites.com.br',
    dominio: 'https://glowsites.com.br',
    logo: 'https://i.ibb.co/C3DyGDwH/Redraw-logo-in-gold-background-2-K-20260925063353.webp',
  },
  lana: {
    nome: 'Lana',
    cargo: 'Web designer e desenvolvedora',
    foto: 'https://i.ibb.co/Q7kShQd0/a7f7826e-09f1-43b9-9e9f-20bc3921427f.webp',
    anos: 4,
    sites: 500,
    paises: 'mais de 7 países',
    paisesNumero: 7,
  },
  frase: {
    inicio: 'Sua técnica transforma rostos.',
    destaque: 'Seu site transforma desconhecidas em pacientes.',
  },
  hero: {
    titulo: 'Sua clínica é premium.',
    destaque: 'Seu site também deveria ser.',
    subtitulo:
      'Criamos sites de luxo para profissionais da harmonização facial e estética: únicos, rápidos e preparados para o Google e para as IAs, para que a paciente certa te encontre, confie e agende.',
    cards: ['+500 sites entregues', '+4 anos de experiência', 'Clientes em mais de 7 países'],
    cta: 'Quero meu esboço sem custo',
    apoio: 'Sem compromisso. Resposta direto no WhatsApp.',
    selo: 'Especialista em clínicas de estética',
  },
  faixa: [
    'SEO',
    'BEAUTY',
    'DESIGN',
    'LUXURY',
    'ESTÉTICA',
    'CONVERSÃO',
    'AIO',
    'GEO',
    'SITES ÚNICOS',
  ],
  mensagemWhats: 'Olá, Lana! Vim pelo site da Glow Sites e quero receber um esboço sem custo.',
  oProblema: {
    titulo: 'Antes de agendar, a paciente pesquisa.',
    subtitulo:
      'Ela compara, procura prova de que você é segura e decide por confiança. Onde ela te encontra define se ela chega até você.',
    cards: [
      {
        num: '01',
        titulo: 'Ela pergunta ao Google e às IAs',
        sub: '“Quem faz procedimentos estéticos perto de mim?”',
        desc: 'A paciente moderna pesquisa no Google Maps, no ChatGPT e no Perplexity por recomendações sérias e clínicas de referência na sua região.',
      },
      {
        num: '02',
        titulo: 'Ela compara perfis e consultórios',
        sub: 'Procura autoridade, resultados e organização',
        desc: 'No Instagram, todo feed se parece. Ela procura um endereço digital próprio para ver fotos em alta definição, formação acadêmica, protocolos e ambiente.',
      },
      {
        num: '03',
        titulo: 'Ela escolhe quem passa segurança',
        sub: 'O site é onde a decisão de agendar acontece',
        desc: 'Procedimentos faciais envolvem autoestima e medo de exageros. Quem tem um site de alto padrão transmite a credibilidade de um consultório consolidado.',
      },
    ],
  },
  comOuSem: {
    titulo: 'Ter um site, ou não ter: a diferença é a confiança.',
    subtitulo: 'Seu Instagram é sua vitrine. O site é a sua clínica aberta 24 horas.',
    semSite: {
      titulo: 'Só com Instagram',
      subtitulo: 'Você refém do algoritmo',
      itens: [
        'Depende do algoritmo e do alcance orgânico para ser vista',
        'Informação solta nos destaques e difícil de navegar',
        'Invisível para buscas no Google e inteligências artificiais',
        'Parece mais um perfil comum entre centenas na sua cidade',
        'Mensagens frias e descontextualizadas no WhatsApp perguntando só “preço”',
      ],
    },
    comSite: {
      titulo: 'Com um site Glow',
      subtitulo: 'Sua autoridade incontestável',
      itens: [
        'Presença própria, elegante e com total controle da sua marca',
        'Serviços, antes & depois autorizados e formação num só lugar',
        'Estrutura técnica otimizada para SEO, GEO e IAs',
        'Aparência imediata de clínica de alto padrão e luxo',
        'A paciente já chega qualificada no WhatsApp sabendo procedimento e interesse',
      ],
    },
  },
  recursosCatalogo: [
    // Identidade e design (4)
    {
      id: 'rec-1',
      categoria: 'Identidade e design',
      titulo: 'Design exclusivo',
      subtitulo: 'Feito do zero para o seu estúdio.',
      explicacao:
        'Cada traço, tipografia e espaçamento é criado especificamente para a identidade visual da sua clínica, sem uso de modelos genéricos ou clonados.',
    },
    {
      id: 'rec-2',
      categoria: 'Identidade e design',
      titulo: 'Identidade visual aplicada',
      subtitulo: 'Cores, fontes e fotos com a sua cara.',
      explicacao:
        'Harmonização precisa da sua paleta de cores institucional, famílias tipográficas nobres e diagramação fotográfica sofisticada.',
    },
    {
      id: 'rec-3',
      categoria: 'Identidade e design',
      titulo: 'Animações modernas e interativas',
      subtitulo: 'Movimento sutil que deixa o site vivo.',
      explicacao:
        'Microinterações com inércia fluida, transições ao rolar e brilhos dourados delicados que impressionam sem comprometer o tempo de carregamento.',
    },
    {
      id: 'rec-4',
      categoria: 'Identidade e design',
      titulo: '100% responsivo',
      subtitulo: 'Perfeito no celular, tablet e computador.',
      explicacao:
        'Adaptação milimétrica para qualquer tamanho de tela, com foco especial na navegação por toque em smartphones (onde mais de 85% das pacientes acessam).',
    },
    // Conteúdo (9)
    {
      id: 'rec-5',
      categoria: 'Conteúdo',
      titulo: 'Copywriting profissional',
      subtitulo: 'Textos que transformam visitas em agendamentos.',
      explicacao:
        'Redação persuasiva baseada na psicologia de compra de estética de alto padrão, valorizando sua formação técnica e quebrando objeções.',
    },
    {
      id: 'rec-6',
      categoria: 'Conteúdo',
      titulo: 'Página de abertura estratégica',
      subtitulo: 'A primeira tela que prende a atenção.',
      explicacao:
        'Primeira dobra com proposta de valor cristalina, carregamento ultra-rápido e botões de chamada rápida para prender a visitante em segundos.',
    },
    {
      id: 'rec-7',
      categoria: 'Conteúdo',
      titulo: 'Sobre você',
      subtitulo: 'Sua história gera conexão e confiança.',
      explicacao:
        'Seção dedicada à sua trajetória acadêmica, certificações, cursos de aperfeiçoamento e filosofia de atendimento.',
    },
    {
      id: 'rec-8',
      categoria: 'Conteúdo',
      titulo: 'Serviços bem explicados',
      subtitulo: 'Cada procedimento com descrição clara.',
      explicacao:
        'Detalhamento claro de harmonização, botox, preenchimento, bioestimuladores e fios com indicações, tempo e resultados esperados.',
    },
    {
      id: 'rec-9',
      categoria: 'Conteúdo',
      titulo: 'Galeria e portfólio em HD',
      subtitulo: 'Seus trabalhos organizados por serviço.',
      explicacao:
        'Exibição visual com alta fidelidade de imagem de casos autorizados, ressaltando o foco na naturalidade e harmonia estética.',
    },
    {
      id: 'rec-10',
      categoria: 'Conteúdo',
      titulo: 'Como é o atendimento',
      subtitulo: 'A cliente sabe o que esperar.',
      explicacao:
        'Explicação do passo a passo da consulta de avaliação, acolhimento no consultório e plano de tratamento individualizado.',
    },
    {
      id: 'rec-11',
      categoria: 'Conteúdo',
      titulo: 'Depoimentos e feedbacks',
      subtitulo: 'Prova social que convence.',
      explicacao:
        'Avaliações reais de pacientes satisfeitas organizadas de forma nobre com classificação por estrelas para dissipar medos.',
    },
    {
      id: 'rec-12',
      categoria: 'Conteúdo',
      titulo: 'Perguntas frequentes (FAQ)',
      subtitulo: 'Respostas rápidas para as dúvidas comuns.',
      explicacao:
        'Acordeão dinâmico respondendo sobre dor, durabilidade, anestesia e contraindicações, economizando tempo precioso da sua secretária.',
    },
    {
      id: 'rec-13',
      categoria: 'Conteúdo',
      titulo: 'Cuidados e orientações',
      subtitulo: 'Antes e depois do procedimento.',
      explicacao:
        'Guias e recomendações essenciais de pré e pós-procedimento para passar máxima seriedade médica e cuidado com a paciente.',
    },
    // Agendamento (4)
    {
      id: 'rec-14',
      categoria: 'Agendamento',
      titulo: 'Integração com agendamento',
      subtitulo: 'Marcação em poucos toques.',
      explicacao:
        'Caminho simplificado que reduz cliques e atritos, direcionando a paciente diretamente para a confirmação de horário.',
    },
    {
      id: 'rec-15',
      categoria: 'Agendamento',
      titulo: 'Botão flutuante de WhatsApp',
      subtitulo: 'Sempre à vista, em qualquer parte da página.',
      explicacao:
        'Botão animado e elegante com pulso suave que acompanha a rolagem para que a paciente entre em contato no exato instante de interesse.',
    },
    {
      id: 'rec-16',
      categoria: 'Agendamento',
      titulo: 'Instagram e redes sociais',
      subtitulo: 'Ligação direta entre o site e o seu perfil.',
      explicacao:
        'Conexão harmoniosa que valida suas postagens e permite que novas visitantes do Google também comecem a seguir suas redes.',
    },
    {
      id: 'rec-17',
      categoria: 'Agendamento',
      titulo: 'Chamadas para ação estratégicas',
      subtitulo: 'O convite certo no momento certo.',
      explicacao:
        'Distribuição calibrada de botões de contato ao longo da página, sempre após a demonstração de autoridade e segurança.',
    },
    // Visibilidade (6)
    {
      id: 'rec-18',
      categoria: 'Visibilidade',
      titulo: 'SEO: otimização para o Google',
      subtitulo: 'Estrutura para ser encontrada nas buscas.',
      explicacao:
        'Palavras-chave regionais, metatags, tags semânticas e alta velocidade para ranquear em buscas como “harmonização facial na sua cidade”.',
    },
    {
      id: 'rec-19',
      categoria: 'Visibilidade',
      titulo: 'GEO: preparada para respostas de IA',
      subtitulo: 'Conteúdo que as IAs conseguem entender e citar.',
      explicacao:
        'Estruturação semântica com arquivo llms.txt para que agentes como ChatGPT, Perplexity e Gemini recomendem a sua clínica em consultas comparativas.',
    },
    {
      id: 'rec-20',
      categoria: 'Visibilidade',
      titulo: 'AIO: dados estruturados',
      subtitulo: 'O site "fala a língua" das máquinas.',
      explicacao:
        'Inclusão de código Schema.org (ProfessionalService e MedicalBusiness) no padrão internacional de indexação por motores de inteligência artificial.',
    },
    {
      id: 'rec-21',
      categoria: 'Visibilidade',
      titulo: 'Integração com Google Maps',
      subtitulo: 'Localização exata e botão de rota.',
      explicacao:
        'Mapa dinâmico com link direto para rota no Waze e Uber, facilitando a chegada das pacientes ao seu endereço físico.',
    },
    {
      id: 'rec-22',
      categoria: 'Visibilidade',
      titulo: 'Pré-visualização ao compartilhar',
      subtitulo: 'Link bonito no WhatsApp e no Instagram.',
      explicacao:
        'Cartões OpenGraph com imagem personalizada em alta definição, título impecável e resumo que aparecem ao enviar o link em conversas.',
    },
    {
      id: 'rec-23',
      categoria: 'Visibilidade',
      titulo: 'Multilíngue',
      subtitulo: 'Seu site em mais de um idioma.',
      explicacao:
        'Estrutura preparada para receber pacientes internacionais ou expatriadas que procuram atendimento estético de excelência.',
    },
    // Técnico (5)
    {
      id: 'rec-24',
      categoria: 'Técnico',
      titulo: 'Velocidade máxima',
      subtitulo: 'Abre em instantes.',
      explicacao:
        'Otimização avançada de código sem bibliotecas desnecessárias, imagens em WebP compactadas e carregamento em milissegundos.',
    },
    {
      id: 'rec-25',
      categoria: 'Técnico',
      titulo: 'Segurança com HTTPS',
      subtitulo: 'Cadeado de segurança em todo o site.',
      explicacao:
        'Certificado SSL ativo garantindo navegação criptografada, proteção de dados e confiabilidade máxima exigida pelos navegadores modernos.',
    },
    {
      id: 'rec-26',
      categoria: 'Técnico',
      titulo: 'Domínio incluído',
      subtitulo: 'Endereço próprio do seu estúdio.',
      explicacao:
        'Configuração e apontamento do domínio profissional (ex.: suaclinica.com.br) para consolidar a propriedade digital da sua marca.',
    },
    {
      id: 'rec-27',
      categoria: 'Técnico',
      titulo: 'Hospedagem na Vercel',
      subtitulo: 'Plataforma de referência mundial.',
      explicacao:
        'Hospedagem de nível global com distribuição por servidores de borda (Edge Network) que garante 99.9% de disponibilidade e resposta imediata.',
    },
    {
      id: 'rec-28',
      categoria: 'Técnico',
      titulo: 'Entrega pronta, sem burocracia',
      subtitulo: 'Você não mexe em nada técnico.',
      explicacao:
        'Cuidamos de 100% da parte de código, hospedagem e publicação. Você apenas recebe o site funcionando no ar pronto para uso.',
    },
  ] as RecursoItem[],
  seoGeoAio: {
    titulo: 'Para ser encontrada no Google e nas inteligências artificiais.',
    subtitulo:
      'Hoje as pacientes perguntam ao Google, ao ChatGPT e a outras IAs quem procurar. Seu site é construído para ser compreendido por todos eles.',
    cards: [
      {
        sigla: 'SEO',
        nome: 'Search Engine Optimization',
        foco: 'Otimizado para o Google',
        descricao:
          'Estrutura técnica, velocidade e palavras-chave estratégicas para buscas locais como “harmonização facial na sua cidade”.',
        itens: [
          'Tags semânticas H1-H6 com palavras-chave de estética',
          'Metadados específicos por cidade e procedimentos',
          'Carregamento em milissegundos para pontuação máxima Core Web Vitals',
          'Integração com Perfil da Empresa no Google (Google Meu Negócio)',
        ],
      },
      {
        sigla: 'GEO',
        nome: 'Generative Engine Optimization',
        foco: 'Reconhecido por IAs',
        descricao:
          'Conteúdo estruturado para que modelos como ChatGPT, Claude e Gemini citem seu consultório em respostas comparativas.',
        itens: [
          'Dados estruturados Schema.org (ProfessionalService e Médico)',
          'Entidades semânticas mapeadas em código JSON-LD',
          'Arquivo llms.txt na raiz informando serviços à IA',
          'Consistência de autoridade e especialidades para indexação por LLMs',
        ],
      },
      {
        sigla: 'AIO',
        nome: 'Artificial Intelligence Optimization',
        foco: 'Resumos e Recomendações',
        descricao:
          'Perguntas e respostas reais, termos técnicos claros e arquitetura pensada para que agentes de busca respondam que você é a melhor opção.',
        itens: [
          'Respostas diretas para perguntas frequentes que IAs utilizam',
          'Descrição de tratamentos e protocolos com linguagem clínica clara',
          'Transparência de diferenciais, certificações e segurança',
          'Presença multi-formato legível por crawlers generativos',
        ],
      },
    ],
    fluxo: [
      { passo: '01', titulo: 'A paciente pergunta', desc: 'No Google ou na IA: “Qual a melhor profissional de harmonização?”' },
      { passo: '02', titulo: 'Google e IAs leem o site', desc: 'Identificam sua especialidade, cidade, formação e dados estruturados' },
      { passo: '03', titulo: 'Você é encontrada e citada', desc: 'Seu nome aparece em destaque nos resultados e resumos recomendados' },
      { passo: '04', titulo: 'Ela chega e agenda', desc: 'Encantada pela página de alto luxo, ela clica e inicia conversa no WhatsApp' },
    ],
    notaHonesta:
      'Nenhum profissional sério garante a primeira posição. Entregamos a base técnica e o conteúdo certos para você disputar com vantagem.',
  },
  sitesUnicos: {
    titulo: 'Sites únicos. Nada de template.',
    subtitulo:
      'Layout, cores, animações e textos nascem da identidade de cada profissional. Duas clínicas nunca terão o mesmo site.',
    pilares: [
      { t: 'Design de luxo', d: 'Estética alinhada às marcas de alta joalheria e clínicas europeias.' },
      { t: 'Animações que impressionam', d: 'Movimentos suaves, inércia fluida e acabamento refinado.' },
      { t: 'Copy que cria desejo', d: 'Textos com posicionamento cirúrgico para atrair a paciente ideal.' },
    ],
    projetos: [
      {
        nome: 'Dra. Luane Ávila',
        sub: 'Harmonização Facial • Clínica Rare',
        img: '/img/projeto-1.svg',
        tag: 'Estética Facial Avançada',
      },
      {
        nome: 'Dr. Mateus Prado',
        sub: 'Rinomodelação & Masculina • Curitiba / PR',
        img: '/img/projeto-2.svg',
        tag: 'Alta Definição & Contorno',
      },
      {
        nome: 'Dra. Sofia Alencar',
        sub: 'Bioestimuladores & Fios • Belo Horizonte / MG',
        img: '/img/projeto-3.svg',
        tag: 'Rejuvenescimento Natural',
      },
      {
        nome: 'Dra. Valéria Fontes',
        sub: 'Estética Orofacial • Salvador / BA',
        img: '/img/projeto-4.svg',
        tag: 'Escultura Labial Áurea',
      },
    ],
  },
  comoFunciona: {
    titulo: 'Do esboço ao site no ar, em 4 passos.',
    subtitulo: 'Você vê o design antes de decidir qualquer coisa.',
    passos: [
      {
        num: '01',
        titulo: 'Esboço sem custo',
        desc: 'Você conta sobre a sua clínica e a Lana cria uma primeira ideia visual sob medida para o seu consultório, sem nenhum compromisso financeiro.',
      },
      {
        num: '02',
        titulo: 'Aprovação refinada',
        desc: 'Apresentamos a proposta visual, alinhamos paleta, detalhes e ajustamos juntas até que o conceito esteja 100% à altura do seu padrão de excelência.',
      },
      {
        num: '03',
        titulo: 'Desenvolvimento e SEO',
        desc: 'Construção completa com animações exclusivas, redação estratégica focada em conversão e otimização para o Google e para as inteligências artificiais.',
      },
      {
        num: '04',
        titulo: 'Publicação e celebração',
        desc: 'Seu site entra no ar rápido, seguro, com domínio próprio configurado e pronto para atrair pacientes que valorizam o seu procedimento.',
      },
    ],
    cta: 'Começar pelo esboço sem custo',
  },
  sobreLana: {
    titulo: 'Sobre a Glow Sites e sobre mim.',
    subtitulo: 'Design sofisticado, estratégia de verdade e cuidado em cada detalhe.',
    paragrafos: [
      'Sou a Lana, web designer e desenvolvedora há mais de 4 anos. Já entreguei mais de 500 sites para profissionais em vários países e aprendi que beleza sem estratégia não converte, e estratégia sem beleza não encanta.',
      'A Glow Sites nasceu para unir os dois, com foco em quem trabalha com estética e harmonização facial: design sofisticado, animações que impressionam e uma copy que cria desejo, aumenta sua autoridade e leva a paciente ao agendamento.',
    ],
  },
  feedbacks: [
    {
      id: 'fb1',
      nome: 'Dra. Camila Ribeiro',
      cargo: 'Cirurgiã-Dentista',
      area: 'Harmonização Orofacial',
      cidade: 'São Paulo • SP',
      estrelas: 5,
      texto:
        '“O site mudou totalmente o perfil das pacientes que chegam pelo WhatsApp. Antes vinham perguntando só valor; agora chegam falando sobre os protocolos específicos e elogiam o bom gosto do consultório antes mesmo da consulta.”',
      destaque: 'Pacientes muito mais qualificadas',
    },
    {
      id: 'fb2',
      nome: 'Dra. Mariana Vasconcelos',
      cargo: 'Biomédica Esteta',
      area: 'Bioestimuladores & Preenchimento',
      cidade: 'Rio de Janeiro • RJ',
      estrelas: 5,
      texto:
        '“A Lana captou a essência da minha clínica logo no primeiro esboço. O site ficou leve, elegante e passa exatamente a tranquilidade e a segurança que eu prezo no meu atendimento. Recomendo de olhos fechados!”',
      destaque: 'Design impecável e refinado',
    },
    {
      id: 'fb3',
      nome: 'Dr. Lucas Silveira',
      cargo: 'Cirurgião-Dentista',
      area: 'Rinomodelação & Mandíbula',
      cidade: 'Belo Horizonte • MG',
      estrelas: 5,
      texto:
        '“Impressionante a velocidade e a estrutura de SEO. Em menos de três semanas após o lançamento já comecei a receber contatos de pessoas que encontraram meu consultório buscando no Google na minha região.”',
      destaque: 'Resultado real no Google',
    },
    {
      id: 'fb4',
      nome: 'Dra. Letícia Drummond',
      cargo: 'Enfermeira Esteta',
      area: 'Lifting Temporal & Fios',
      cidade: 'Brasília • DF',
      estrelas: 5,
      texto:
        '“O processo do esboço sem custo me deu total tranquilidade para fechar. Ver o design da minha clínica antes de qualquer compromisso foi o grande diferencial. O resultado final superou minhas expectativas.”',
      destaque: 'Segurança desde o primeiro dia',
    },
    {
      id: 'fb5',
      nome: 'Dra. Juliana Prado',
      cargo: 'Cirurgiã-Dentista',
      area: 'Harmonização Facial Avançada',
      cidade: 'Curitiba • PR',
      estrelas: 5,
      texto:
        '“As animações são sutis e muito elegantes, nada daquele visual poluído. As pacientes comentam que parece um site de clínica de Paris ou Milão. Trouxe um peso de autoridade imenso para a minha marca.”',
      destaque: 'Padrão internacional de luxo',
    },
    {
      id: 'fb6',
      nome: 'Dra. Fernanda Sampaio',
      cargo: 'Farmacêutica Esteta',
      area: 'Toxina Botulínica & Bioestímulo',
      cidade: 'Salvador • BA',
      estrelas: 5,
      texto:
        '“O formulário inteligente para o WhatsApp agilizou demais o dia da minha secretária. A paciente já envia a mensagem dizendo exatamente qual procedimento tem interesse e qual período prefere.”',
      destaque: 'Agilidade na conversão',
    },
    {
      id: 'fb7',
      nome: 'Dra. Renata Albuquerque',
      cargo: 'Cirurgiã-Dentista',
      area: 'Harmonização Orofacial',
      cidade: 'Porto Alegre • RS',
      estrelas: 5,
      texto:
        '“Eu tinha receio de site ser template genérico, mas a Glow faz tudo exclusivo. A Lana pesquisou minha concorrência local e criou uma identidade só minha. Valeu cada centavo investido.”',
      destaque: 'Identidade 100% autoral',
    },
    {
      id: 'fb8',
      nome: 'Dra. Beatriz Meneses',
      cargo: 'Biomédica Esteta',
      area: 'Escultura Labial & Rejuvenescimento',
      cidade: 'Florianópolis • SC',
      estrelas: 5,
      texto:
        '“Meu Instagram estava com o alcance travado pelo algoritmo. Ter um site próprio nos deu independência total. Hoje fecho avaliações com pacientes que nem me seguiam na rede social.”',
      destaque: 'Independência do algoritmo',
    },
  ],
  faq: [
    {
      pergunta: 'Como funciona o esboço sem custo?',
      resposta:
        'Você conta sobre o seu consultório e seus procedimentos pelo WhatsApp, e a Lana prepara uma primeira proposta visual personalizada para você conhecer o estilo, as cores e a estrutura do site, sem qualquer compromisso financeiro.',
    },
    {
      pergunta: 'Em quanto tempo o site fica pronto?',
      resposta:
        'O prazo médio de entrega de um projeto completo é de 10 a 15 dias úteis após a aprovação do esboço e envio das informações básicas. Todo o cronograma é acompanhado diretamente com você.',
    },
    {
      pergunta: 'O site é um template pronto?',
      resposta:
        'Não, nenhum projeto da Glow utiliza templates prontos. Cada layout, paleta de cores, tipografia, microinterações e redação são desenvolvidos do zero para traduzir com fidelidade a identidade do seu consultório.',
    },
    {
      pergunta: 'O que é SEO, GEO e AIO?',
      resposta:
        'SEO é a otimização tradicional para ser bem posicionada nas buscas do Google. GEO (Generative Engine Optimization) e AIO (AI Optimization) são as novas técnicas para que ferramentas de inteligência artificial (como ChatGPT e Perplexity) entendam seu consultório e citem você como referência.',
    },
    {
      pergunta: 'Vocês garantem a primeira posição no Google?',
      resposta:
        'Nenhum profissional sério ou ético garante a primeira posição em mecanismos de busca, pois o algoritmo envolve múltiplos fatores externos. Nós entregamos 100% da base técnica, semântica e de velocidade para você disputar no mais alto nível.',
    },
    {
      pergunta: 'Consigo atualizar o site depois?',
      resposta:
        'Sim! Caso precise adicionar novos tratamentos, atualizar fotos do consultório ou alterar contatos, prestamos suporte ágil de manutenção e também fornecemos orientações simples.',
    },
    {
      pergunta: 'O site funciona bem no celular?',
      resposta:
        'Com certeza. Nosso desenvolvimento é Mobile First: mais de 80% das suas pacientes acessarão pelo smartphone. O site abre instantaneamente, com botões anatômicos e tipografia perfeitamente legível.',
    },
    {
      pergunta: 'Vocês escrevem os textos (copy)?',
      resposta:
        'Sim! Cuidamos da redação de todo o site com base em estratégias de psicologia de consumo e autoridade médica, alinhando elegância, empatia e clareza para converter visitantes em pacientes.',
    },
    {
      pergunta: 'Posso usar meu próprio domínio?',
      resposta:
        'Sim! Se você já possui um domínio registrado (ex: www.seunome.com.br), conectamos tudo para você. Se ainda não possui, auxiliamos em todas as etapas de registro sem complicação.',
    },
    {
      pergunta: 'Vocês atendem profissionais fora do Brasil?',
      resposta:
        'Sim. A Lana já entregou sites para profissionais da estética e odontologia em diversos países (Estados Unidos, Portugal, Suíça, entre outros), com suporte a fuso horário e moedas internacionais.',
    },
  ],
  demo: {
    video: '/img/demo-celular.mp4',
    link: 'https://rare-draluaneavila.vercel.app/',
  },
  mostrarPreco: false,
  precoInicial: 'R$ 2.400',
};
