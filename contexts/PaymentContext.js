import React, { createContext } from "react";
import * as paymentService from "../services/payment";

const PaymentContext = createContext({});

const PaymentProvider = ({ children }) => {
  async function paymentList(idpet) {
    return await paymentService.paymentList(idpet);
  }

  async function paymentCreate(idpet, description, value) {
    return await paymentService.paymentCreate(idpet, description, value);
  }

  async function paymentRemove(idpayment) {
    return await paymentService.paymentRemove(idpayment);
  }

  return (
    <PaymentContext.Provider
      value={{ paymentCreate, paymentList, paymentRemove }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
