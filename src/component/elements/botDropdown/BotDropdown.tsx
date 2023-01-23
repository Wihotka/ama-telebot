// import React, {useState} from 'react';
import styles from './styles.module.scss';

type P = {
  defaultValue:string;
  options:string[];
  onChange:Function;
}

export const BotDropdown = ({}:P) => {
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [dropdownValue, setDropdownValue] = useState<string>('');

  return <div className={styles.dropdown}></div>
}