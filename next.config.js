/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port:'',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port:'',
            },
        ],
    },
}

module.exports = nextConfig
