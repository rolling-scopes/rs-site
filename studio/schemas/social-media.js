export default {
  name: 'social_media',
  title: 'Social media',
  type: 'document',
  fields: [
    {
      title: 'Social media list',
      name: 'social_media_title',
      type: 'string'
    },
    {
      title: 'Social media list',
      name: 'social_media_list',
      type: 'array',
      of: [
        {
          title: 'Social media item',
          name: 'social_media_item',
          type: 'document',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name'
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon'
            },
            {
              name: 'item_chanel_list',
              title: 'Chanel list',
              type: 'array',
              of: [
                {
                  name: 'channel_item',
                  type: 'document',
                  title: 'Channel item',
                  fields: [
                    {
                      name: 'channel_name',
                      type: 'string',
                      title: 'Channel Name',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'channel_link',
                      type: 'url',
                      title: 'Channel Link',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'channel_country_members',
                      type: 'number',
                      title: 'Country members',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'channel_description',
                      type: 'string',
                      title: 'Channel description',
                      validation: Rule => Rule.required()
                    }
                  ]
                }
              ]
            }
          ],
          validation: Rule => Rule.required()
        }
      ],
      hotspot: true,
      validation: Rule => Rule.required()
    }
  ]
};
