import { defineType, defineField } from 'sanity';

export const donationV1 = defineType({
  name: 'donation-v1',
  title: 'Donation-v1',
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
