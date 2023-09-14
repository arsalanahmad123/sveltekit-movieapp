<script>
  import { fade } from "svelte/transition";
</script>
<div class="mockup-window border border-base-300 mt-20 w-[90%] mx-auto bg-gradient-to-tr from-slate-800 to-slate-900 text-white" in:fade={{ y: 100, duration: 500 }}>
  <div class="flex justify-center px-4 py-16 border-t border-base-300 flex-col items-center">
    <h1 class="text-6xl font-bold text-slate-100">Welcome to Movies App</h1>
    <p class="text-xl text-slate-100 mt-10">
      Movies App is a website that allows you to search for movies
    </p>
    <p class="text-xl text-slate-100 mt-2">
      and add them to your watchlist
    </p>
    <a href="/movies" class="btn bg-slate-100 font-bold mt-5 hover:bg-slate-200">Get Started</a>
  </div>
</div>