import React from 'react';
import { useFormContext } from '../FormContext';

type Props = {
  id: string;
};

export function Input(props: Props) {
  const { form, setForm } = useFormContext();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.currentTarget.value;
    setForm({ ...form, [props.id]: val });
  }

  return <input type="text" value={form[props.id] || ''} onChange={onChange} />;
}
