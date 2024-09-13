import React, { useState, useEffect } from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid columns={4} doubling>
      {characters.map((character) => (
        <Grid.Column key={character.id}>
          <Card
            onClick={() => onSelectCharacter(character)}
            image={character.image}
            header={character.name}
            meta={`Status: ${character.status}`}
            description={`Species: ${character.species}`}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default CharacterList;