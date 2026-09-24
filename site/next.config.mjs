/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Custom domain (funeralcostinfo.com) serves the site at the domain root,
  // so no basePath. (Previously '/funeralcostinfo' for the GitHub Project
  // Pages subpath — removed 2026-09-23 when the custom domain went live.)
  images: { unoptimized: true },
};

export default nextConfig;
