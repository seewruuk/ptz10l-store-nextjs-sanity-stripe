import sanityClient from '@sanity/client';
import imageUrlBilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'n2jn669u',
    dataset: 'production',
    apiVersion: '2022-12-12',
    useCdn: true,
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBilder(client);

export const urlFor = (source) => builder.image(source)