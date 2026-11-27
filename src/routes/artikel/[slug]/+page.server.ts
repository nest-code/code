import { error } from '@sveltejs/kit';
import { getArticle, getArticles } from '../../../lib/articles';

export const prerender = true;

export function entries() {
	return getArticles().map(({ slug }) => ({ slug }));
}

export function load({ params }) {
	const article = getArticle(params.slug);
	if (!article) error(404, 'Artikel tidak ditemukan');
	return { article };
}
