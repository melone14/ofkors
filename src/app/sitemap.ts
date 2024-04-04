import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ofkors.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}