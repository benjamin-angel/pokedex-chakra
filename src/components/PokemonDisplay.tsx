import React from 'react';
import { PokeApiResponse, PokemonResult } from '../interfaces/pokemon';

interface PokemonDisplayProps {
  results: PokemonResult[];
}

const PokemonDisplay: React.FC<PokemonDisplayProps> = ({ results }) => {
  return (
    <>
      {results.map((result, i) => (
        <p key={i}>{result.name}</p>
      ))}
    </>
  );
};

export default PokemonDisplay;
