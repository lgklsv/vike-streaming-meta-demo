import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Config } from "vike-react/Config";
import { Head } from "vike-react/Head";

export default function Page() {
  const query = useSuspenseQuery({
    queryKey: ["movies"],
    queryFn: () => fetch("https://star-wars.brillout.com/api/films.json").then((res) => res.json()),
  });

  const movies = query.data.results;

  return (
    <>
      <Config title={`${movies.length} Star Wars Movies`} />
      <Head>
        <meta name="description" content={`All ${movies.length} movies from the Star Wars franchise.`} />
      </Head>
      <h1>Star Wars Movies</h1>
      <ol>
        {movies.map((movie: { episode_id: string; title: string; release_date: string }) => (
          <li key={movie.episode_id}>
            {movie.title} ({movie.release_date})
          </li>
        ))}
      </ol>
      <p>
        Source: <a href="https://brillout.github.io/star-wars">brillout.github.io/star-wars</a>.
      </p>
    </>
  );
}
