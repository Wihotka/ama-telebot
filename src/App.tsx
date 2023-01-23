import React from 'react';
// import {useTelegram} from './hooks';
import {BotDropdown} from 'component/elements';
import styles from './scss/app.module.scss';

declare global {
  interface Window {Telegram: {
    WebApp:any;
  }}
}

const tg = window.Telegram.WebApp;

function App() {
  // const {tg, user} = useTelegram();

  return (
    <div className={styles.app}>
      <h2>{tg}</h2>
      <div className={styles.dropdowns}>
        <BotDropdown
          defaultValue={'DICK'}
          options={['dick', 'cunt']}
          onChange={() => console.log('DICK')}
        />
      </div>
    </div>
  );
}

export default App;
