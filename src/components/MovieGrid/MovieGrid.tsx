import type { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (!movies.length) return null;

  return (
    <ul className={styles.grid}>
      {movies.map(movie => {
        const posterUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image";

        return (
          <li key={movie.id} onClick={() => onSelect(movie)}>
            <div className={styles.card}>
              <img
                className={styles.image}
                src={posterUrl}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}