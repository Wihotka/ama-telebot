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
      text: 'Send data'
    });
    tg.MainButton.hide();

    formik.touched.name = false;
    formik.touched.surname = false;
    formik.touched.tel = false;
  }, []);

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
    {/* <button type='submit' className={styles.submitBtn}>Send data</button> */}
  </form>
}