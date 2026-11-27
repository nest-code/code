<script lang="ts">
	import type { PageData } from './$types';
	import { copy, formatDateLabel, language } from '../../../lib/i18n';
	let { data }: { data: PageData } = $props();
	const t = $derived(copy[$language].articles);
</script>

<svelte:head>
	<title>{data.article.seoTitle || data.article.title} — Ruang Kode</title>
	<meta name="description" content={data.article.seoDescription || data.article.excerpt} />
	<meta property="og:title" content={data.article.seoTitle || data.article.title} />
	<meta property="og:description" content={data.article.seoDescription || data.article.excerpt} />
</svelte:head>

<main class="article-detail shell" lang={data.article.language}>
	<a class="back-link" href="/artikel/">← {t.allNotes}</a>
	<header class="article-detail-head">
		<div class="article-meta"><span class="article-language">{data.article.language.toUpperCase()}</span>{#if data.article.category}<span class="article-category">{data.article.category}</span>{/if}<span class="article-date-inline">{formatDateLabel(data.article.date, $language)}</span></div>
		<h1>{data.article.title}</h1>
		<p class="article-detail-excerpt">{data.article.excerpt}</p>
		{#if data.article.tags.length}<div class="article-tags">{#each data.article.tags as tag}<span>{tag}</span>{/each}</div>{/if}
		{#if data.article.cover}<img class="article-detail-cover" src={data.article.cover} alt={data.article.coverAlt || data.article.title} fetchpriority="high" />{/if}
	</header>
	<article class="prose">{@html data.article.bodyHtml}</article>
	<a class="back-link bottom-back" href="/artikel/">← {t.allNotes}</a>
</main>
