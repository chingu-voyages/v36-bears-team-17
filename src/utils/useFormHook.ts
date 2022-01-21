import { useState } from "react";

export const useFormHook = (initialState: any) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return { formState, handleChange };
};
