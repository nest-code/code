<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	type Experiment = {
		id: string;
		title: string;
		category: string;
		description: string;
		className: string;
		label: string;
	};

	const experiments: Experiment[] = [
		{
			id: '01',
			title: 'Flow State',
			category: 'Product concept · Dashboard',
			description: 'Eksplorasi dashboard untuk membantu tim melihat pekerjaan, hambatan, dan ritme proyek dalam satu tempat.',
			className: 'flow-art',
			label: '01 / PRODUCTIVITY'
		},
		{
			id: '02',
			title: 'Stack Atlas',
			category: 'Knowledge concept · Tech library',
			description: 'Perpustakaan mini untuk menjelajahi teknologi, kegunaan, dan contoh ide sistem dengan sumber yang bisa ditelusuri.',
			className: 'atlas-art',
			label: '02 / KNOWLEDGE'
		},
		{
			id: '03',
			title: 'Tiny Inventory',
			category: 'System concept · Operations',
			description: 'Konsep sistem inventaris sederhana: mencatat barang, pergerakan stok, dan ringkasan kondisi operasional.',
			className: 'inventory-art',
			label: '03 / OPERATIONS'
		}
	];

	const stack = ['TypeScript', 'Svelte', 'Bun', 'Markdown', 'ElysiaJS', 'DrizzleORM'];
</script>

<svelte:head>
	<title>Ruang Kode — Software Engineer Playground</title>
	<meta name="description" content="Profil personal dan ruang eksperimen Software Engineer: konsep sistem, teknologi, dan catatan proses membangun produk digital." />
	<meta property="og:title" content="Ruang Kode — Software Engineer Playground" />
	<meta property="og:description" content="Sebuah ruang personal untuk belajar, bereksperimen, dan memamerkan ide sistem digital." />
</svelte:head>

<main id="home">
	<section class="hero shell">
		<div class="hero-copy">
			<div class="eyebrow"><span class="status-dot"></span> PERSONAL PLAYGROUND <span class="eyebrow-year">/ 2026</span></div>
			<h1>Membangun hal<br />kecil yang <span class="accent-word">berarti<span class="word-dot">.</span></span></h1>
			<p class="hero-description">Ruang personal seorang <strong>Software Engineer</strong> untuk bereksperimen dengan ide, teknologi, dan cara baru menyelesaikan masalah.</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#ruang-eksperimen">Jelajahi ruang ini <span>↘</span></a>
				<a class="text-link" href="#tentang">Kenali saya <span>↓</span></a>
			</div>
		</div>
		<div class="hero-visual" aria-label="Ilustrasi abstrak alur kode dan ide" role="img">
			<div class="visual-grid"></div>
			<div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
			<div class="core"><span>idea</span><b>→</b><span>build</span></div>
			<div class="float-card card-code"><span class="card-dot"></span> const curiosity = true;</div>
			<div class="float-card card-stack"><span>✳</span> always learning</div>
			<div class="visual-index">FIG. 01 <span>IDE → ITERATION</span></div>
			<div class="visual-caption">A space to make<br />ideas tangible.</div>
		</div>
		<div class="hero-bottom"><span>SCROLL UNTUK MENJELAJAH</span><span class="scroll-line"></span><span>01 — 04</span></div>
	</section>

	<section class="intro-band" id="tentang">
		<div class="shell intro-inner">
			<p class="section-index">01 <span>/ TENTANG</span></p>
			<div class="intro-content">
				<p class="intro-kicker">Halo, saya seorang <span>Software Engineer.</span></p>
				<h2>Ini adalah ruang untuk <em>berpikir dengan membuat.</em></h2>
				<div class="intro-lower">
					<p>Di sini saya mengumpulkan eksperimen, konsep produk, dan catatan belajar seputar teknologi. Setiap karya adalah cara untuk mengeksplorasi sebuah masalah dan kemungkinan solusinya.</p>
					<a class="round-link" href="#ruang-eksperimen" aria-label="Lihat ruang eksperimen">↘</a>
				</div>
			</div>
		</div>
	</section>

	<section class="experiments-section shell" id="ruang-eksperimen">
		<div class="section-heading">
			<div><p class="section-index">02 <span>/ SHOWCASE</span></p><h2>Ruang eksperimen<span class="accent-word">.</span></h2></div>
			<p class="section-aside">Ide sistem, antarmuka, dan solusi<br />yang sedang saya eksplorasi.</p>
		</div>
		<div class="experiment-grid">
			{#each experiments as item}
				<article class="experiment-card">
					<a class="experiment-link" href="mailto:hello@example.com?subject=Tentang%20{encodeURIComponent(item.title)}" aria-label="Diskusikan konsep {item.title}">
						<div class="experiment-art {item.className}">
							<div class="art-topline"><span>{item.label}</span><span class="art-arrow">↗</span></div>
							{#if item.id === '01'}
								<div class="flow-window"><div class="window-head"><i></i><i></i><i></i><span>my workspace</span></div><div class="flow-content"><div class="flow-side"><b>OVERVIEW</b><span>My tasks</span><span>Projects</span></div><div class="flow-main"><small>MONDAY, 09:41</small><b>Good morning<span>,</span><br />let's make progress.</b><div class="flow-bars"><i></i><i></i><i></i></div></div></div></div>
							{:else if item.id === '02'}
								<div class="atlas-orbit"><span class="atlas-node node-a">JS</span><span class="atlas-node node-b">UI</span><span class="atlas-node node-c">DB</span><span class="atlas-center">STACK<br />ATLAS</span><i></i></div>
							{:else}
								<div class="inventory-ui"><div class="inventory-title"><span>stock / overview</span><b>+ Add item</b></div><strong>Inventory<br />at a glance<span>.</span></strong><div class="inventory-stats"><div><small>ITEMS</small><b>128</b></div><div><small>LOW STOCK</small><b>06</b></div><div><small>ORDERS</small><b>24</b></div></div></div>
							{/if}
							<span class="concept-stamp">CONCEPT / PLAYGROUND</span>
						</div>
						<div class="experiment-meta"><div><p class="experiment-category">{item.category}</p><h3>{item.title}</h3></div><span class="experiment-number">{item.id}</span></div>
						<p class="experiment-description">{item.description}</p>
					</a>
				</article>
			{/each}
		</div>
		<div class="showcase-note"><span class="note-mark">✳</span><p><strong>Catatan:</strong> kartu di atas adalah konsep showcase awal, bukan klaim proyek klien atau riwayat kerja. Detailnya bisa diganti dengan eksperimen Anda sendiri.</p></div>
	</section>

	<section class="stack-section" id="teknologi">
		<div class="shell stack-inner">
			<div class="stack-intro"><p class="section-index">03 <span>/ TOOLKIT</span></p><h2>Alat untuk<br /><em>bereksplorasi.</em></h2><p>Teknologi yang menarik untuk dipelajari dan dicoba. Daftar ini adalah playground, bukan klaim pengalaman profesional.</p></div>
			<div class="stack-display"><div class="stack-top"><span>TECH NOTES</span><span>SELECTED / 06</span></div><div class="stack-list">{#each stack as tech, i}<div class="stack-row"><span class="stack-count">0{i + 1}</span><span class="stack-name">{tech}</span><span class="stack-type">{i < 3 ? 'CORE TOOLING' : i === 3 ? 'CONTENT' : 'REFERENCE'}</span><span class="stack-symbol">↗</span></div>{/each}</div><p class="stack-footnote">Catatan teknologi akan terus bertambah seiring eksperimen.</p></div>
		</div>
	</section>

	<section class="articles-section shell" id="artikel">
		<div class="section-heading">
			<div><p class="section-index">04 <span>/ CATATAN</span></p><h2>Ide yang ditulis<span class="accent-word">.</span></h2></div>
			<a class="text-link" href="/artikel/">Lihat semua artikel <span>↗</span></a>
		</div>
		{#if data.articles.length}
			<div class="article-grid">
				{#each data.articles as article}
					<a class="article-card" href="/artikel/{article.slug}/">
						<div class="article-card-top"><span>{article.category}</span><span>↗</span></div>
						<h3>{article.title}</h3>
						<p>{article.excerpt}</p>
						<div class="article-date">{article.dateLabel}</div>
					</a>
				{/each}
			</div>
		{:else}
			<div class="article-empty"><span>✳</span><p>Catatan dan artikel yang Anda publikasikan akan muncul di sini.</p><a href="/artikel/">Buka halaman artikel <b>↗</b></a></div>
		{/if}
	</section>

	<section class="contact-section shell" id="kontak">
		<p class="section-index">05 <span>/ NEXT STEP</span></p>
		<div class="contact-content"><p>ADA IDE MENARIK?</p><h2>Mari buat sesuatu<br /><em>yang berguna.</em></h2><a class="button button-primary" href="mailto:hello@example.com">Mulai percakapan <span>↗</span></a></div>
		<div class="contact-decoration">K<span>.</span></div>
	</section>
</main>
