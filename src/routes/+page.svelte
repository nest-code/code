<script lang="ts">
	import type { PageData } from './$types';
	import { copy, formatDateLabel, language, whatsappUrl } from '../lib/i18n';
	import { technologyBands } from '../lib/technologies';
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
			<div class="stack-intro"><p class="section-index">{t.stackIndex}</p><h2>{t.stackTitle}</h2><p>{t.stackBody}</p><p class="stack-footnote">{t.stackNote}</p></div>
			<div class="technology-flow" aria-label={t.stackTitle}>
				<svg class="flow-lines" viewBox="0 0 1000 370" preserveAspectRatio="none" aria-hidden="true">
					<path d="M-20 78 C 110 15, 210 145, 340 78 S 570 18, 700 78 S 890 145, 1020 78" />
					<path d="M-20 185 C 110 122, 210 252, 340 185 S 570 125, 700 185 S 890 252, 1020 185" />
					<path d="M-20 292 C 110 229, 210 359, 340 292 S 570 232, 700 292 S 890 359, 1020 292" />
				</svg>
				{#each technologyBands as band, bandIndex}
					<div class="technology-lane lane-{bandIndex + 1}" aria-label={`Technology group ${bandIndex + 1}`}>
						<div class="technology-track" style={`--flow-duration: ${34 + bandIndex * 5}s; --flow-delay: ${-bandIndex * 7}s`}>
							{#each [0, 1] as duplicate}
								<div class="technology-group" aria-hidden={duplicate === 1}>
									{#each band as technology}
										<a class="technology-pill" href={technology.icon?.source ?? 'https://elysiajs.com/'} target="_blank" rel="noreferrer" tabindex={duplicate === 1 ? -1 : 0} aria-label={technology.name}>
											<span class="technology-logo" aria-hidden="true">
												{#if technology.icon}
													<svg viewBox="0 0 24 24" focusable="false"><path d={technology.icon.path} /></svg>
												{:else if technology.imageUrl}
													<img src={technology.imageUrl} alt="" loading="lazy" decoding="async" />
												{/if}
											</span>
											<span>{technology.name}</span>
										</a>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
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
