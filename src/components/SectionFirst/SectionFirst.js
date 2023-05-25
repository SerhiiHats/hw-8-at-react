import styles from "./SectionFirst.module.scss";
import React from 'react';
import {useSelector} from "react-redux";
import TitleSection from "../TitleSection/TitleSection";
import Clock from "../Clock/Clock";

const SectionFirst = () => {
  const sectionTitle = useSelector(store => store.sectionTitle);
  return (
    <div>
      <TitleSection name={sectionTitle.task1.name} description={sectionTitle.task1.description}/>
      <Clock/>
    </div>
  );
};

export default SectionFirst;