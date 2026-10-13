import { Link } from 'react-router-dom';
import { noticeCategories } from '../data/notices';
import styles from './NoticeCard.module.css';

function NoticeCard(props) {
  const notice = props.notice;
  const category = noticeCategories.find((item) => item.id === notice.category);

  function handleReadClick() {
    props.toggleRead(notice.id);
  }

  return (
    <article
      className={`${styles.card} ${props.read ? styles.read : ''}`}
      aria-labelledby={`notice-${notice.id}`}
    >
      <div className={styles.metadata}>
        <span className={styles.category}>{category.label}</span>
        {notice.neighborhood === 'all' && <span>Todos os bairros</span>}
      </div>
      <div className={styles.content}>
        <h2 id={`notice-${notice.id}`}>{notice.title}</h2>
        <p className={styles.description}>{notice.description}</p>
        <Link className={styles.destination} to={notice.path}>
          {notice.action}<span aria-hidden="true"> →</span>
        </Link>
      </div>
      <div className={styles.actions}>
        <span className={styles.readingStatus}>
          <span className={styles.statusDot} aria-hidden="true" />
          {props.read ? 'Lido' : 'Não lido'}
        </span>
        <button type="button" onClick={handleReadClick}>
          {props.read ? 'Marcar como não lido' : 'Marcar como lido'}
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;
