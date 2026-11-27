<script lang="ts">
	import type { PageData } from './$types';
	import { copy, formatDateLabel, language, whatsappUrl } from '../lib/i18n';
	let { data }: { data: PageData } = $props();
	const t = $derived(copy[$language].home);

	type Experiment = {
		id: number;
		className: string;
	};

	const experiments: Experiment[] = [
		{ id: 0, className: 'flow-art' },
		{ id: 1, className: 'atlas-art' },
		{ id: 2, className: 'inventory-art' }
	];

	const stack = ['TypeScript', 'Svelte', 'Bun', 'Markdown', 'ElysiaJS', 'DrizzleORM'];
</script>

<svelte:head>
	<title>{$language === 'id' ? 'Ruang Kode — Software Engineer' : 'Ruang Kode — Software Engineer'}</title>
	<meta name="description" content={$language === 'id' ? 'Portfolio personal Software Engineer yang membangun software praktis untuk membantu menyelesaikan masalah sehari-hari.' : 'Personal portfolio of a Software Engineer building practical software to help solve everyday problems.'} />
	<meta property="og:title" content="Ruang Kode — Software Engineer" />
	<meta property="og:description" content={$language === 'id' ? 'Software praktis untuk membantu menyelesaikan masalah sehari-hari.' : 'Practical software that helps solve everyday problems.'} />
</svelte:head>

<main id="home">
	<section class="hero shell">
		<div class="hero-copy">
			<div class="eyebrow"><span class="status-dot"></span> {t.eyebrow}</div>
			<h1>{t.heroTitle}</h1>
			<p class="hero-description">{t.heroDescription}</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#ruang-eksperimen">{t.primaryCta} <span>↘</span></a>
				<a class="text-link" href="#tentang">{t.secondaryCta} <span>↓</span></a>
			</div>
		</div>
		<div class="hero-visual" aria-label="Ilustrasi abstrak alur kode dan ide" role="img">
			<div class="visual-grid"></div>
			<div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
			<div class="core"><span>idea</span><b>→</b><span>build</span></div>
			<div class="float-card card-code"><span class="card-dot"></span> const curiosity = true;</div>
			<div class="float-card card-stack"><span>✳</span> always learning</div>
			<div class="visual-index">FIG. 01 <span>IDE → ITERATION</span></div>
			<div class="visual-caption">{t.visualCaption}</div>
		</div>
		<div class="hero-bottom"><span>{t.scroll}</span><span class="scroll-line"></span><span>01 — 06</span></div>
	</section>

	<section class="intro-band" id="tentang">
		<div class="shell intro-inner">
			<p class="section-index">{t.aboutIndex}</p>
			<div class="intro-content">
				<p class="intro-kicker">{t.aboutKicker}</p>
				<h2>{t.aboutTitle}</h2>
				<div class="intro-lower">
					<p>{t.aboutBody}</p>
					<a class="round-link" href="#ruang-eksperimen" aria-label={t.primaryCta}>↘</a>
				</div>
			</div>
		</div>
	</section>

	<section class="experiments-section shell" id="ruang-eksperimen">
		<div class="section-heading">
			<div><p class="section-index">{t.workIndex}</p><h2>{t.workTitle}<span class="accent-word">.</span></h2></div>
			<p class="section-aside">{t.workIntro}</p>
		</div>
		<div class="experiment-grid">
			{#each experiments as item, i}
				{@const project = t.projects[i]}
				<article class="experiment-card">
					<a class="experiment-link" href={whatsappUrl(t.whatsappMessage)} aria-label={`${t.contactCta}: ${project.title}`} target="_blank" rel="noreferrer">
						<div class="experiment-art {item.className}">
							<div class="art-topline"><span>0{i + 1} / {i === 0 ? 'PRODUCTIVITY' : i === 1 ? 'KNOWLEDGE' : 'OPERATIONS'}</span><span class="art-arrow">↗</span></div>
							{#if item.id === 0}
								<div class="flow-window"><div class="window-head"><i></i><i></i><i></i><span>my workspace</span></div><div class="flow-content"><div class="flow-side"><b>OVERVIEW</b><span>My tasks</span><span>Projects</span></div><div class="flow-main"><small>MONDAY, 09:41</small><b>Good morning<span>,</span><br />let's make progress.</b><div class="flow-bars"><i></i><i></i><i></i></div></div></div></div>
							{:else if item.id === 1}
								<div class="atlas-orbit"><span class="atlas-node node-a">JS</span><span class="atlas-node node-b">UI</span><span class="atlas-node node-c">DB</span><span class="atlas-center">STACK<br />ATLAS</span><i></i></div>
							{:else}
								<div class="inventory-ui"><div class="inventory-title"><span>stock / overview</span><b>+ Add item</b></div><strong>Inventory<br />at a glance<span>.</span></strong><div class="inventory-stats"><div><small>ITEMS</small><b>128</b></div><div><small>LOW STOCK</small><b>06</b></div><div><small>ORDERS</small><b>24</b></div></div></div>
							{/if}
							<span class="concept-stamp">{t.concept}</span>
						</div>
						<div class="experiment-meta"><div><p class="experiment-category">{project.category}</p><h3>{project.title}</h3></div><span class="experiment-number">0{i + 1}</span></div>
						<p class="experiment-description">{project.description}</p>
					</a>
				</article>
			{/each}
		</div>
		<div class="showcase-note"><span class="note-mark">✳</span><p>{t.showcaseNote}</p></div>
	</section>

	<section class="approach-section shell">
		<div class="approach-heading"><p class="section-index">{t.approachIndex}</p><h2>{t.approachTitle}</h2></div>
		<div class="principle-list">
			{#each t.principles as principle, i}
				<article class="principle-row"><span>0{i + 1}</span><div><h3>{principle.title}</h3><p>{principle.description}</p></div></article>
			{/each}
		</div>
	</section>

	<section class="stack-section" id="teknologi">
		<div class="shell stack-inner">
			<div class="stack-intro"><p class="section-index">{t.stackIndex}</p><h2>{t.stackTitle}</h2><p>{t.stackBody}</p></div>
			<div class="stack-display"><div class="stack-top"><span>TECH NOTES</span><span>SELECTED / 06</span></div><div class="stack-list">{#each stack as tech, i}<div class="stack-row"><span class="stack-count">0{i + 1}</span><span class="stack-name">{tech}</span><span class="stack-type">{i < 3 ? 'CORE TOOLING' : i === 3 ? 'CONTENT' : 'REFERENCE'}</span><span class="stack-symbol">↗</span></div>{/each}</div><p class="stack-footnote">{t.stackNote}</p></div>
		</div>
	</section>

	<section class="articles-section shell" id="artikel">
		<div class="section-heading">
			<div><p class="section-index">{t.articlesIndex}</p><h2>{t.articlesTitle}<span class="accent-word">.</span></h2></div>
			<a class="text-link" href="/artikel/">{t.articlesLink} <span>↗</span></a>
		</div>
		{#if data.articles.length}
			<div class="article-grid">
				{#each data.articles as article}
					<a class="article-card" href="/artikel/{article.slug}/">
						<div class="article-card-top"><span>{article.category}</span><span>↗</span></div>
						<h3>{article.title}</h3>
						<p>{article.excerpt}</p>
					<div class="article-date">{formatDateLabel(article.date, $language)}</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="article-empty"><span>✳</span><p>{t.articlesEmpty}</p><a href="/artikel/">{t.articlesOpen} <b>↗</b></a></div>
		{/if}
	</section>

	<section class="contact-section shell" id="kontak">
		<p class="section-index">{t.contactIndex}</p>
		<div class="contact-content"><p>{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><a class="button button-primary" href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noreferrer" aria-label={t.whatsappLabel}>{t.contactCta} <span>↗</span></a><p class="contact-phone">{t.whatsappPhone}</p></div>
		<div class="contact-decoration">K<span>.</span></div>
	</section>
</main>
