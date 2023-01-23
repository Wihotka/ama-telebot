import React from 'react';
import {useTelegram} from './hooks';
import {BotDropdown} from 'component/elements';
import styles from './scss/app.module.scss';

function App() {
  const {tg, user} = useTelegram();

  console.log(tg);

  console.log(user);

  return (
    <div className={styles.app}>
      {/* <h2>{tg}</h2> */}
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
