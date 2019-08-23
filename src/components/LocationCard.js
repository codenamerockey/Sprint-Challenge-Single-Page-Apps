import React from 'react';

export default function LocationCard(props) {
  console.log(props);
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">{props.location.name}</div>
          <div className="meta">{props.location.type}</div>
          <div className="description">{props.location.dimension}</div>
        </div>
      </div>
    </div>
  );
}
