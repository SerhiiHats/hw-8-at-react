import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import TitleSection from "../TitleSection/TitleSection";
import Clock from "../Clock/Clock";
import Timer from "../Timer/Timer";

const SectionSecond = () => {

  const sectionTitle = useSelector(store => store.sectionTitle);

  return (
    <div>
      <TitleSection name={sectionTitle.task2.name} description={sectionTitle.task2.description}/>
      <Timer/>
    </div>
  );
};

export default SectionSecond;