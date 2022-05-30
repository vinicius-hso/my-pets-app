import { AuthContext, AuthProvider } from "./AuthContext";
import { PetContext, PetProvider } from "./PetContext";
import { MedicineContext, MedicineProvider } from "./MedicineContext";
import { PaymentContext, PaymentProvider } from "./PaymentContext";

import { combineComponents } from "../utils/combineComponents";

const providers = [
  AuthProvider,
  PetProvider,
  MedicineProvider,
  PaymentProvider,
];

export {
  AuthContext,
  AuthProvider,
  PetContext,
  PetProvider,
  MedicineContext,
  MedicineProvider,
  PaymentContext,
  PaymentProvider,
};

export const AppContextProvider = combineComponents(...providers);
