import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button } from 'semantic-ui-react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleBackToList = () => {
    setSelectedCharacter(null);
  };
  return (
    <Container style={{ marginTop: '20px' }}>
      <h1>Rick and Morty Characters</h1>
      {selectedCharacter ? (
        <div>
          <Button onClick={handleBackToList} primary>
            Back to List
          </Button>
          <CharacterDetail character={selectedCharacter} />
        </div>
      ) : (
        <CharacterList onSelectCharacter={handleCharacterSelect} />
      )}
    </Container>
  );
};

export default App;