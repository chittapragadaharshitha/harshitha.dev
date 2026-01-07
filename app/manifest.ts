import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Harshitha Vaddiparthy - AI Product Engineer & Entrepreneur',
    short_name: 'Harshitha',
    description: 'AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
