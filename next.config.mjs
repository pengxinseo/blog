import createNextIntlPlugin from 'next-intl/plugin';
import withMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};
  

export default withNextIntl(nextConfig);
