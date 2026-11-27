<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import './app.css';
	import './content.css';
	import { copy, language, setLanguage, whatsappUrl } from '../lib/i18n';
	let menuOpen = $state(false);
	let { children }: { children: Snippet } = $props();

	onMount(() => {
		const saved = localStorage.getItem('ruangkode-language');
		if (saved === 'id' || saved === 'en') setLanguage(saved);
		else document.documentElement.lang = 'en';
	});
</script>

<svelte:head>
	<meta name="color-scheme" content="dark" />
</svelte:head>

<header class="site-header">
	<a class="brand" href="/#home" aria-label="Kembali ke awal">
		<span class="brand-mark">K</span>
		<span class="brand-name">ruang<span class="brand-light">kode</span></span>
	</a>
	<button
		class="menu-toggle"
		aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
		aria-expanded={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
	>
		<span></span><span></span>
	</button>
	<nav class:open={menuOpen} aria-label="Navigasi utama">
		<a href="/#tentang" onclick={() => (menuOpen = false)}>{copy[$language].nav.about}</a>
		<a href="/#ruang-eksperimen" onclick={() => (menuOpen = false)}>{copy[$language].nav.work}</a>
		<a href="/artikel/" onclick={() => (menuOpen = false)}>{copy[$language].nav.articles}</a>
		<a href="/#teknologi" onclick={() => (menuOpen = false)}>{copy[$language].nav.stack}</a>
		<div class="language-switch" role="group" aria-label="Choose language / Pilih bahasa">
			<button type="button" aria-pressed={$language === 'id'} onclick={() => setLanguage('id')}>ID</button>
			<button type="button" aria-pressed={$language === 'en'} onclick={() => setLanguage('en')}>EN</button>
		</div>
		<a class="nav-contact" href={whatsappUrl(copy[$language].home.whatsappMessage)} target="_blank" rel="noreferrer" aria-label={copy[$language].home.whatsappLabel}>{copy[$language].nav.contact} <span>↗</span></a>
	</nav>
</header>

{@render children()}

<footer class="site-footer">
	<a class="brand footer-brand" href="/#home"><span class="brand-mark">K</span><span class="brand-name">ruang<span class="brand-light">kode</span></span></a>
	<p>{copy[$language].home.footer} <span class="footer-spark">✳</span></p>
	<a href="/#home" class="back-top">{copy[$language].home.backTop} ↑</a>
</footer>
