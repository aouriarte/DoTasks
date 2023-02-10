import React, { useState } from "react";
import { Task } from "../types";
import * as services from "../services/servicesTasks";
import { useParams } from "react-router-dom";

// estados para el formulario
interface FormState {
  inputValues: Task;
}

interface FormProps {
  closeModal: any;
}

const AddTask = (props: FormProps) => {
  const params = useParams(); // https://youtu.be/wOLo-B7mrZM <- Para editar tarea con react-router-dom

  let date = new Date();
  const INITIAL_STATE = {
    title: "",
    description: "",
    date: date.toLocaleDateString(),
  };

  const [inputValues, setInputValues] =
    useState<FormState["inputValues"]>(INITIAL_STATE);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await services.createTask(inputValues);
    alert("Tarea creada con éxito :)");
    setInputValues(INITIAL_STATE);
    window.location.reload();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex w-full mt-2">
      <div className="mx-auto z-20 lg:w-1/4 md:w-1/3 sm:w-1/2">
        <div className="shadow-lg bg-white rounded-lg p-6">
          <div className="flex justify-end text-black">
            <button onClick={() => props.closeModal(false)}>X</button>
          </div>
          <form className="mt-2" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              value={inputValues.title}
              onChange={handleInputChange}
              placeholder="Título"
            />
            <textarea
              name="description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              cols={2}
              value={inputValues.description}
              onChange={handleInputChange}
              placeholder="Descripción"
            ></textarea>
            <div className="flex justify-center items-center block md:flex">
              {params.id ? (
                <button
                  type="submit"
                  className="rounded-md py-2 px-4 bg-sky-500 hover:bg-sky-700 text-white m-8"
                >
                  Actualizar
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-md py-2 px-4 bg-sky-500 hover:bg-sky-700 text-white m-8"
                >
                  Crear
                </button>
              )}

              <button
                type="submit"
                onClick={() => props.closeModal(false)}
                className="rounded-md py-2 px-4 bg-red-500 hover:bg-red-700 text-white m-8"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
