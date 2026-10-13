import { collectionSchedules } from './collectionSchedules';

export const noticeCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'collection', label: 'Coleta' },
  { id: 'routes', label: 'Rotas' },
  { id: 'disposal', label: 'Descarte' },
];

const collectionNotices = collectionSchedules.map((schedule) => ({
  id: `coleta-${schedule.neighborhood.toLowerCase().replace(/ /g, '-')}`,
  category: 'collection',
  neighborhood: schedule.neighborhood,
  title: `Coleta em ${schedule.neighborhood}`,
  description: `${schedule.days}. Janela de coleta: ${schedule.hours}.`,
  path: '/',
  action: 'Consultar endereço',
}));

export const notices = [
  ...collectionNotices,
  {
    id: 'andamento-da-coleta',
    category: 'routes',
    neighborhood: 'all',
    title: 'Acompanhe a coleta na sua região',
    description: 'Confira os setores atendidos e a previsão de chegada antes de colocar os resíduos na rua.',
    path: '/acompanhar-rota',
    action: 'Acompanhar rota',
  },
  {
    id: 'materiais-descarte-especial',
    category: 'disposal',
    neighborhood: 'all',
    title: 'Alguns materiais precisam de descarte especial',
    description: 'Separe óleo, pilhas, eletrônicos e medicamentos da coleta comum. Veja o destino de cada material.',
    path: '/descarte-correto',
    action: 'Ver orientações',
  },
];
