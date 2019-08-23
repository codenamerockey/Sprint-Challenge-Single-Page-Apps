import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}
