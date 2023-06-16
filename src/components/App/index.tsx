import React from 'react';
import { useFormContext } from '../FormContext';
import { Input } from '../Input';
import { mockedCharacter } from '../../../data/mock/character';

export function App() {
  const { setForm } = useFormContext();

  return (
    <>
      <div>
        <button onClick={() => setForm(mockedCharacter.character)}>
          Load mock data
        </button>
        Name: <Input id="name" />
        Strength: <Input id="ability_modifier_strength" />
      </div>
    </>
  );
}
