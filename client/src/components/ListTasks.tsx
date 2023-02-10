import React from "react";
import { Task } from "../types";

interface Props {
  tasks: Task[];
}

const ListTasks = ({ tasks }: Props) => {
  return (
    <>
      {tasks.length < 1 ? (
        <div className="p-10 flex items-center justify-center flex-col space-y-2">
          <img
            className="w-36"
            src="https://res.cloudinary.com/dzqkt9qkx/image/upload/v1675456062/Personal/MiroodlesSticker_qofons.png"
            alt="Img Not Found"
          />
          <h2 className="text-lg font-bold text-gray-400">No hay tareas :(</h2>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Título</th>
                <th className="py-3 px-6 text-left">Descripción</th>
                <th className="py-3 px-6 text-center">Fecha</th>
                <th className="py-3 px-6 text-center">Estado</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {tasks.map((t, i) => {
                return (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={i}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="font-medium">{t.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span>{t.description}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span>{t.date}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                        Pendiente
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-blue-700 hover:scale-110 cursor-pointer" onClick={() => console.log(t)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div className="w-4 mr-2 transform hover:text-red-700 hover:scale-110 cursor-pointer" onClick={() => console.log(t)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ListTasks;
