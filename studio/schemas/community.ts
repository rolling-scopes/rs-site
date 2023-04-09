import { defineType, defineField } from 'sanity';

export const community = defineType({
  name: 'community',
  title: 'Community',
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
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    })
  ]
});
