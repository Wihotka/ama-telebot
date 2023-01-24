import React, {useState} from 'react';
import {BotModal, BotForm} from '../../elements'
import {courseActions} from 'config';
import styles from './styles.module.scss';

type P = {
  label:string;
  age:string;
  grade:string;
}

export const BotCourse = ({label, age, grade}:P) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);
  const [formAction, setFormAction] = useState<string>('');
  const [isDataSent, setIsDataSent] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpened(false);
    setIsFormOpened(false);
    setIsDataSent(false);
  }

  const handleTrial = () => {
    setFormAction(courseActions.trial);
    setIsFormOpened(true);
  }

  const handleDetails = () => {
    setFormAction(courseActions.details);
    setIsFormOpened(true);
  }

  return <>
    <button onClick={() => setIsOpened(true)} className={styles.course}>
      {label}
    </button>
    {isOpened && <BotModal opened={isOpened} className={styles.modal} onClose={handleClose}>
      {!isFormOpened
        ? <>
          <h3 className={styles.title}>{label}</h3>
          <p className={styles.description}>Опис занять у форматі Репетиторство.</p>
          <div className={styles.btnWrap}>
            <button onClick={handleTrial}>{courseActions.trial}</button>
            <button onClick={handleDetails}>{courseActions.details}</button>
          </div>
        </>
        : <>
          {!isDataSent
            ? <>
              <h3 className={styles.title}>{label}</h3>
              <p className={styles.description}>{formAction}</p>
              <BotForm
                age={age}
                grade={grade}
                subject={label}
                action={formAction}
                changeSentStatus={setIsDataSent}
              />
            </>
            : <>
              <h3 className={styles.title}>Дякуємо за звернення 😊</h3>
              <h3 className={styles.title}>Найближчим часом з Вами зв’яжеться менеджер та проконсультує!</h3>
              <h3 className={styles.title}>Гарного дня 🌞</h3>
            </>
          }
        </>
      }
    </BotModal>}
  </>
}