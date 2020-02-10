import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import styles from './Day.module.css';

const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false);

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo);
  };

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button onClick={toggleInfo} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Day;
