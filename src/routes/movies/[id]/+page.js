const MOVIE_API_KEY = "011a5850ce73e10e6c378c0c86ecf5bf"


export const load = async ({ fetch, params }) => {
    const id = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}&language=en-US&page=1`)
    const data = await res.json();
    const movie = JSON.stringify(data);
    return {
        movie
    }
}