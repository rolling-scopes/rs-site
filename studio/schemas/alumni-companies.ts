import { defineType, defineField } from 'sanity';

export const alumniCompanies = defineType({
  name: 'alumni-companies',
  title: 'Alumni Companies',
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
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            {
              name: 'picture',
              title: 'Picture',
              type: 'image',
              options: { hotspot: true },
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    })
  ]
});
