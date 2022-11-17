export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Companies',
      name: 'companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'link', type: 'url', title: 'URL' },
            {
              name: 'picture',
              title: 'Picture',
              type: 'image',
              validation: Rule => Rule.required()
            }
          ]
        }
      ],
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }
  ]
};
