export default function sitemap() {
    return [
        {
            url: 'https://www.rockymtnremodels.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.rockymtnremodels.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.rockymtnremodels.com/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.rockymtnremodels.com/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.rockymtnremodels.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://www.rockymtnremodels.com/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.3,
        },
    ]
}