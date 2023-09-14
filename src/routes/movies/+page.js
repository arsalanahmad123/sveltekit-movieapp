const MOVIE_API_KEY = "011a5850ce73e10e6c378c0c86ecf5bf"


export const load = async ({ fetch }) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=3&adult=true`)
    const data = await res.json();
    const movies = JSON.stringify(data.results);
    return {
        movies
    }
}