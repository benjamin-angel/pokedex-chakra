import { Button, Center, Flex, Input, Select } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { PokemonDetailedResult } from '../interfaces/pokemon';
import PokemonModal from './PokemonModal';

interface SearchBarProps {
  handleNumPokemonSelected: (num: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleNumPokemonSelected }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonInformation, setPokemonInformation] =
    useState<PokemonDetailedResult>();
  const [openModal, setOpenModal] = useState(false);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleNumPokemonSelected(parseInt(e.target.value));
  };

  const onSubmit = async () => {
    if (!searchTerm) return;

    const searchResult: PokemonDetailedResult = await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLocaleLowerCase()}`
      )
      .then((response) => response.data)
      .catch((err: Error) =>
        console.log(`Error getting pokemon response: ${err.message}`)
      );

    if (!searchResult) return;

    setPokemonInformation(searchResult);
    setOpenModal(true);

    console.log('searchResult: ', searchResult);

    // //do something with search term
    // setSearchTerm('');
  };

  return (
    <Center>
      <Select
        onChange={(e) => onSelectChange(e)}
        w={'9vw'}
        fontSize='md'
        textAlign={'center'}
        defaultChecked
      >
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
      </Select>
      <Flex alignContent={'center'} flexDir={'row'} w={'50vw'}>
        <Input
          placeholder='Search Pokemon'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <Button onClick={() => onSubmit()}>Search</Button>
        {pokemonInformation ? (
          <PokemonModal
            pokemonInformation={pokemonInformation}
            openModal={openModal}
          />
        ) : (
          ''
        )}
      </Flex>
    </Center>
  );
};

export default SearchBar;
