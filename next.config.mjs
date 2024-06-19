import { createMdxtsPlugin } from 'mdxts/next';

const withMdxts = createMdxtsPlugin({
    theme: 'nord'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            }, {
                protocol: 'https',
                hostname: 'github.com',
            },
        ],
    }
};

export default withMdxts(nextConfig);
