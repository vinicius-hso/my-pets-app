import React, { createContext } from "react";
import * as medicineService from "../services/medicine";

const MedicineContext = createContext({});

const MedicineProvider = ({ children }) => {
  async function medicineList(idpet) {
    return await medicineService.medicineList(idpet);
  }

  async function medicineCreate(idpet, name) {
    return await medicineService.medicineCreate(idpet, name);
  }

  async function medicineRemove(idpet) {
    return await medicineService.medicineRemove(idpet);
  }

  return (
    <MedicineContext.Provider
      value={{ medicineCreate, medicineList, medicineRemove }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export { MedicineContext, MedicineProvider };
