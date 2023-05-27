import React from 'react';
import styles from "./TitleSection.module.scss"

const TitleSection = ({name, description}) => {
  return (
    <div className={styles.containerTitle}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default TitleSection;