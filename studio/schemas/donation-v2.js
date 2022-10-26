export default {
    name: 'donation-v2',
    title: 'Donation-v2',
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
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: { hotspot: true },
        validation: Rule => Rule.required()
      }
    ]
  };
  