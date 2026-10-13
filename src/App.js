import { useEffect, useState } from 'react';
import { matchPath, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CollectionPage from './pages/CollectionPage';
import RoutePage from './pages/RoutePage';
import DisposalPage from './pages/DisposalPage';
import NoticesPage from './pages/NoticesPage';
import { navigation } from './data/navigation';
import './App.css';

function App() {
  const location = useLocation();
  const currentPage = navigation.find((page) => matchPath(page.path, location.pathname)) || navigation[0];
  const previousPage = navigation.find((page) => page.hash === location.hash);

  const [address, setAddress] = useState('');
  const [submittedAddress, setSubmittedAddress] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('centro');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [openGuides, setOpenGuides] = useState([]);
  const [noticeNeighborhood, setNoticeNeighborhood] = useState('all');
  const [noticeCategory, setNoticeCategory] = useState('all');
  const [onlyUnread, setOnlyUnread] = useState(false);
  const [readNotices, setReadNotices] = useState([]);

  useEffect(() => {
    document.title = `${currentPage.label} | Olinda Limpa`;
  }, [currentPage.label]);

  if (previousPage) {
    return <Navigate to={previousPage.path} replace />;
  }

  return (
    <div className="app-shell">
      <Sidebar activePath={currentPage.path} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <CollectionPage
                address={address}
                setAddress={setAddress}
                submittedAddress={submittedAddress}
                setSubmittedAddress={setSubmittedAddress}
              />
            }
          />
          <Route
            path="/acompanhar-rota"
            element={
              <RoutePage selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
            }
          />
          <Route
            path="/descarte-correto"
            element={
              <DisposalPage
                query={query}
                setQuery={setQuery}
                category={category}
                setCategory={setCategory}
                openGuides={openGuides}
                setOpenGuides={setOpenGuides}
              />
            }
          />
          <Route
            path="/avisos"
            element={
              <NoticesPage
                neighborhood={noticeNeighborhood}
                setNeighborhood={setNoticeNeighborhood}
                category={noticeCategory}
                setCategory={setNoticeCategory}
                onlyUnread={onlyUnread}
                setOnlyUnread={setOnlyUnread}
                readNotices={readNotices}
                setReadNotices={setReadNotices}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
