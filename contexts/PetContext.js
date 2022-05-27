import React, { useState, createContext } from "react";
import * as petService from "../services/pet";

const PetContext = createContext({});

// extrai o children em <AuthProdiver> children </AuthProvider>
// no children estarão as rotas definidas por Navigator e Screen
const PetProvider = ({ children }) => {
  const [pet, setPet] = useState(null);

  async function petList() {
    return await petService.petList();
  }

  async function petCreate(name) {
    return await petService.petCreate(name);
  }

  async function petRemove(idpet) {
    return await petService.petRemove(idpet);
  }

  function selectPet(pet) {
    return setPet(pet);
  }

  return (
    <PetContext.Provider
      value={{
        pet,
        selectPet,
        petList,
        petCreate,
        petRemove,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export { PetContext, PetProvider };
