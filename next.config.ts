import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // AQTF is demoted to evidence: /fund becomes a permanent redirect to
      // the homepage Recognition section, not a deleted route.
      { source: '/fund', destination: '/#recognition', permanent: true },
    ];
  },
};

export default nextConfig;
