import React, {useState} from 'react';
import classNames from 'classnames';
import {upperFirst} from 'lodash';
import styles from './styles.module.scss';

type P = {
  defaultValue:string;
  options:string[];
  onChange:Function;
}

export const BotDropdown = ({defaultValue, options, onChange}:P) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<string>(defaultValue);

  const handleDropdownClick = () => {
    setIsActive(prev => !prev);
  };

  const handleOptionClick = (option:string) => {
    onChange(option);
    setDropdownValue(option);
    setIsActive(false);
  };

  return <div className={styles.dropdown} onBlur={() => setIsActive(false)}>
    <div className={classNames(styles.dropdownBtn, isActive && styles.active)} onClick={handleDropdownClick}>
        <span>{upperFirst(dropdownValue)}</span>
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={classNames(styles.dropdownArrow, isActive && styles.active)}
        >
            <path d="M26 12L16.5 20L7 12" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
    <div className={classNames(styles.content, isActive && styles.active)}>
        {options.map(option => <div
            key={option}
            className={styles.item}
            onClick={() => handleOptionClick(option)}
        >
            <span>{option}</span>
            {option === dropdownValue && <div className={styles.mark}/>}
        </div>)}
    </div>
  </div>
}