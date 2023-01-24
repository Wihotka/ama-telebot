import React, {Ref} from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type P = {
  value?:string|number;
  defaultValue?:string|number;
  placeholder?:string;
  name?:string;
  className?:string;
  onChange?:Function;
  onBlur?:Function;
  disabled?:boolean;
  autoFocus?:boolean;
  type?:string
};

export const BotInput = React.forwardRef((props:P, ref:Ref<any>) => {

  const {disabled = false, autoFocus = false, type = 'text'} = props;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(typeof props.onChange === 'function'){
      props.onChange(e);
    }
  };

  const onBlur = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(typeof props.onBlur === 'function'){
      props.onBlur(e);
    }
  };

  return <input
    className={classNames(styles.input, props.className, disabled && styles.disabled)}
    value={props.value}
    defaultValue={props.defaultValue}
    placeholder={props.placeholder}
    name={props.name}
    onChange={e => onChange(e)}
    onBlur={e => onBlur(e)}
    type={type}
    disabled={disabled}
    autoFocus={autoFocus}
    ref={ref}
  />;
});