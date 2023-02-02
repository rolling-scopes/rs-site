export type CourseCountry =
  | 'Anywhere'
  | 'Armenia'
  | 'Belarus'
  | 'Georgia'
  | 'Kazahstan'
  | 'Kyrgyzstan'
  | 'Latvia'
  | 'Lithuania'
  | 'Montenegro'
  | 'Poland'
  | 'Serbia'
  | 'Turkey'
  | 'Ukraine'
  | 'Uzbekistan';

export type CourseLanguage = 'Belarusian' | 'English' | 'Russian' | 'Ukrainian';

export type CourseMode = 'Offline' | 'Online';

export type CourseType =
  | 'Javascript/Frontend'
  | 'Node.js'
  | 'React'
  | 'Angular'
  | 'Vue'
  | 'iOS'
  | 'Android';

export type CourseCard = {
  _id: string | number;
  type: CourseType;
  title: string;
  mode: CourseMode;
  country: CourseCountry;
  language: CourseLanguage;
  starting_date: string;
};
