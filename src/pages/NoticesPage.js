import { useRef } from 'react';
import NoticeCard from '../components/NoticeCard';
import { collectionSchedules } from '../data/collectionSchedules';
import { noticeCategories, notices } from '../data/notices';
import styles from './NoticesPage.module.css';

function NoticesPage(props) {
  const neighborhoodInput = useRef(null);
  const unreadInput = useRef(null);
  const filteredNotices = notices.filter((notice) => {
    const matchesNeighborhood = props.neighborhood === 'all'
      || notice.neighborhood === 'all'
      || notice.neighborhood === props.neighborhood;
    const matchesCategory = props.category === 'all' || notice.category === props.category;
    const matchesReading = !props.onlyUnread || !props.readNotices.includes(notice.id);

    return matchesNeighborhood && matchesCategory && matchesReading;
  });
  const unreadCount = filteredNotices.filter((notice) => !props.readNotices.includes(notice.id)).length;
  const hasFilters = props.neighborhood !== 'all' || props.category !== 'all' || props.onlyUnread;

  function handleNeighborhoodChange(event) {
    props.setNeighborhood(event.target.value);
  }

  function selectCategory(category) {
    props.setCategory(category);
  }

  function handleUnreadChange(event) {
    props.setOnlyUnread(event.target.checked);
  }

  function toggleRead(id) {
    props.setReadNotices((previousNotices) => {
      if (previousNotices.includes(id)) {
        return previousNotices.filter((noticeId) => noticeId !== id);
      }

      return [...previousNotices, id];
    });
  }

  function clearFilters() {
    props.setNeighborhood('all');
    props.setCategory('all');
    props.setOnlyUnread(false);
  }

  return (
    <section id="avisos" aria-labelledby="notices-title">
      <h1 id="notices-title">Avisos</h1>
      <p className="page-introduction">Coleta, rotas e orientações para o seu bairro.</p>
      <div className={styles.toolbar}>
        <fieldset className={styles.filters}>
          <legend>Filtrar por assunto</legend>
          <div className={styles.filterOptions}>
            {noticeCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.filterButton} ${props.category === item.id ? styles.selected : ''}`}
                aria-pressed={props.category === item.id}
                onClick={() => selectCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className={styles.neighborhoodField}>
          <label htmlFor="notice-neighborhood">Selecione o bairro</label>
          <select
            ref={neighborhoodInput}
            id="notice-neighborhood"
            value={props.neighborhood}
            onChange={handleNeighborhoodChange}
            aria-describedby="notice-neighborhood-help"
          >
            <option value="all">Todos os bairros</option>
            {collectionSchedules.map((schedule) => (
              <option key={schedule.neighborhood} value={schedule.neighborhood}>
                {schedule.neighborhood}
              </option>
            ))}
          </select>
          <p id="notice-neighborhood-help" className={styles.visuallyHidden}>
            Avisos gerais aparecem para todos os bairros.
          </p>
        </div>
      </div>

      <div className={styles.listHeader}>
        <p className={styles.results} role="status" aria-atomic="true">
          {filteredNotices.length} {filteredNotices.length === 1 ? 'aviso encontrado' : 'avisos encontrados'}
          {' · '}{unreadCount} {unreadCount === 1 ? 'não lido' : 'não lidos'}
        </p>
        <div className={styles.readingFilters}>
          <label>
            <input
              ref={unreadInput}
              type="checkbox"
              checked={props.onlyUnread}
              onChange={handleUnreadChange}
            />
            Mostrar apenas não lidos
          </label>
          {hasFilters && (
            <button type="button" onClick={clearFilters}>Limpar filtros</button>
          )}
        </div>
      </div>

      {filteredNotices.length > 0 ? (
        <div className={styles.list}>
          {filteredNotices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
              read={props.readNotices.includes(notice.id)}
              toggleRead={toggleRead}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>Nenhum aviso encontrado</h2>
          <p>Não há avisos com os filtros selecionados. Limpe os filtros para ver todos os avisos.</p>
        </div>
      )}
    </section>
  );
}

export default NoticesPage;
