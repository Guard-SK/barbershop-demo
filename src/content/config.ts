import { defineCollection, z } from 'astro:content';

const services = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        price: z.string(),
        duration: z.string(),
        description: z.string().optional(),
        tier: z.enum(['master', 'senior', 'junior']).optional(),
        featured: z.boolean().default(false),
        order: z.number().default(100),
    }),
});

const barbers = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        role: z.string(),
        bio: z.string(),
        instagram: z.string().optional(),
        image: image().optional(),
        order: z.number().default(100),
    }),
});

const reviews = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        rating: z.number().min(1).max(5),
        text: z.string(),
        date: z.string(),
        service: z.string().optional(),
    }),
});

export const collections = {
    services,
    barbers,
    reviews,
};
