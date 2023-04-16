import {defineField} from 'sanity';

export const gallery = defineField({
        title: 'How it Works',
        name: 'gallery',
        type: 'array',
        of: [
            {
                title: 'Image',
                name: 'poster',
                type: 'image',
                fields: [
                    {
                        name: 'caption',
                        type: 'string',
                        title: 'Caption'
                    },
                    {
                        name: 'description',
                        type: 'string',
                        title: 'Description'
                    },
                    {
                        title: 'URL',
                        name: 'url',
                        type: 'url'
                    },
                    {
                        name: 'imageAlt',
                        type: 'string',
                        title: 'Image alt'
                    }
                ]
            }
        ]
    }
)
