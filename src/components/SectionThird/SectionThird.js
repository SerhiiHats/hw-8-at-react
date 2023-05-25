import React from 'react';
import {useSelector} from "react-redux";
import TitleSection from "../TitleSection/TitleSection";
import Timer from "../Timer/Timer";

const SectionThird = () => {
  const sectionTitle = useSelector(store => store.sectionTitle);

  return (
    <div>
      <TitleSection name={sectionTitle.task3.name} description={sectionTitle.task3.description}/>
      componentShuldUpdate
    </div>
  );
};

export default SectionThird;