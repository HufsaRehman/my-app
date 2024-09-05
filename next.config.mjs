const nextConfig = {
    reactStrictMode:true,
    swcMinfy: true,
    images:{
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '**',
            },
        ],
        
    },
};
export default nextConfig;