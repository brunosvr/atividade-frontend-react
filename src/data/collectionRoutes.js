export const collectionRoutes = [
  {
    id: 'centro',
    neighborhood: 'Centro',
    completedSectors: 2,
    totalSectors: 5,
    arrivalWindow: '09h20 às 09h50',
    completedAt: null,
  },
  {
    id: 'bairro-novo',
    neighborhood: 'Bairro Novo',
    completedSectors: 5,
    totalSectors: 5,
    arrivalWindow: null,
    completedAt: '08h40',
  },
  {
    id: 'casa-caiada',
    neighborhood: 'Casa Caiada',
    completedSectors: 0,
    totalSectors: 5,
    arrivalWindow: '18h às 18h30',
    completedAt: null,
  },
];

export function getRouteStatus(route) {
  if (route.completedSectors === route.totalSectors) {
    return 'completed';
  }

  if (route.completedSectors > 0) {
    return 'in-progress';
  }

  return 'scheduled';
}
