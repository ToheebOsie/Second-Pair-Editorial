/** @type {import('next').NextConfig} */
const nextConfig = {
  // Inline the (small) stylesheet into each page so it no longer blocks first paint as a separate request.
  experimental: {inlineCss: true},
  poweredByHeader: false,
};
export default nextConfig;
