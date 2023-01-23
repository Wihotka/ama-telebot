import React, {useState} from 'react';
import {BotModal} from '../../elements/botModal'
import styles from './styles.module.scss';

type P = {
  label:string;
  description?:string;
}

export const BotCourse = ({label}:P) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return <>
    <button onClick={() => setIsOpened(true)} className={styles.course}>
      {label}
    </button>
    {isOpened && <BotModal opened={isOpened} className={styles.modal} onClose={() => setIsOpened(false)}>
      <h3 className={styles.title}>{label}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime, recusandae nesciunt quidem iusto nihil quam eius enim aliquam, nostrum pariatur optio necessitatibus aut consequatur distinctio harum veritatis illum. Facere?</p>
    </BotModal>}
  </>
}