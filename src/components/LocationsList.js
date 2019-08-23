import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';
export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setLocations(response.data.results);
        // console.log(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </section>
  );
}
