// next.config.js
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = withContentlayer(options);