export default {
  name: 'social_link_list',
  title: 'SocialLinkList',
  type: 'document',
  fields: [
    {
      title: 'Social name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social icon',
      name: 'icon',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Social link list',
      name: 'social_item_link',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name link' },
            { name: 'link', type: 'url', title: 'URL' },
          ]
        }
      ],
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }
  ]
};
