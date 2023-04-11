import { defineType, defineField, defineArrayMember } from 'sanity';

export const socialMedia = defineType({
  name: 'social_media',
  title: 'Social media',
  type: 'document',
  fields: [
    defineField({
      title: 'Social media list',
      name: 'social_media_title',
      type: 'string'
    }),
    defineField({
      title: 'Social media list',
      name: 'social_media_list',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Social media item',
          name: 'social_media_item',
          type: 'document',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name'
            }),
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Icon',
              options: { hotspot: true }
            }),
            defineField({
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
            })
          ],
          validation: Rule => Rule.required()
        })
      ],
      validation: Rule => Rule.required()
    })
  ]
});
