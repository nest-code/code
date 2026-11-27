<script lang="ts">
	import './app.css';
	import './content.css';
	let menuOpen = $state(false);
</script>

<svelte:head>
	<meta name="color-scheme" content="dark" />
</svelte:head>

<header class="site-header">
	<a class="brand" href="#home" aria-label="Kembali ke awal">
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
		<a href="#tentang" onclick={() => (menuOpen = false)}>Tentang</a>
		<a href="#ruang-eksperimen" onclick={() => (menuOpen = false)}>Ruang eksperimen</a>
		<a href="/artikel/" onclick={() => (menuOpen = false)}>Artikel</a>
		<a href="#teknologi" onclick={() => (menuOpen = false)}>Teknologi</a>
		<a class="nav-contact" href="mailto:hello@example.com">Mari terhubung <span>↗</span></a>
	</nav>
</header>

<slot />

<footer class="site-footer">
	<a class="brand footer-brand" href="#home"><span class="brand-mark">K</span><span class="brand-name">ruang<span class="brand-light">kode</span></span></a>
	<p>Dibuat dengan rasa ingin tahu <span class="footer-spark">✳</span></p>
	<a href="/admin/" class="admin-link">Admin ↗</a>
	<a href="#home" class="back-top">Kembali ke atas ↑</a>
</footer>
