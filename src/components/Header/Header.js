import styles from "./Header.module.scss"

import React, {useReducer} from 'react';
import {useSelector} from "react-redux";
import headerReducer from "./headerReducer";



const Header = () => {
  const headerReducer = useSelector((store)=>store.headerReducer);
  return (
    <div>
      {headerReducer}
    </div>
  );
};

export default Header;