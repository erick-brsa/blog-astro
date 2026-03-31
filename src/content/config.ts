import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
    type: "content",
    // loader: glob({ base: './src/content/blog', pattern: "**/*.{md,mdx}"}),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image().refine(img => img, {
            message: ""
        }),

        // Relación
        author: z.string(),

        // Relación
        tags: z.array(z.string())
    })
});

export const collections = {
    blog: blogCollection
}