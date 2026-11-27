<script lang="ts">
	import type { PageData } from './$types';
	import { copy, formatDateLabel, language } from '../../../lib/i18n';
	let { data }: { data: PageData } = $props();
	const t = $derived(copy[$language].articles);
</script>

<svelte:head>
	<title>{data.article.title} — Ruang Kode</title>
	<meta name="description" content={data.article.excerpt} />
	<meta property="og:title" content={data.article.title} />
	<meta property="og:description" content={data.article.excerpt} />
</svelte:head>

<main class="article-detail shell">
	<a class="back-link" href="/artikel/">← {t.allNotes}</a>
	<header class="article-detail-head">
		<p class="article-category">{data.article.category} <span>/</span> {formatDateLabel(data.article.date, $language)}</p>
		<h1>{data.article.title}</h1>
		<p class="article-detail-excerpt">{data.article.excerpt}</p>
	</header>
	<article class="prose">{@html data.article.bodyHtml}</article>
	<a class="back-link bottom-back" href="/artikel/">← {t.allNotes}</a>
</main>
