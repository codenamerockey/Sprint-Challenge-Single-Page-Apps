import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';
export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </section>
  );
}
