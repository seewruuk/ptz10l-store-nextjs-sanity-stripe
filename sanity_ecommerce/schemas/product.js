export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Zdjecie',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            type: 'string',
            title: 'Tutul ksiazki',
        },
        {
            name: 'author',
            type: 'string',
            title: 'Autor',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Cena',
        },
        {
            title: 'Dostępny?',
            name: 'available',
            type: 'boolean'
        }
    ]

}