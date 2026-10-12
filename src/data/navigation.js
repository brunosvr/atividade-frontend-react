import collectionIcon from '../assets/icons/consultar-coleta.svg';
import routeIcon from '../assets/icons/acompanhar-rota.svg';
import disposalIcon from '../assets/icons/descarte-correto.svg';

export const navigation = [
  { label: 'Consultar coleta', icon: collectionIcon, path: '/', hash: '#consultar-coleta' },
  { label: 'Acompanhar rota', icon: routeIcon, path: '/acompanhar-rota', hash: '#acompanhar-rota' },
  { label: 'Descarte correto', icon: disposalIcon, path: '/descarte-correto', hash: '#descarte-correto' },
];
