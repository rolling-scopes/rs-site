export default {
  name: 'merch_general',
  title: 'Merch General',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'titleLink',
      title: 'Title Link',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Url',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'imagesList',
      title: 'Title images',
      type: 'array',
      of: [
        {
          title: 'Poster',
          name: 'poster',
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution'
            }
          ]
        },

        {
          title: 'URL',
          name: 'urlObject',
          type: 'object',
          fields: [
            {
              title: 'URL',
              name: 'urlField',
              type: 'url'
            }
          ]
        }
      ]
    },
    {
      name: 'general_info',
      title: 'General Info',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'titleLink',
          title: 'Title Link',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    }
  ]
};
