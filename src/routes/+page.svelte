<script lang="ts">
	let foo = '<undefined>';

	const fetchFoo = async () => {
		const responseFoo = await fetch('/foo');
		foo = await responseFoo.text();
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => void fetchFoo()}> Fetch foo </button>

<p>Foo: {foo}</p>
