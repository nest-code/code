<script lang="ts">
	import type { PageData } from './$types';
	import { copy, formatDateLabel, language } from '../../lib/i18n';
	let { data }: { data: PageData } = $props();
	const t = $derived(copy[$language].articles);
</script>

<svelte:head>
	<title>{t.title} — Ruang Kode</title>
	<meta name="description" content={t.description} />
	<meta name="robots" content="index,follow" />
</svelte:head>

<main class="articles-page shell">
	<a class="back-link" href="/">← {t.back}</a>
	<p class="section-index">05 / {t.title}</p>
	<h1>{t.title}</h1>
	<p class="articles-lead">{t.description}</p>
	{#if data.articles.length}
		<div class="article-list">
			{#each data.articles as article}
				<a class="article-row" href="/artikel/{article.slug}/">
					<div><span class="article-category">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p></div>
					<div class="article-row-side"><span>{formatDateLabel(article.date, $language)}</span><b>↗</b></div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="articles-empty"><span>✳</span><div><h2>{t.emptyTitle}</h2><p>{t.emptyBody}</p></div></div>
	{/if}
</main>
