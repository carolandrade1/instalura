import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = React.useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = React.useState(true);

  React.useEffect(() => {
    if (values.usuario.length > 0) {
      setIsFormDisabled(false);
    } else {
      setIsFormDisabled(true);
    }
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    isFormDisabled,
  };
}
