import { getArticles } from '../../lib/articles';

export const prerender = true;

export function load() {
	return { articles: getArticles() };
}
