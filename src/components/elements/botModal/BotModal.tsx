import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

type P = {
  opened:boolean;
  children?:any;
  onClose?:Function;
  className?:string;
};

export const BotModal = ({children, opened, onClose, className}:P) => {
  const [isOpened, setIsOpened] = useState<boolean>(opened);

  const close = () => {
    setIsOpened(false);
    if (typeof onClose === 'function') {
        onClose();
    }
  };

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  useEffect(() => {
    if (isOpened){
      //Закрытие при нажатии на Esc
      window.addEventListener('keydown', onKeyDown);
    }
  }, [isOpened]);

  const onKeyDown = (e:{code:string}) => {
    if (e.code === 'Escape') {
      close();
      window.removeEventListener('keydown', onKeyDown);
    }
  };

  // Закрытие по клику вне модалки
  const onWrapClick = () => {
    if (typeof onClose === 'function') {
        onClose();
    }
  };

  return <div onClick={onWrapClick} className={styles.modalWrap}>
    <div
      onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      className={classNames(styles.modalBody, className)}
    >
      <button className={styles.modalClose} onClick={close}>x</button>
      <div className={classNames(styles.modalContent)}>
        {children}
      </div>
    </div>
  </div>
}