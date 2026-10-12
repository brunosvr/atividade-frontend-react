export const disposalCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'recyclable', label: 'Recicláveis' },
  { id: 'organic', label: 'Orgânicos' },
  { id: 'special', label: 'Descarte especial' },
  { id: 'residual', label: 'Rejeitos' },
];

const recyclingSource = {
  name: 'Ministério do Meio Ambiente',
  url: 'https://www.gov.br/mma/pt-br/assuntos/educacao-ambiental/glossario-ea/o-que-e-reciclagem',
};

export const disposalGuides = [
  {
    id: 'reciclaveis',
    category: 'recyclable',
    title: 'Papel, plástico, metal e vidro',
    description: 'Separe os materiais que podem voltar ao ciclo de produção.',
    examples: 'Papelão, garrafas, potes e latas.',
    keywords: 'pet jornal revista embalagem aluminio',
    steps: [
      'Separe as embalagens dos restos de alimentos e de outros resíduos.',
      'Esvazie os recipientes e mantenha papéis e papelões secos.',
      'Confirme quais materiais são aceitos na coleta seletiva ou cooperativa escolhida.',
    ],
    avoid: 'Não misture papel higiênico, cerâmica ou espelhos aos recicláveis comuns.',
    destination: 'Coleta seletiva ou ponto de recebimento de recicláveis.',
    source: recyclingSource,
  },
  {
    id: 'organicos',
    category: 'organic',
    title: 'Restos de alimentos',
    description: 'Resíduos orgânicos podem ser transformados em adubo pela compostagem.',
    examples: 'Cascas de frutas, legumes e borra de café.',
    keywords: 'comida banana verduras compostagem adubo',
    steps: [
      'Separe os restos vegetais das embalagens e dos demais materiais.',
      'Se utilizar uma composteira, siga as orientações do sistema para os resíduos aceitos.',
      'Se não houver compostagem disponível, acondicione os resíduos para a coleta comum.',
    ],
    avoid: 'Não coloque plástico, metal ou vidro na composteira.',
    destination: 'Compostagem doméstica ou comunitária; coleta comum quando necessário.',
    source: {
      name: 'Ministério do Meio Ambiente',
      url: 'https://www.gov.br/mma/pt-br/assuntos/educacao-ambiental/glossario-ea/o-que-e-compostagem',
    },
  },
  {
    id: 'oleo',
    category: 'special',
    title: 'Óleo de cozinha',
    description: 'Guarde o óleo usado e encaminhe para uma coleta específica.',
    examples: 'Óleo de fritura e azeite usados.',
    keywords: 'gordura cozinha frigideira',
    steps: [
      'Espere o óleo esfriar completamente.',
      'Transfira para uma garrafa plástica resistente e feche bem a tampa.',
      'Entregue em um ponto que receba óleo de cozinha usado.',
    ],
    avoid: 'Não despeje óleo na pia, no vaso sanitário ou no solo.',
    destination: 'Ponto específico de recebimento de óleo de cozinha.',
    source: {
      name: 'Conexão Ambiental (Governo do Paraná)',
      url: 'https://www.conexaoambiental.pr.gov.br/Pagina/Coleta-oleo-de-cozinha',
    },
  },
  {
    id: 'pilhas',
    category: 'special',
    title: 'Pilhas e baterias portáteis',
    description: 'Esses materiais precisam de recebimento e tratamento específicos.',
    examples: 'Pilhas comuns e baterias recarregáveis.',
    keywords: 'controle remoto recarregavel',
    steps: [
      'Separe as pilhas e baterias dos outros resíduos domésticos.',
      'Localize um ponto de entrega de pilhas e baterias portáteis.',
      'Confirme os tipos aceitos antes de levar o material.',
    ],
    avoid: 'Não descarte pilhas e baterias no lixo comum ou junto aos recicláveis.',
    destination: 'Ponto de entrega do sistema de logística reversa.',
    source: {
      name: 'SINIR (Ministério do Meio Ambiente)',
      url: 'https://www.sinir.gov.br/perfis/logistica-reversa/logistica-reversa/pilhas-e-baterias/',
    },
  },
  {
    id: 'medicamentos',
    category: 'special',
    title: 'Medicamentos',
    description: 'Dê o destino adequado aos medicamentos vencidos ou que não serão utilizados.',
    examples: 'Comprimidos, xaropes, cartelas e frascos com resíduos.',
    keywords: 'remedio remedios vencido farmácia',
    steps: [
      'Separe os medicamentos sem uso e suas embalagens em contato com o produto.',
      'Procure uma farmácia ou drogaria com ponto de recebimento.',
      'Siga as orientações do estabelecimento para entregar os materiais.',
    ],
    avoid: 'Não jogue medicamentos no lixo comum, em pias, ralos ou vasos sanitários.',
    destination: 'Farmácia ou drogaria participante da coleta de medicamentos.',
    source: {
      name: 'Prefeitura de Garibaldi (orientações sobre medicamentos)',
      url: 'https://www.garibaldi.rs.gov.br/pagina/medicamentos',
    },
  },
  {
    id: 'rejeitos',
    category: 'residual',
    title: 'Resíduos de higiene',
    description: 'Separe dos recicláveis os materiais de higiene que não podem ser reaproveitados.',
    examples: 'Papel higiênico usado, fraldas e absorventes.',
    keywords: 'banheiro sanitario rejeito lixo comum',
    steps: [
      'Mantenha esses materiais separados dos resíduos recicláveis.',
      'Acondicione em saco resistente e bem fechado.',
      'Disponibilize para a coleta comum conforme a programação da sua região.',
    ],
    avoid: 'Não coloque resíduos de higiene na coleta seletiva.',
    destination: 'Coleta domiciliar comum.',
    source: recyclingSource,
  },
];
