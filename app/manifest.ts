import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Priyanshu Prajapati - Software Developer Portfolio',
    short_name: 'Priyanshu Portfolio',
    description: 'Portfolio of Priyanshu Prajapati, a skilled Software Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/Favicon.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/Favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      // Add more icon sizes when you create them (192x192, 512x512)
    ],
  }
}
