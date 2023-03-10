import React, {useEffect, useCallback} from 'react';
import {useFormik} from 'formik';
import classNames from 'classnames';
import {upperFirst} from 'lodash';
import {useTelegram} from 'hooks';
import {BotInput} from '../botInput';
import styles from './styles.module.scss';

type P = {
  age:string,
  grade:string,
  subject:string,
  action:string;
}

export const BotForm = ({age, grade, subject, action}:P) => {
  const {tg} = useTelegram();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      tel: ''
    },
    validate: values => {
      const errors = {
        name: '',
        surname: '',
        tel: ''
      };

      if (!values.name) errors.name = 'Error';
      if (!values.surname) errors.surname = 'Error';
      if (!values.tel) errors.tel = 'Error';
      else if (values.tel.length < 5) errors.tel = 'Error';
      else if (!values.tel.match(/\d/i)) errors.tel = 'Error';

      if (errors.name || errors.surname || errors.tel) {
        tg.MainButton.hide();
        return errors;
      }
         
      tg.MainButton.show();
      return {};
    },
    onSubmit: () => {
      console.log('OK');
    },
  });

  const onSendData = useCallback(() => {
    const data = {
      name: formik.values.name,
      surname: formik.values.surname,
      age: age,
      grade: grade,
      subject: subject,
      tel: formik.values.tel,
      action: action
    };

    tg.sendData(JSON.stringify(data));
  }, [formik.values.name, formik.values.surname, formik.values.tel, age, grade, subject, action, tg]);

  const handleName = (e:{target:{value:any}}) => {
    formik.touched.name = true;
    const value = upperFirst(e.target.value);
    e.target.value = value.trimStart().replace(/\s\s+/g, ' ');
    formik.handleChange(e);
  };
  const handleSurname = (e:{target:{value:any}}) => {
    formik.touched.surname = true;
    const value = upperFirst(e.target.value);
    e.target.value = value.trimStart().replace(/\s\s+/g, ' ');
    formik.handleChange(e);
  };
  const handleTel = (e:{target:{value:any}}) => {
    formik.touched.tel = true;
    const value = e.target.value;
    e.target.value = value.replace(/[^\d+\-() ]/g, '').replace(/\s\s+/g, ' ').substr(0, 20).trimStart();
    formik.handleChange(e);
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data',
      color: '#E241CC'
    });
    tg.MainButton.hide();

    formik.touched.name = false;
    formik.touched.surname = false;
    formik.touched.tel = false;
  }, []);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    }
  }, [onSendData])

  return <form onSubmit={formik.handleSubmit} className={styles.form}>
    <BotInput
      type='text'
      value={formik.values.name}
      placeholder='Name'
      name='name'
      onChange={handleName}
      className={classNames(formik.touched.name && formik.errors.name && styles.inputError)}
    />
    <BotInput
      type='text'
      value={formik.values.surname}
      placeholder='Surname'
      name='surname'
      onChange={handleSurname}
      className={classNames(formik.touched.surname && formik.errors.surname && styles.inputError)}
    />
    <BotInput
      type='tel'
      value={formik.values.tel}
      placeholder='Mobile phone'
      name='tel'
      onChange={handleTel}
      className={classNames(formik.touched.tel && formik.errors.tel && styles.inputError)}
    />
  </form>
}