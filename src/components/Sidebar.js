import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/icons/mobile/menu.svg';
import closeIcon from '../assets/icons/mobile/fechar.svg';
import { navigation } from '../data/navigation';
import styles from './Sidebar.module.css';

function Sidebar(props) {
  const setMenuOpen = props.setMenuOpen;
  const menuButton = useRef(null);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    if (!props.menuOpen) {
      return;
    }

    const mobileViewport = window.matchMedia('(max-width: 1199px)');

    function handleViewportChange() {
      if (!mobileViewport.matches) {
        setMenuOpen(false);
      }
    }

    if (!mobileViewport.matches) {
      setMenuOpen(false);
      return;
    }

    window.scrollTo(0, 0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileViewport.addEventListener('change', handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      mobileViewport.removeEventListener('change', handleViewportChange);
    };
  }, [props.menuOpen, setMenuOpen]);

  function toggleMenu() {
    setToggled(true);
    setMenuOpen(!props.menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
    if (props.menuOpen) {
      menuButton.current.focus();
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape' && props.menuOpen) {
      closeMenu();
    }
  }

  return (
    <aside className={`${styles.sidebar} ${props.menuOpen ? styles.menuOpen : ''}`} onKeyDown={handleKeyDown}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <p className={styles.brandName}>Olinda Limpa</p>
          <p className={styles.brandService}>Coleta domiciliar</p>
        </div>
        <button
          ref={menuButton}
          className={styles.menuButton}
          type="button"
          aria-label={props.menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={props.menuOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          <img
            key={props.menuOpen ? 'close' : 'open'}
            className={toggled ? styles.iconAnimated : undefined}
            src={props.menuOpen ? closeIcon : menuIcon}
            alt=""
          />
        </button>
      </div>
      <nav id="main-navigation" className={styles.menu} aria-label="Menu principal">
        <p className={styles.menuLabel}>Menu</p>
        <ul className={styles.navigation}>
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                className={`${styles.navigationItem} ${props.activePath === item.path ? styles.isCurrent : ''}`}
                to={item.path}
                onClick={closeMenu}
                aria-current={props.activePath === item.path ? 'page' : undefined}
              >
                <picture>
                  <source media="(max-width: 1199px)" srcSet={item.mobileIcon} />
                  <img src={item.icon} alt="" />
                </picture>
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
