import { collectionRoutes, getRouteStatus } from '../data/collectionRoutes';
import { findCollectionSchedule } from '../data/collectionSchedules';
import styles from './RoutePage.module.css';

const statusLabels = {
  'in-progress': 'Em andamento',
  completed: 'Concluída',
  scheduled: 'Aguardando início',
};

function RoutePage(props) {
  const route = collectionRoutes.find((item) => item.id === props.selectedRegion);
  const status = getRouteStatus(route);
  const schedule = findCollectionSchedule(route.neighborhood);
  const progress = Math.round((route.completedSectors / route.totalSectors) * 100);
  let currentSector = 'Aguardando saída';
  let timingLabel = 'Previsão de chegada';
  let timing = route.arrivalWindow;

  if (status === 'in-progress') {
    currentSector = `Setor ${route.completedSectors + 1} de ${route.totalSectors}`;
  } else if (status === 'completed') {
    currentSector = 'Percurso concluído';
    timingLabel = 'Coleta finalizada às';
    timing = route.completedAt;
  }

  const sectors = [];

  for (let number = 1; number <= route.totalSectors; number++) {
    const completed = number <= route.completedSectors;
    const current = status === 'in-progress' && number === route.completedSectors + 1;
    let className = '';
    let label = 'Aguardando';

    if (completed) {
      className = styles.isCompleted;
      label = 'Concluído';
    } else if (current) {
      className = styles.isCurrent;
      label = 'Em coleta';
    }

    sectors.push({ number, completed, current, className, label });
  }

  function selectRegion(id) {
    props.setSelectedRegion(id);
  }

  return (
    <section id="acompanhar-rota" aria-labelledby="tracking-title">
      <h1 id="tracking-title">Acompanhe a rota de coleta</h1>
      <p className="page-introduction">Confira a previsão de chegada e os setores atendidos na sua região.</p>
      <div>
        <fieldset className={styles.regionSelector}>
          <legend>Selecione a região</legend>
          <div className={styles.regionOptions}>
            {collectionRoutes.map((region) => {
              const regionStatus = getRouteStatus(region);
              return (
                <button
                  key={region.id}
                  type="button"
                  className={`${styles.regionOption} ${region.id === props.selectedRegion ? styles.isSelected : ''}`}
                  aria-pressed={region.id === props.selectedRegion}
                  aria-controls="route-details"
                  onClick={() => selectRegion(region.id)}
                >
                  <span className={styles.regionName}>{region.neighborhood}</span>
                  <span className={styles.regionStatus}>
                    {statusLabels[regionStatus]}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <section
          id="route-details"
          className={styles.routeDetails}
          aria-labelledby="route-region-title"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className={styles.routeDetailsHeading}>
            <h2 id="route-region-title">Coleta em {route.neighborhood}</h2>
            <span className={styles.routeStatus}>{statusLabels[status]}</span>
          </div>

          <dl className={styles.routeMetrics}>
            <div className={styles.arrival}>
              <dt>{timingLabel}</dt>
              <dd>{timing}</dd>
            </div>
            <div>
              <dt>Trecho atual</dt>
              <dd>{currentSector}</dd>
            </div>
            <div>
              <dt>Janela de coleta</dt>
              <dd>{schedule.hours}</dd>
            </div>
          </dl>

          <div className={styles.routeProgress}>
            <div className={styles.routeProgressLabel}>
              <span>{route.completedSectors} de {route.totalSectors} setores atendidos</span>
              <strong>{progress}% concluído</strong>
            </div>
            <progress
              value={route.completedSectors}
              max={route.totalSectors}
              aria-label={`Andamento da coleta em ${route.neighborhood}`}
            />
          </div>

          <h3 className={styles.stepsHeading}>Percurso por setor</h3>
          <ol className={styles.routeSteps} aria-label="Etapas da rota">
            {sectors.map((sector) => (
              <li
                key={sector.number}
                className={`${styles.routeStep} ${sector.className}`}
                aria-current={sector.current ? 'step' : undefined}
              >
                <span className={styles.stepMarker} aria-hidden="true">
                  {sector.completed ? '✓' : sector.number}
                </span>
                <span className={styles.stepName}>Setor {sector.number}</span>
                <span className={styles.stepStatus}>{sector.label}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}

export default RoutePage;
