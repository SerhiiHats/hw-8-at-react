import styles from "./SectionFirst.module.scss";

import React from 'react';
import titleSectionReduser from "../TitleSection/titleSectionReduser";
import {useSelector} from "react-redux";
import store from "../../redux/configStore";
import {initialStore} from "../../redux/initialStore";
import TitleSection from "../TitleSection/TitleSection";
import Clock from "../Clock/Clock";

const SectionFirst = () => {
  const sectionTitle = useSelector(store => store.sectionTitle);
  return (
    <div>
      <TitleSection name={sectionTitle.task1.name} description={sectionTitle.task1.description}/>
      <Clock/>
      <TitleSection name={sectionTitle.task2.name} description={sectionTitle.task2.description}/>
    </div>
  );
};

export default SectionFirst;