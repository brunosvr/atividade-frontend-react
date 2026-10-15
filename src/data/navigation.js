import collectionIcon from '../assets/icons/consultar-coleta.svg';
import routeIcon from '../assets/icons/acompanhar-rota.svg';
import disposalIcon from '../assets/icons/descarte-correto.svg';
import noticesIcon from '../assets/icons/avisos.svg';
import mobileCollectionIcon from '../assets/icons/mobile/consultar-coleta.svg';
import mobileRouteIcon from '../assets/icons/mobile/acompanhar-rota.svg';
import mobileDisposalIcon from '../assets/icons/mobile/descarte-correto.svg';
import mobileNoticesIcon from '../assets/icons/mobile/avisos.svg';

export const navigation = [
  { label: 'Consultar coleta', icon: collectionIcon, mobileIcon: mobileCollectionIcon, path: '/', hash: '#consultar-coleta' },
  { label: 'Acompanhar rota', icon: routeIcon, mobileIcon: mobileRouteIcon, path: '/acompanhar-rota', hash: '#acompanhar-rota' },
  { label: 'Descarte correto', icon: disposalIcon, mobileIcon: mobileDisposalIcon, path: '/descarte-correto', hash: '#descarte-correto' },
  { label: 'Avisos', icon: noticesIcon, mobileIcon: mobileNoticesIcon, path: '/avisos', hash: '#avisos' },
];
