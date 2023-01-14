import React from "react";
import { Task } from "../types";

interface Props {
  // Tipado de mis props
  tasks: Array<Task>; // Task[];
}

const ListTasks = ({ tasks }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold pt-10">Lista de tareas</h2>
      {tasks.length < 1 ? (
        <>
          <br></br>
          <br></br>
          <h2>No hay tareas :(</h2>
          <br></br>
          <br></br>
        </>
      ) : (
        <ul className="flex flex-wrap justify-center">
          {tasks.map((t, i) => {
            return (
              <li
                key={i}
                className="rounded border border-solid border-inherit list-none m-5 w-80 pt-2 p-8 cursor-pointer bg-slate-700"
              >
                <span className="flex text-slate-500 text-xs ml-3 mb-5">
                  {t.date}
                </span>
                <h4 className="text-lg">{t.title}</h4>
                <p>{t.description}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListTasks;
