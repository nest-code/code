import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

export type Article = {
	slug: string;
	title: string;
	language: 'id' | 'en';
	date: string;
	dateLabel: string;
	category: string;
	tags: string[];
	excerpt: string;
	cover: string;
	coverAlt: string;
	seoTitle: string;
	seoDescription: string;
	bodyHtml: string;
};

const markdown = new MarkdownIt({ html: false, linkify: true, typographer: true });
const files = import.meta.glob<string>('/src/content/articles/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function formatDate(value: string | Date | undefined): { iso: string; label: string } {
	const date = value ? new Date(value) : new Date();
	const validDate = Number.isNaN(date.getTime()) ? new Date() : date;
	return {
		iso: validDate.toISOString(),
		label: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(validDate)
	};
}

export function getArticles(): Article[] {
	return Object.entries(files)
		.map(([path, raw]) => {
			const { data, content } = matter(raw);
			const slug = path.split('/').pop()?.replace(/\.md$/, '') ?? '';
			const { iso, label } = formatDate(data.date as string | Date | undefined);
			return {
				slug,
				title: String(data.title ?? 'Tanpa judul'),
				language: data.language === 'en' ? 'en' : 'id',
				date: iso,
				dateLabel: label,
				category: String(data.category ?? ''),
				tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
				excerpt: String(data.excerpt ?? ''),
				cover: String(data.cover ?? ''),
				coverAlt: String(data.cover_alt ?? ''),
				seoTitle: String(data.seo_title ?? ''),
				seoDescription: String(data.seo_description ?? ''),
				bodyHtml: markdown.render(content),
				published: data.published === true
			} as Article & { published: boolean };
		})
		.filter((article) => article.published)
		.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getArticle(slug: string): Article | undefined {
	return getArticles().find((article) => article.slug === slug);
}
