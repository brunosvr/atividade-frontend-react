import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import styles from './Sidebar.module.css';

function Sidebar(props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <p className={styles.brandName}>Olinda Limpa</p>
        <p className={styles.brandService}>Coleta domiciliar</p>
      </div>
      <nav aria-label="Menu principal">
        <ul className={styles.navigation}>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                className={`${styles.navigationItem} ${props.activePath === item.path ? styles.isCurrent : ''}`}
                to={item.path}
                aria-current={props.activePath === item.path ? 'page' : undefined}
              >
                <img src={item.icon} alt="" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
