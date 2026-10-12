import { disposalCategories } from '../data/disposalGuides';
import styles from './DisposalCard.module.css';

function DisposalCard(props) {
  const guide = props.guide;
  const category = disposalCategories.find((item) => item.id === guide.category);

  function handleToggle(event) {
    event.preventDefault();
    props.toggleGuide(guide.id);
  }

  return (
    <article className={styles.card} aria-labelledby={`guide-${guide.id}`}>
      <details className={styles.details} open={props.open}>
        <summary onClick={handleToggle}>
          <span className={styles.category}>{category.label}</span>
          <h2 id={`guide-${guide.id}`}>{guide.title}</h2>
          <span className={styles.examples}>{guide.examples}</span>
          <span className={styles.summaryAction}>
            <span>{props.open ? 'Ocultar orientações' : 'Ver orientações'}</span>
            <span className={styles.expandIcon} aria-hidden="true" />
          </span>
        </summary>
        <div className={styles.instructions}>
          <p className={styles.description}>{guide.description}</p>
          <div className={styles.instructionColumns}>
            <div>
              <h3>Como preparar</h3>
              <ol>
                {guide.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h3>Onde descartar</h3>
              <p>{guide.destination}</p>
              <p className={styles.caution}>
                <strong>Atenção:</strong> {guide.avoid}
              </p>
            </div>
          </div>
          <p className={styles.source}>
            <a href={guide.source.url} target="_blank" rel="noreferrer">
              Fonte: {guide.source.name}
            </a>
          </p>
        </div>
      </details>
    </article>
  );
}

export default DisposalCard;
