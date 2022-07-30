import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="input"
        name="fullname"
        placeholder="Enter a Full Name"
        value={form.fullname}
        onChange={onChangeInput}
      />
      <input
        className="input"
        name="phone_number"
        placeholder="Enter a Phone Number"
        value={form.phone_number}
        onChange={onChangeInput}
      />
      <button className="button">Add New Contact</button>
    </form>
  );
}

export default Form;
