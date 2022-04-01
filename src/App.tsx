import { ChakraProvider, Box, theme, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PokemonDisplay from './components/PokemonDisplay';
import SearchBar from './components/SearchBar';
import { PokeApiResponse } from './interfaces/pokemon';

export const App = () => {
  const [pokemonObject, setPokemonObject] = useState<PokeApiResponse | null>(
    null
  );
  const [numPokemonSelected, setNumPokemonSelected] = useState(20);

  useEffect(() => {
    console.log('This still works');
    const getPokemonInfo = async () => {
      const pokemonResponse: PokeApiResponse = await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemonSelected}`)
        .then((response) => response.data)
        .catch((err: Error) =>
          console.log(`Error getting pokemon response: ${err.message}`)
        );

      if (!pokemonResponse) return;
      console.log('pokemonResponse: ', pokemonResponse);

      setPokemonObject(pokemonResponse);
    };

    getPokemonInfo();
  }, [numPokemonSelected]);

  const handleNumPokemonSelected = (num: number) => {
    setNumPokemonSelected(num);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <SearchBar handleNumPokemonSelected={handleNumPokemonSelected} />
        {pokemonObject ? (
          <PokemonDisplay results={pokemonObject.results} />
        ) : (
          ''
        )}
        <Button>Load More</Button>
      </Box>
    </ChakraProvider>
  );
};
