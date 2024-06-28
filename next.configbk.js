import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

export default nextConfig;