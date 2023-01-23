import React from 'react';
import {useTelegram} from './hooks';
import {BotDropdown} from 'component/elements';
import styles from './scss/app.module.scss';

function App() {
  const {tg, user} = useTelegram();

  return (
    <div className={styles.app}>
      <h2 className={styles.greeting}>Hello {user}!</h2>
      <div className={styles.dropdowns}>
        <div className={styles.dropdownWrap}>
          <span>Your age:</span>
          <BotDropdown
            defaultValue={'age'}
            options={ages}
            onChange={() => console.log('DICK')}
          />
        </div>
        <div className={styles.dropdownWrap}>
          <span>Your grade:</span>
          <BotDropdown
            defaultValue={'grade'}
            options={grades}
            onChange={() => console.log('DICK')}
          />
        </div>
      </div>
    </div>
  );
}

const ages = ['4', '5', '6', '7', '8', '9', '10', '11', '12+'];
const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

export default App;
