import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_API_KEY;

interface FetchMoviesParams {
  query: string;
  page?: number;
}

interface FetchMoviesResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}

export async function fetchMovies(params: FetchMoviesParams): Promise<FetchMoviesResponse> {
  const response = await axios.get(`${API_URL}/search/movie`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}