import React from 'react';
import styles from './styles.module.scss';

type P = {
  course:string;
}

export const BotCourse = ({course}:P) => {
  return <button className={styles.course}>
    {course}
  </button>
}