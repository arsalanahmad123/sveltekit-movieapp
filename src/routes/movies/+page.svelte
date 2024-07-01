<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import PopularMovies from "../../components/PopularMovies.svelte";
    import { onMount } from "svelte";
    import { user } from "../../store/user";
    $: isloggedin = $user.isLoggedIn;
    function checkUser(){
        if(!isloggedin){
            goto('/account/login')
        }
    }
    onMount(checkUser)

    let loading = true;
    export let data;
    const movies = data ? JSON.parse(data.movies) : [];
    if (movies.length > 0) {
        loading = false;
    }
</script>
<h1 class="text-6xl font-bold text-center mt-10 mb-10 text-white" in:fly={{ y: -100, duration: 500 }}>Movies</h1>
<PopularMovies movies={movies} />