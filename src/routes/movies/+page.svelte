<script>
    import { fly } from "svelte/transition";
    import Loader from "../../components/Loader.svelte";
    import PopularMovies from "../../components/PopularMovies.svelte";
    let loading = true;
    export let data;
    const movies = data ? JSON.parse(data.movies) : [];
    if (movies.length > 0) {
        loading = false;
    }
</script>
<h1 class="text-6xl font-bold text-center mt-10 mb-10" in:fly={{ y: -100, duration: 500 }}>Movies</h1>
<PopularMovies movies={movies} />