<script>
    import { fly } from "svelte/transition";
  import MovieCard from "./MovieCard.svelte";
    export let movies;
</script>
<section class="flex flex-wrap justify-center items-center space-y-10 space-x-4" in:fly={{ y: 100, duration: 500 }} >
    {#each movies as movie (movie.id)}
        <MovieCard movie={movie}/>
    {/each}
</section>