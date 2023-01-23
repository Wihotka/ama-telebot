import {useState} from 'react';
import {useTelegram} from './hooks';
import {BotDropdown} from 'components/elements';
import {BotCourse} from 'components/modules';
import {
  ages,
  grades,
  courses
} from './config';
import styles from './scss/app.module.scss';

function App() {
  const {tg, user} = useTelegram();

  const [age, setAge] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  const juniorGradeCourses = courses.filter(course => course.grade !== 'senior');
  const seniorGradeCourses = courses.filter(courses => courses.grade !== 'junior');

  return (
    <div className={styles.app}>
      <h2 className={styles.greeting}>Hello {user}!</h2>
      <div className={styles.dropdowns}>
        <div className={styles.dropdownWrap}>
          <span>Your age:</span>
          <BotDropdown
            defaultValue={'age'}
            options={ages}
            onChange={(option:string) => setAge(option)}
          />
        </div>
        <div className={styles.dropdownWrap}>
          <span>Your grade:</span>
          <BotDropdown
            defaultValue={'grade'}
            options={grades}
            onChange={(option:string) => setGrade(option)}
          />
        </div>
      </div>
      {age && grade && <div className={styles.courses}>
        {+grade < 5
          ? juniorGradeCourses.map(course => <BotCourse key={course.id} label={course.label}/>)
          : seniorGradeCourses.map(course => <BotCourse key={course.id} label={course.label}/>)
        }
      </div>}
    </div>
  );
}

export default App;
