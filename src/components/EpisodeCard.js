import React from 'react';

export default function EpisodeCard(props) {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.episode.name}</div>
          <div className="meta">{props.episode.air_date}</div>
          <div className="description">{props.episode.episode}</div>
        </div>
      </div>
    </div>
  );
}
