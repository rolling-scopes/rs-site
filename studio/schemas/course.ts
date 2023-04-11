import { defineType, defineField } from 'sanity';

export const course = defineType({
  name: 'courses',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      validation: Rule => Rule.required(),
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Javascript/Frontend', value: 'Javascript/Frontend' },
          { title: 'Node.js', value: 'Node.js' },
          { title: 'React', value: 'React' },
          { title: 'Angular', value: 'Angular' },
          { title: 'iOS', value: 'iOS' }
        ]
      }
    }),

    defineField({
      validation: Rule => Rule.required(),
      name: 'title',
      title: 'Title',
      type: 'string'
    }),

    defineField({
      validation: Rule => Rule.required(),
      name: 'mode',
      title: 'Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Online', value: 'Online' },
          { title: 'Offline', value: 'Offline' }
        ]
      }
    }),

    defineField({
      validation: Rule => Rule.required(),
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Anywhere', value: 'Anywhere' },
          { title: 'Armenia', value: 'Armenia' },
          { title: 'Belarus', value: 'Belarus' },
          { title: 'Georgia', value: 'Georgia' },
          { title: 'Kazahstan', value: 'Kazahstan' },
          { title: 'Kyrgyzstan', value: 'Kyrgyzstan' },
          { title: 'Latvia', value: 'Latvia' },
          { title: 'Lithuania', value: 'Lithuania' },
          { title: 'Montenegro', value: 'Montenegro' },
          { title: 'Poland', value: 'Poland' },
          { title: 'Serbia', value: 'Serbia' },
          { title: 'Turkey', value: 'Turkey' },
          { title: 'Ukraine', value: 'Ukraine' },
          { title: 'Uzbekistan', value: 'Uzbekistan' }
        ]
      }
    }),

    defineField({
      validation: Rule => Rule.required(),
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Belarusian', value: 'Belarusian' },
          { title: 'English', value: 'English' },
          { title: 'Russian', value: 'Russian' },
          { title: 'Ukrainian', value: 'Ukrainian' }
        ]
      }
    }),

    defineField({
      validation: Rule => Rule.required(),
      name: 'starting_date',
      title: 'Starting date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    })
  ]
});
