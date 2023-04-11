import { defineType, defineField, defineArrayMember } from 'sanity';

export const picturesBlock = defineType({
  name: 'rs_pictures_block',
  title: 'Pictures block',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Image',
          name: 'image',
          type: 'image',
          options: { hotspot: true }
        })
      ],
      validation: Rule => Rule.required()
    })
  ]
});
