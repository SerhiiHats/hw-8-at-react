import styles from "./Header.module.scss"

import React, {useReducer} from 'react';
import {useSelector} from "react-redux";
import headerReducer from "./headerReducer";


const Header = () => {
  const headerReducer = useSelector((store) => store.headerReducer);
  return (
    <div>
      <h1>{headerReducer}</h1>
    </div>
  );
};

export default Header;