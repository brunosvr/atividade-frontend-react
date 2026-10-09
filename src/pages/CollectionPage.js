import styles from './CollectionPage.module.css';

function CollectionPage() {
  return (
    <section aria-labelledby="collection-title">
      <h1 id="collection-title">Consulte a coleta da sua rua</h1>
      <p className={styles.pageDescription}>
        Dias e horários de coleta em Olinda.<br />
        Digite sua rua ou escolha um bairro.
      </p>
    </section>
  );
}

export default CollectionPage;
