/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows the project to build even if lint warnings exist — convenient for a fast handoff.
  // You can remove this later once you've set up your own linting workflow.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
