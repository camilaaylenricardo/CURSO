import React from 'react';
import { Segment, Image, List } from 'semantic-ui-react';

const CharacterDetail = ({ character }) => {
  return (
    <Segment>
      <Image src={character.image} size="medium" floated="left" />
      <h2>{character.name}</h2>
      <List>
        <List.Item>
          <strong>Status:</strong> {character.status}
        </List.Item>
        <List.Item>
          <strong>Species:</strong> {character.species}
        </List.Item>
        <List.Item>
          <strong>Gender:</strong> {character.gender}
        </List.Item>
        <List.Item>
          <strong>Origin:</strong> {character.origin.name}
        </List.Item>
      </List>
    </Segment>
  );
};

export default CharacterDetail;