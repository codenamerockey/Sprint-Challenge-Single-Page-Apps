import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink, Switch } from 'react-router-dom';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
  return (
    <div className="ui tabular menu">
      <NavLink to="/" className="active item">
        Home
      </NavLink>
      <NavLink to="/character" className="item">
        Character
      </NavLink>
      <NavLink to="/location" className="item">
        Location
      </NavLink>
      <NavLink to="/episodes" className="item">
        Episode
      </NavLink>
    </div>
  );
}
