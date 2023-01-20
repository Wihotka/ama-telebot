import React from 'react';
import styles from './styles.scss';

// Поскольку нужные типы не подтягиваются из скрипта телеграма
declare global {
  interface Window {Telegram:any}
}

console.log(window.Telegram.WebApp);

export const SmartumHelper = () => {
  return <div className={styles.page}>
    ЕБАТЬ МОЙ ХУЙ, ДА ЭТО ЖЕ ТЕЛЕГРАМ БОТ!!!
  </div>;
};