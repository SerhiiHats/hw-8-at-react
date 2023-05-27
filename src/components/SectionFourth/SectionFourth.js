import React from 'react';
import TitleSection from "../TitleSection/TitleSection";
import {useSelector} from "react-redux";
import ComponentExampleMemoHook from "../ComponentExampleMemoHook/ComponentExampleMemoHook";

const SectionFourth = () => {
  const sectionTitle = useSelector(state => state.sectionTitle)
  return (
    <div>
      <TitleSection name={sectionTitle.task4.name} description={sectionTitle.task4.description}/>
      <ComponentExampleMemoHook/>
    </div>
  );
};

export default SectionFourth;