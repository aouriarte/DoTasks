import { useState } from "react";
import styles from "../styles/AddTask.module.css";

const fecha = new Date();

const AddTask = () => {
  const [inputValues, setInputValues] = useState({
    date: fecha.toDateString(),
    title: "",
    description: "",
  });

  const handleSubmit = () => {};

  // Consejo: hacer hover para saber el tipo de elemento y agregarlo
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Título"
        name="title"
        onChange={handleChange}
        value={inputValues.title}
      />
      <textarea
        className={styles.textarea}
        name="description"
        placeholder="Crear una tarea..."
        onChange={handleChange}
        value={inputValues.description}
      ></textarea>
      <button className={styles.button} type="submit">
        Guardar
      </button>
    </form>
  );
};

export default AddTask;
