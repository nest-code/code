import type { SimpleIcon } from 'simple-icons';
import {
	siBun,
	siCodeigniter,
	siDrizzle,
	siFirebase,
	siJavascript,
	siLaravel,
	siMarkdown,
	siMongodb,
	siN8n,
	siNodedotjs,
	siPostgresql,
	siSqlite,
	siSvelte,
	siTailwindcss,
	siTypescript
} from 'simple-icons';

export type TechnologyMark = {
	name: string;
	icon?: SimpleIcon;
	imageUrl?: string;
};

// Elysia's logo is not yet in Simple Icons, so use its official logo asset.
export const technologyBands: TechnologyMark[][] = [
	[
		{ name: 'Tailwind CSS', icon: siTailwindcss },
		{ name: 'TypeScript', icon: siTypescript },
		{ name: 'JavaScript', icon: siJavascript },
		{ name: 'Svelte', icon: siSvelte },
		{ name: 'Markdown', icon: siMarkdown }
	],
	[
		{ name: 'Bun', icon: siBun },
		{ name: 'Node.js', icon: siNodedotjs },
		{ name: 'ElysiaJS', imageUrl: 'https://elysiajs.com/assets/elysia.svg' },
		{ name: 'n8n', icon: siN8n },
		{ name: 'Laravel', icon: siLaravel },
		{ name: 'CodeIgniter', icon: siCodeigniter }
	],
	[
		{ name: 'Drizzle ORM', icon: siDrizzle },
		{ name: 'Firebase', icon: siFirebase },
		{ name: 'PostgreSQL', icon: siPostgresql },
		{ name: 'SQLite', icon: siSqlite },
		{ name: 'MongoDB', icon: siMongodb }
	]
];
