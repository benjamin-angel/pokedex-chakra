import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { PokemonDetailedResult } from '../interfaces/pokemon';

interface PokemonModalProps {
  pokemonInformation: PokemonDetailedResult;
  openModal: boolean;
}

const PokemonModal: React.FC<PokemonModalProps> = ({
  pokemonInformation,
  openModal,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Drawer</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokemonModal;
