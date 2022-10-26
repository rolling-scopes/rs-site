export default {
    name: 'speakers',
    title: 'Speakers',
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
      }
    ]
  };
  