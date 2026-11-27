<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Artikel & Catatan — Ruang Kode</title>
	<meta name="description" content="Artikel, ide sistem, dan catatan teknologi dari ruang eksperimen Software Engineer." />
	<meta name="robots" content="index,follow" />
</svelte:head>

<main class="articles-page shell">
	<a class="back-link" href="/">← Kembali ke beranda</a>
	<p class="section-index">04 <span>/ CATATAN & ARTIKEL</span></p>
	<h1>Ide yang <em>ditulis.</em></h1>
	<p class="articles-lead">Catatan seputar teknologi, ide sistem, dan proses belajar. Artikel baru dapat ditambahkan melalui ruang admin.</p>
	{#if data.articles.length}
		<div class="article-list">
			{#each data.articles as article}
				<a class="article-row" href="/artikel/{article.slug}/">
					<div><span class="article-category">{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p></div>
					<div class="article-row-side"><span>{article.dateLabel}</span><b>↗</b></div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="articles-empty"><span>✳</span><div><h2>Ruang catatan siap diisi.</h2><p>Setelah admin dihubungkan ke repositori situs, artikel yang dipublikasikan akan tampil di sini.</p></div></div>
	{/if}
</main>
