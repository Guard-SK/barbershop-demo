import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: import.meta.env.PROD ? {
        kind: 'github',
        repo: 'Guard-SK/barbershop-demo',
    } : {
        kind: 'local',
    },
    collections: {
        barbers: collection({
            label: 'Barbers',
            slugField: 'slug',
            path: 'src/content/barbers/**',
            format: { contentField: 'content' },
            schema: {
                slug: fields.slug({ name: { label: 'Slug' } }),
                name: fields.text({ label: 'Name' }),
                role: fields.text({ label: 'Role' }),
                bio: fields.text({
                    label: 'Bio',
                    multiline: true,
                }),
                instagram: fields.text({ label: 'Instagram URL' }),
                image: fields.image({
                    label: 'Profile Image',
                    directory: 'public/images/barbers',
                    publicPath: '/images/barbers/',
                }),
                order: fields.integer({ label: 'Order', defaultValue: 100 }),
                content: fields.markdoc({
                    label: 'Content',
                    extension: 'md',
                }),
                lang: fields.select({
                    label: 'Language',
                    options: [
                        { label: 'Slovak', value: 'sk' },
                        { label: 'English', value: 'en' },
                    ],
                    defaultValue: 'sk',
                }),
            },
        }),
        services: collection({
            label: 'Services',
            slugField: 'slug',
            path: 'src/content/services/**',
            format: { contentField: 'description' },
            schema: {
                slug: fields.slug({ name: { label: 'Slug' } }),
                title: fields.text({ label: 'Title' }),
                price: fields.text({ label: 'Price' }),
                duration: fields.text({ label: 'Duration' }),
                description: fields.markdoc({
                    label: 'Description',
                    extension: 'md',
                }),
                tier: fields.select({
                    label: 'Tier',
                    options: [
                        { label: 'Master', value: 'master' },
                        { label: 'Senior', value: 'senior' },
                        { label: 'Junior', value: 'junior' },
                    ],
                    defaultValue: 'master',
                }),
                featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
                order: fields.integer({ label: 'Order', defaultValue: 100 }),
                lang: fields.select({
                    label: 'Language',
                    options: [
                        { label: 'Slovak', value: 'sk' },
                        { label: 'English', value: 'en' },
                    ],
                    defaultValue: 'sk',
                }),
            },
        }),
        reviews: collection({
            label: 'Reviews',
            slugField: 'slug',
            path: 'src/content/reviews/**',
            format: { contentField: 'content' },
            schema: {
                slug: fields.slug({ name: { label: 'Slug' } }),
                name: fields.text({ label: 'Author Name' }),
                rating: fields.integer({
                    label: 'Rating (1-5)',
                    validation: { min: 1, max: 5 },
                    defaultValue: 5
                }),
                text: fields.text({
                    label: 'Review Text',
                    multiline: true,
                }),
                date: fields.date({ label: 'Date', validation: { isRequired: true } }),
                service: fields.text({ label: 'Service' }),
                content: fields.markdoc({
                    label: 'Content',
                    extension: 'md',
                }),
                lang: fields.select({
                    label: 'Language',
                    options: [
                        { label: 'Slovak', value: 'sk' },
                        { label: 'English', value: 'en' },
                    ],
                    defaultValue: 'sk',
                }),
            },
        }),
    },
});
