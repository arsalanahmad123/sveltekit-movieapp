<script>
  import { fly } from "svelte/transition"
    export let movie;
</script>
<div class="card w-96 bg-base-100 shadow-xl h-[500px]" in:fly={{ y: -100, duration: 500 }}>
    <figure class="overflow-hidden">
      <a href={"/movies/"+ movie.id}>
        <img class="w-full object-cover hover:scale-110 transition ease-in-out duration-500" src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt={movie.title} />
        </a>
    </figure>
  <div class="card-body">
    <h2 class="card-title">{movie.title}</h2>
    <p>{movie.overview.slice(0, 100, "...")}</p>
    <div class="card-actions justify-end">
      <a href={"/movies/"+ movie.id} class="btn btn-primary" >See Now</a>
    </div>
  </div>
</div>