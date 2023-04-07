export default {
  name: 'pictures_block',
  title: 'Pictures block',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image'
        }
      ],
      hotspot: true,
      validation: Rule => Rule.required()
    }
  ]
};
