/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'unpkg.com',
                pathname: '/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/*',
                port: ''
            }
        ]
    }
};

export default nextConfig;
