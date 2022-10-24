export default {
  name: 'social_link',
  title: 'SocialLink',
  type: 'document',
  fields: [
    {
      title: 'Social name',
      name: 'social_name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social link',
      name: 'social_item_link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name link' },
            { name: 'link', type: 'url', title: 'URL' },
            { name: 'country', type: 'string', title: 'Country' }
          ]
        }
      ],
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }
  ]
};
