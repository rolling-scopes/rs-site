import { defineType, defineField, defineArrayMember } from 'sanity';

export const partners = defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      title: 'Companies',
      name: 'companies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'link', type: 'url', title: 'URL' },
            {
              name: 'picture',
              title: 'Picture',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required()
            }
          ]
        })
      ],
      validation: Rule => Rule.required()
    })
  ]
});
