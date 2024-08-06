/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: [
      "imgur.com",
      "farm1.staticflickr.com",
      "live.staticflickr.com",
      "farm5.staticflickr.com",
      "i.imgur.com",
      "photos.marinetraffic.com",
    ],
  },
};

module.exports = nextConfig;
