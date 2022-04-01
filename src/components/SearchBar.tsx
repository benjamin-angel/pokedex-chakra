import {
  Button,
  Center,
  Flex,
  Input,
  MenuOptionGroup,
  Select,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface SearchBarProps {
  handleNumPokemonSelected: (num: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleNumPokemonSelected }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleNumPokemonSelected(parseInt(e.target.value));
  };

  const onSubmit = () => {
    if (!searchTerm) return;

    //do something with search term

    setSearchTerm('');
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
      </Flex>
    </Center>
  );
};

export default SearchBar;
