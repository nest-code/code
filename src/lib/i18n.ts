import { writable } from 'svelte/store';

export type Locale = 'en' | 'id';

export const language = writable<Locale>('en');

export const copy = {
	en: {
		nav: { about: 'About', work: 'Selected work', articles: 'Notes', stack: 'Technology', contact: 'Let’s talk', lightTheme: 'Switch to light theme', darkTheme: 'Switch to dark theme' },
		home: {
		eyebrow: 'SOFTWARE ENGINEER',
		heroTitle: 'I build practical software that helps solve everyday problems.',
		heroDescription: 'I turn ideas into useful applications, simplify complicated processes, and focus on building solutions that are reliable and easy to use.',
		primaryCta: 'Explore my work', secondaryCta: 'Get to know me', scroll: 'SCROLL TO EXPLORE', visualCaption: 'Calm in approach.\nClear in purpose.',
		aboutIndex: '01 / ABOUT', aboutKicker: 'Hello, I’m a Software Engineer.', aboutTitle: 'Technology should make life easier.',
		aboutBody: 'I enjoy understanding how things work, finding better ways to solve problems, and building software with a clear purpose. Good software helps people get things done with less friction.',
		workIndex: '02 / SELECTED WORK', workTitle: 'Problems worth solving.', workIntro: 'A few concepts and experiments exploring practical ways to make everyday tasks easier.',
		projects: [
			{ category: 'Product concept · Dashboard', title: 'Flow State', description: 'A workspace concept for seeing tasks, blockers, and project progress in one calm, focused view.' },
			{ category: 'Knowledge concept · Tech notes', title: 'Stack Atlas', description: 'A small, source-led guide to technologies, what they are useful for, and ideas they can help shape.' },
			{ category: 'System concept · Operations', title: 'Tiny Inventory', description: 'An inventory concept for recording items, stock movement, and a clear snapshot of daily operations.' }
		], concept: 'CONCEPT / PLAYGROUND', showcaseNote: 'These are early showcase concepts, not client work or production claims. Details can be replaced with verified projects as they are ready.',
		approachIndex: '03 / HOW I THINK', approachTitle: 'A thoughtful way to build.',
		principles: [
			{ title: 'Keep it simple.', description: 'Technology should make things easier to understand and use.' },
			{ title: 'Solve the real problem.', description: 'Understand what needs to change before choosing what to build.' },
			{ title: 'Build with care.', description: 'Pay attention to details and take responsibility for the result.' },
			{ title: 'Keep improving.', description: 'Use each project to learn, refine an idea, and find a better way.' }
		],
		stackIndex: '04 / TOOLKIT', stackTitle: 'Tools in motion.', stackBody: 'A moving snapshot of technologies I am exploring in personal experiments. The marks identify tools, not a claim of production experience.', stackNote: 'The flow is decorative. Every logo links to its official technology website.',
		articlesIndex: '05 / NOTES', articlesTitle: 'Ideas, written clearly.', articlesLink: 'Browse all notes', articlesEmpty: 'Notes and articles will appear here as they are published.', articlesOpen: 'Open the notes page',
		contactIndex: '06 / NEXT STEP', contactEyebrow: 'HAVE AN IDEA?', contactTitle: 'Let’s make something useful.', contactCta: 'Chat on WhatsApp', whatsappPhone: '+62 812-2535-3640',
		footer: 'Made with curiosity', backTop: 'Back to top', whatsappLabel: 'Message me on WhatsApp', whatsappMessage: 'Hello, I found your portfolio and would like to talk about a project.'
		},
		articles: {
			title: 'Notes & Articles', description: 'Ideas about technology, software, and the process of building useful things.', back: 'Back to home', emptyTitle: 'A space for notes.', emptyBody: 'Published articles will appear here. Each note is written to make technology easier to understand.', allNotes: 'All notes',
			notPublished: 'This article is not available.'
		}
	},
	id: {
		nav: { about: 'Tentang', work: 'Karya pilihan', articles: 'Catatan', stack: 'Teknologi', contact: 'Mari bicara', lightTheme: 'Ganti ke tema terang', darkTheme: 'Ganti ke tema gelap' },
		home: {
		eyebrow: 'SOFTWARE ENGINEER',
		heroTitle: 'Saya membangun software praktis untuk membantu menyelesaikan masalah sehari-hari.',
		heroDescription: 'Saya mengubah ide menjadi aplikasi yang berguna, menyederhanakan proses yang rumit, dan berfokus pada solusi yang andal serta mudah digunakan.',
		primaryCta: 'Jelajahi karya', secondaryCta: 'Kenali saya', scroll: 'GULIR UNTUK MENJELAJAH', visualCaption: 'Tenang dalam proses.\nJelas tujuannya.',
		aboutIndex: '01 / TENTANG', aboutKicker: 'Halo, saya seorang Software Engineer.', aboutTitle: 'Teknologi seharusnya memudahkan hidup.',
		aboutBody: 'Saya senang memahami cara kerja sesuatu, mencari cara yang lebih baik untuk memecahkan masalah, dan membangun software dengan tujuan yang jelas. Software yang baik membantu orang menyelesaikan pekerjaan dengan lebih mudah.',
		workIndex: '02 / KARYA PILIHAN', workTitle: 'Masalah yang layak diselesaikan.', workIntro: 'Beberapa konsep dan eksperimen tentang cara praktis untuk memudahkan pekerjaan sehari-hari.',
		projects: [
			{ category: 'Konsep produk · Dashboard', title: 'Flow State', description: 'Konsep ruang kerja untuk melihat tugas, hambatan, dan perkembangan proyek dalam satu tampilan yang terarah.' },
			{ category: 'Konsep pengetahuan · Catatan teknologi', title: 'Stack Atlas', description: 'Panduan ringkas berbasis sumber tentang teknologi, kegunaannya, dan ide yang bisa dibangun dengannya.' },
			{ category: 'Konsep sistem · Operasional', title: 'Tiny Inventory', description: 'Konsep inventaris untuk mencatat barang, pergerakan stok, dan gambaran operasional harian.' }
		], concept: 'KONSEP / PLAYGROUND', showcaseNote: 'Ini adalah konsep showcase awal, bukan proyek klien atau klaim aplikasi produksi. Detailnya dapat diganti dengan karya nyata yang sudah terverifikasi.',
		approachIndex: '03 / CARA BERPIKIR', approachTitle: 'Pendekatan yang penuh pertimbangan.',
		principles: [
			{ title: 'Jaga tetap sederhana.', description: 'Teknologi seharusnya membuat sesuatu lebih mudah dipahami dan digunakan.' },
			{ title: 'Selesaikan masalah yang nyata.', description: 'Pahami apa yang perlu diubah sebelum menentukan apa yang akan dibangun.' },
			{ title: 'Bangun dengan cermat.', description: 'Perhatikan detail dan bertanggung jawab atas hasilnya.' },
			{ title: 'Terus berkembang.', description: 'Gunakan setiap proyek untuk belajar, menyempurnakan ide, dan menemukan cara yang lebih baik.' }
		],
		stackIndex: '04 / TOOLKIT', stackTitle: 'Teknologi yang bergerak.', stackBody: 'Cuplikan teknologi yang sedang saya jelajahi dalam eksperimen pribadi. Logo menunjukkan nama teknologi, bukan klaim pengalaman produksi.', stackNote: 'Aliran ini bersifat dekoratif. Setiap logo mengarah ke situs resmi teknologinya.',
		articlesIndex: '05 / CATATAN', articlesTitle: 'Ide, ditulis dengan jelas.', articlesLink: 'Lihat semua catatan', articlesEmpty: 'Catatan dan artikel akan muncul di sini setelah dipublikasikan.', articlesOpen: 'Buka halaman catatan',
		contactIndex: '06 / LANGKAH BERIKUTNYA', contactEyebrow: 'PUNYA IDE?', contactTitle: 'Mari buat sesuatu yang berguna.', contactCta: 'Chat melalui WhatsApp', whatsappPhone: '+62 812-2535-3640',
		footer: 'Dibuat dengan rasa ingin tahu', backTop: 'Kembali ke atas', whatsappLabel: 'Hubungi saya melalui WhatsApp', whatsappMessage: 'Halo, saya melihat portfolio Anda dan ingin berdiskusi tentang sebuah proyek.'
		},
		articles: {
			title: 'Catatan & Artikel', description: 'Ide tentang teknologi, software, dan proses membangun hal yang berguna.', back: 'Kembali ke beranda', emptyTitle: 'Ruang untuk berbagi catatan.', emptyBody: 'Artikel yang dipublikasikan akan muncul di sini. Setiap catatan ditulis agar teknologi lebih mudah dipahami.', allNotes: 'Semua catatan',
			notPublished: 'Artikel ini belum tersedia.'
		}
	}
} as const;

export function setLanguage(value: Locale) {
	language.set(value);
	if (typeof localStorage !== 'undefined') localStorage.setItem('ruangkode-language', value);
	if (typeof document !== 'undefined') document.documentElement.lang = value;
}

export function whatsappUrl(message: string) {
	return `https://wa.me/6281225353640?text=${encodeURIComponent(message)}`;
}

export function formatDateLabel(value: string, locale: Locale) {
	const date = new Date(value);
	return new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);
}
