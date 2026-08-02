import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { articleMeta, getArticleHref, sortArticles } from '../lib/articles';

export async function GET(context) {
  const articles = sortArticles(await getCollection('articles')).map(articleMeta);
  return rss({
    title: 'CLARITY — The permanent knowledge archive',
    description: 'Understand. Learn. Grow.',
    site: context.site,
    items: articles.slice().reverse().map((article) => ({
      title: article.title,
      description: article.description,
      pubDate: article.date,
      link: getArticleHref(article),
      categories: [article.category, ...article.tags],
    })),
    customData: '<language>en-us</language>',
  });
}
