import sanityClient from '@sanity/client';
import imageUrlBilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'n2jn669u',
    dataset: 'production',
    apiVersion: '2022-12-12',
    useCdn: true,
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    token: 'skOWKmBjQsb5vlMcJjfo6Fzdt1kv4J6oBYNT5UFBdn7kKZl4SsmOItCe27dM3zajF7KuO0IF0gWmlLcosRAVHdWO21FjkcrnsjJziTfiDmwAWE7R6ZtfjiiBrqQBVe2EGDNZS8UsXS4Ayr2gT3b9tkUekruIrCJnHQN8kVyo9IfmYAkPF73K',
});

const builder = imageUrlBilder(client);

export const urlFor = (source) => builder.image(source)