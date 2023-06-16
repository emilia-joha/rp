import React, { useState, useContext, createContext } from 'react';

export const FormContext = createContext<Context>({
  form: {},
  setForm: null,
});

export function FormContextProvider({ children }) {
  const [form, setForm] = useState({});

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
}

type Context = {
  form: any;
  setForm: any;
};

export function useFormContext(): Context {
  return useContext(FormContext);
}
