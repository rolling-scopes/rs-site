import { CourseType } from 'types/course-card';

type CourseTypeData = {
  iconPath: string;
  class: string;
  iconColor: string;
};

export const cardData = {
  'Javascript/Frontend': {
    iconPath: '/images/techs/javascript.svg',
    class: 'javascriptCard',
    iconColor: '#000000'
  },
  'Node.js': {
    iconPath: '/images/techs/node.svg',
    class: 'nodejsCard',
    iconColor: '#000000'
  },
  React: {
    iconPath: '/images/techs/react.svg',
    class: 'reactCard',
    iconColor: '#000000'
  },
  Angular: {
    iconPath: '/images/techs/angular.svg',
    class: 'angularCard',
    iconColor: '#ffffff'
  },
  iOS: {
    iconPath: '/images/techs/ios.svg',
    class: 'iosCard',
    iconColor: '#ffffff'
  }
} as Record<CourseType, CourseTypeData>;
