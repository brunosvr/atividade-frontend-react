import { useRef } from 'react';
import { collectionSchedules, findCollectionSchedule } from '../data/collectionSchedules';
import styles from './CollectionPage.module.css';

function CollectionPage(props) {
  const addressInput = useRef(null);
  const schedule = props.submittedAddress ? findCollectionSchedule(props.submittedAddress) : null;

  function updateAddress(value) {
    props.setAddress(value);
    props.setSubmittedAddress('');
    addressInput.current?.setCustomValidity('');
  }

  function handleAddressChange(event) {
    updateAddress(event.target.value);
  }

  function selectNeighborhood(neighborhood) {
    updateAddress(neighborhood);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedAddress = props.address.trim();

    if (!trimmedAddress) {
      addressInput.current.setCustomValidity('Informe uma rua ou bairro.');
      addressInput.current.reportValidity();
      return;
    }

    props.setSubmittedAddress(trimmedAddress);
  }

  return (
    <section id="consultar-coleta" aria-labelledby="collection-title">
      <h1 id="collection-title">Consulte a coleta da sua rua</h1>
      <p className={styles.pageDescription}>
        Dias e horários de coleta em Olinda.<br />
        Digite sua rua ou escolha um bairro.
      </p>
      <form className={styles.collectionForm} onSubmit={handleSubmit}>
        <label htmlFor="address">Rua ou bairro</label>
        <input
          ref={addressInput}
          id="address"
          name="address"
          type="text"
          placeholder="Centro, Bairro Novo, Casa Caiada..."
          value={props.address}
          onChange={handleAddressChange}
          required
          autoComplete="street-address"
        />
        <div className={styles.neighborhoodSuggestions} role="group" aria-label="Sugestões de bairro">
          {collectionSchedules.map((item) => (
            <button
              key={item.neighborhood}
              type="button"
              onClick={() => selectNeighborhood(item.neighborhood)}
            >
              {item.neighborhood}
            </button>
          ))}
        </div>
        <button className={styles.submitButton} type="submit">Consultar coleta</button>
        <div className={styles.searchFeedback} role="status" aria-atomic="true">
          {props.submittedAddress && schedule && (
            <section className={styles.collectionResult} aria-labelledby="result-title">
              <h2 id="result-title">Coleta em {schedule.neighborhood}</h2>
              <dl className={styles.scheduleDetails}>
                <div>
                  <dt>Dias de coleta</dt>
                  <dd>{schedule.days}</dd>
                </div>
                <div>
                  <dt>Horário de coleta</dt>
                  <dd>{schedule.hours}</dd>
                </div>
              </dl>
            </section>
          )}
          {props.submittedAddress && !schedule && (
            <p className={styles.noResults}>
              Não encontramos horários de coleta para “{props.submittedAddress}”.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}

export default CollectionPage;
