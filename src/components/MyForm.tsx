import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};
const MyForm = ({ onSubmit }: MyFormProps) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit">Click</button>
    </form>
  );
};

export default MyForm;
