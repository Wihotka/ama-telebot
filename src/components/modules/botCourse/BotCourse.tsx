import React, {useState} from 'react';
import {BotModal} from '../../elements/botModal'
import {courseActions} from 'config';
import styles from './styles.module.scss';

type P = {
  label:string;
  action:string;
  setAction:React.Dispatch<React.SetStateAction<string>>;
}

export const BotCourse = ({label, action, setAction}:P) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  const handleTrial = () => {
    setAction(courseActions.trial);
    setIsFormOpened(true);
  }

  const handleDetails = () => {
    setAction(courseActions.details);
    setIsFormOpened(true);
  }

  return <>
    <button onClick={() => setIsOpened(true)} className={styles.course}>
      {label}
    </button>
    {isOpened && <BotModal opened={isOpened} className={styles.modal} onClose={() => setIsOpened(false)}>
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
          <h3 className={styles.title}>{action}</h3>
          <p>Здесь будет ахуительно красивая форма обратной связи</p>
        </>
      }
    </BotModal>}
  </>
}