<script>
    import { fly } from 'svelte/transition';
    export let data;
    const movie = data ? JSON.parse(data.movie) : {};
</script>

<div class="card w-[60%] h-[700px] glass mx-auto mt-12" in:fly={{ y: 100, duration: 500 }}>
  <figure class="overflow-hidden"><img class="w-full object-cover hover:scale-110 transition ease-in-out duration-500" src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="car!"/></figure>
  <div class="card-body">
    <h2 class="card-title">{movie.title}</h2>
    <p>{movie.overview}</p>
    <div class=" mt-4 flex flex-col space-y-3">
        <div class="flex justify-between items-center">
            <span class="font-bold">Release Date:</span>
            <span class="badge badge-ghost font-extrabold">{movie.release_date}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="font-bold">Rating:</span>
            <span class="badge badge-ghost font-extrabold">{movie.vote_average}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="font-bold">Runtime:</span>
            <span class="badge badge-ghost font-extrabold">{movie.runtime}mins</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="font-bold">Adult:</span>
            <span class="badge badge-ghost font-extrabold">{movie.adult}</span>
        </div>
    </div>
  </div>
</div>