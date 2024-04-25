import { MetadataRoute } from 'next'

import { getBlogPostsList, getRealEstateAgentsList, getRealEstateList } from '@/clients/clients'

type Obj = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number;
}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {



  const staticRoutes: Obj[]= [
    {
      url: 'https://ofkors.pl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ofkors.pl/polityka-prywatnosci',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://ofkors.pl/regulamin-strony',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://ofkors.pl/polityka-prywatnosci-w-serwisie-facebook',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://ofkors.pl/polityka-prywatnosci-w-serwisie-instagram',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://ofkors.pl/co-robimy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ofkors.pl/kontakt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ofkors.pl/oferty',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://ofkors.pl/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]

  const blogArr = await getBlogPostsList().then(data => {
    const arr: Array<Obj> = data.posts.map(obj => ({
      url: `https://ofkors.pl/blog/${obj.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }))
    return arr
  })

  const realEstateArr = await getRealEstateList({}).then(data => {
    const arr: Array<Obj> = data.map(obj => ({
      url: `https://ofkors.pl/blog/${obj.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }))
    return arr
  })

  const realEstateAgentsArr = await getRealEstateAgentsList().then(data => {
    const arr: Array<Obj>  = data.map(obj => ({
      url: `https://ofkors.pl/nasi-agenci/${obj.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }))
    return arr
  })

  return [ ...staticRoutes, ...realEstateArr, ...realEstateAgentsArr, ...blogArr ]
}