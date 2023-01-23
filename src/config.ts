export type GradeT = 'all'|'junior'|'senior';
export type AgeT = 'all'|'junior'|'middle'|'senior';
export type CourseT = {
  id:number;
  label:string;
  grade:GradeT;
  age:AgeT;
}

export const ages:string[] = ['4', '5', '6', '7', '8', '9', '10', '11', '12+'];
export const grades:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
export const courses:CourseT[] = [
  {
    id: 1,
    label: 'Математика',
    grade: 'all',
    age: 'all'
  },
  {
    id: 2,
    label: 'Англійська мова',
    grade: 'all',
    age: 'all'
  },
  {
    id: 3,
    label: 'Українська мова та літературне читання',
    grade: 'junior',
    age: 'all'
  },
  {
    id: 4,
    label: 'Комплексна програма: математика, українська мова, письмо',
    grade: 'junior',
    age: 'all'
  },
  {
    id: 5,
    label: 'Допомога у виконанні домашнього завдання',
    grade: 'junior',
    age: 'all'
  },
  {
    id: 6,
    label: 'Історія України',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 7,
    label: 'Підготовка до ДПА та ЗНО',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 8,
    label: 'Українська мова та література',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 9,
    label: 'Зарубіжна література',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 10,
    label: 'Біологія',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 11,
    label: 'Хiмiя',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 12,
    label: 'Геометрія',
    grade: 'senior',
    age: 'all'
  },
  {
    id: 13,
    label: 'Інший шкільний предмет',
    grade: 'senior',
    age: 'all'
  }
];