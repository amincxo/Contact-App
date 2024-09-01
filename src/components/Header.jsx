import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="http://aminborvayeh.ir">Website aminborvayeh</a>
      </p>
    </div>
  );
}

export default Header;
