import React, {useEffect} from 'react';
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
  changeSentStatus:Function;
}

export const BotForm = ({changeSentStatus, age, grade, subject, action}:P) => {
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

      if (!values.name) errors.name = 'No name';
      if (!values.surname) errors.surname = 'No surname';
      if (!values.tel) errors.tel = 'No phone number';
      else if (values.tel.length < 5) errors.tel = 'Too short phone number';
      else if (!values.tel.match(/\d/i)) errors.tel = 'Incorrect phone number';

      if (errors.name || errors.surname || errors.tel) {
        tg.MainButton.hide();
        return errors;
      }
         
      tg.MainButton.show();
      return {};
    },
    onSubmit: values => {
      const resultsData = {
        name: values.name,
        surname: values.surname,
        age: age,
        grade: grade,
        subject: subject,
        tel: values.tel,
        action: action
      };

      console.log(resultsData); // TEST

      changeSentStatus(true);
    },
  });

  const handleName = (e:{target:{value:any}}) => {
    const value = upperFirst(e.target.value);
    e.target.value = value.trimStart().replace(/\s\s+/g, ' ');
    formik.handleChange(e);
  };
  const handleSurname = (e:{target:{value:any}}) => {
    const value = upperFirst(e.target.value);
    e.target.value = value.trimStart().replace(/\s\s+/g, ' ');
    formik.handleChange(e);
  };
  const handleTel = (e:{target:{value:any}}) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^\d+\-() ]/g, '').replace(/\s\s+/g, ' ').substr(0, 20).trimStart();
    formik.handleChange(e);
  };

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Send data'
    });
  }, []);

  return <form onSubmit={formik.handleSubmit} className={styles.form}>
    <BotInput
      type='text'
      value={formik.values.name}
      placeholder='Name'
      name='name'
      onChange={handleName}
      className={classNames(formik.errors.name && styles.inputError)}
    />
    {formik.touched.name && formik.errors.name
      ? <div className={styles.error}>{formik.errors.name}</div>
      : null}
    <BotInput
      type='text'
      value={formik.values.surname}
      placeholder='Surname'
      name='surname'
      onChange={handleSurname}
      className={classNames(formik.errors.surname && styles.inputError)}
    />
    {formik.touched.surname && formik.errors.surname
      ? <div className={styles.error}>{formik.errors.surname}</div>
      : null}
    <BotInput
      type='tel'
      value={formik.values.tel}
      placeholder='Mobile phone'
      name='tel'
      onChange={handleTel}
      className={classNames(formik.errors.tel && styles.inputError)}
    />
    {formik.touched.tel && formik.errors.tel
      ? <div className={styles.error}>{formik.errors.tel}</div>
      : null}
    {/* <button type='submit' className={styles.submitBtn}>Send data</button> */}
  </form>
}