import { defineType, defineField } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    })
  ]
});
