import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

export type Article = {
	slug: string;
	title: string;
	date: string;
	dateLabel: string;
	category: string;
	excerpt: string;
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
				date: iso,
				dateLabel: label,
				category: String(data.category ?? 'Catatan'),
				excerpt: String(data.excerpt ?? ''),
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
