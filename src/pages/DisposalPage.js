import { useRef } from 'react';
import DisposalCard from '../components/DisposalCard';
import { disposalCategories, disposalGuides } from '../data/disposalGuides';
import normalizeText from '../utils/normalizeText';
import styles from './DisposalPage.module.css';

function DisposalPage(props) {
  const searchInput = useRef(null);
  const terms = normalizeText(props.query).split(' ').filter(Boolean);
  const guides = disposalGuides.filter((guide) => {
    const text = normalizeText([guide.title, guide.description, guide.examples, guide.keywords].join(' '));
    const matchesCategory = props.category === 'all' || guide.category === props.category;
    const matchesSearch = terms.every((term) => text.includes(term));

    return matchesCategory && matchesSearch;
  });

  function handleSearchChange(event) {
    props.setQuery(event.target.value);
  }

  function selectCategory(category) {
    props.setCategory(category);
  }

  function toggleGuide(id) {
    props.setOpenGuides((previousGuides) => {
      if (previousGuides.includes(id)) {
        return previousGuides.filter((guideId) => guideId !== id);
      }

      return [...previousGuides, id];
    });
  }

  function clearFilters() {
    props.setQuery('');
    props.setCategory('all');
  }

  return (
    <section id="descarte-correto" aria-labelledby="disposal-title">
      <h1 id="disposal-title">Descarte correto</h1>
      <p className="page-introduction">Encontre o material e veja como preparar e onde descartar.</p>
      <div className={styles.search}>
        <label htmlFor="disposal-search">O que você quer descartar?</label>
        <input
          ref={searchInput}
          id="disposal-search"
          type="search"
          placeholder="Papel, óleo, pilhas..."
          value={props.query}
          onChange={handleSearchChange}
        />
      </div>

      <fieldset className={styles.filters}>
        <legend>Filtrar por tipo de resíduo</legend>
        <div className={styles.filterOptions}>
          {disposalCategories.map((item) => (
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

      <div className={styles.resultsHeader}>
        <p role="status" aria-atomic="true">
          {guides.length} {guides.length === 1 ? 'material encontrado' : 'materiais encontrados'}
        </p>
        {(props.query || props.category !== 'all') && (
          <button type="button" onClick={clearFilters}>Limpar filtros</button>
        )}
      </div>

      {guides.length > 0 ? (
        <div className={styles.materials}>
          {guides.map((guide) => (
            <DisposalCard
              key={guide.id}
              guide={guide}
              open={props.openGuides.includes(guide.id)}
              toggleGuide={toggleGuide}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>Nenhum material encontrado</h2>
          <p>Tente outro material ou limpe os filtros para ver todas as orientações.</p>
        </div>
      )}
    </section>
  );
}

export default DisposalPage;
