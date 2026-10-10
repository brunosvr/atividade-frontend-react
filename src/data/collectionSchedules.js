import normalizeText from '../utils/normalizeText';

export const collectionSchedules = [
  {
    neighborhood: 'Centro',
    days: 'Segunda, quarta e sexta-feira',
    hours: '07h às 11h',
  },
  {
    neighborhood: 'Bairro Novo',
    days: 'Terça, quinta-feira e sábado',
    hours: '06h às 09h',
  },
  {
    neighborhood: 'Casa Caiada',
    days: 'Segunda, quarta e sexta-feira',
    hours: '18h às 22h',
  },
];

export function findCollectionSchedule(address) {
  const neighborhood = normalizeText(address.split(',').pop());
  return collectionSchedules.find((schedule) => normalizeText(schedule.neighborhood) === neighborhood);
}
