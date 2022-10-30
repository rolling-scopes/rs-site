const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  typescript: {
    tsconfigPath: 'tsconfig.json'
  },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' }
    ]
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  }
});
