import React from 'react';
import config from '@config';
import styles from './styles.scss';

export const Main = () => {
    return <div className={styles.bots}>
        <h2 className={styles.title}>All Bots:</h2>
        <ul className={styles.list}>
            <li>
                <a href={config.path.smartumHelper}>- Smartum Helper Bot</a>
            </li>
        </ul>
    </div>;
};