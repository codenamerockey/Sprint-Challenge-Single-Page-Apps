import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CharacterCard = props => (
  <Card>
    <Image src={props.character.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.character.name}</Card.Header>
      <Card.Meta>
        <span className="date">{props.character.species}</span>
      </Card.Meta>
      <Card.Description>{props.character.location}</Card.Description>
      <Card.Description>{props.character.origin}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        Episodes
      </a>
    </Card.Content>
  </Card>
);

export default CharacterCard;
