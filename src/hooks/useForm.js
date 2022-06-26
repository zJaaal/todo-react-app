import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);
  const reset = () => {
    setValues(initialValue);
  };
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value, //Access to the property of the object that has the name of the input
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
