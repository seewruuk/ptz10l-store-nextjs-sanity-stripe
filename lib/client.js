import sanityClient from '@sanity/client';
import imageUrlBilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'y6ns8rmi',
    dataset: 'production',
    apiVersion: '2022-12-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBilder(client);

export const urlFor = (source) => builder.image(source)