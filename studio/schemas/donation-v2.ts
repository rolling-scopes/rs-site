import { defineType, defineField } from 'sanity';

export const donationV2 = defineType({
  name: 'donation-v2',
  title: 'Donation-v2',
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
