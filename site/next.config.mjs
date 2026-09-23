/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Project Pages serves the site under /funeralcostinfo; basePath keeps
  // asset URLs and next/link hrefs working under that subpath.
  basePath: '/funeralcostinfo',
  images: { unoptimized: true },
};

export default nextConfig;
