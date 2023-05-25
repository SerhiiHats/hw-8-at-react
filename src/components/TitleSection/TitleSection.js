import React from 'react';

const TitleSection = ({name, description}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default TitleSection;