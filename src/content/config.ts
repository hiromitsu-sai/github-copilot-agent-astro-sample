import { defineCollection, z } from 'astro:content';

const worksCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        externalUrl: z.string().url().optional(),
    }),
});

export const collections = {
    works: worksCollection,
};