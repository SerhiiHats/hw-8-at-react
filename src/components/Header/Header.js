import styles from "./Header.module.scss"

import {useSelector} from "react-redux";


const Header = () => {
  const headerReducer = useSelector((store) => store.headerReducer);
  return (
    <div className={styles.containerHeader}>
      <h1>{headerReducer}</h1>
    </div>
  );
};

export default Header;