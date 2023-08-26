import axios from "axios";

export const getAllMovies = async () => {
    await axios.get("/api/movies").then((res)=>res.data);
}


export const getMovieInfo = async(id: string) => {
    if(!id) return;

    return await axios.get(`/api/movies/${id}`).then((res) => res.data);
}