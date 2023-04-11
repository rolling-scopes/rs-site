import { defineType, defineField } from 'sanity';

export const speakers = defineType({
  name: 'speakers',
  title: 'Speakers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'titleLink',
      title: 'Title Link',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'link',
      title: 'Url',
      type: 'url',
      validation: Rule => Rule.required()
    })
  ]
});
