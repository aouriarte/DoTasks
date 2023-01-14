import React, { useState } from "react";
import { Task } from "../types";

let fecha = new Date();

// estados para el formulario
interface FormState {
  inputValues: Task;
}

// 1 forma:
// interface FormProps {
//   onNewTask: React.Dispatch<React.SetStateAction<Task[]>>; // hacer hover sobre los errores
// }

// 2 forma: para no buscar el tipado de React.disp...
interface FormProps {
  onNewTask: (newTask: Task) => void; // hacer hover sobre los errores
}

const AddTask = ({ onNewTask }: FormProps) => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    date: fecha.toLocaleDateString(), // `Creado el ${fecha.toLocaleDateString()}`
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 1 forma:
    // onNewTask((tasks) => [...tasks, inputValues]);
    // 2 forma:
    onNewTask(inputValues);
    setInputValues({
      date: fecha.toLocaleDateString(),
      title: "",
      description: "",
    });
  };

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
    <div className="grid m-0 place-items-center">
      <form className="flex flex-col gap-1 w-80" onSubmit={handleSubmit}>
        <input
          className="pl-2"
          type="text"
          placeholder="Título"
          name="title"
          onChange={handleChange}
          value={inputValues.title}
        />
        <textarea
          className="pl-2"
          name="description"
          placeholder="Crear una tarea..."
          onChange={handleChange}
          value={inputValues.description}
        ></textarea>
        <button type="submit" className="bg-sky-500 hover:bg-sky-600">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddTask;
