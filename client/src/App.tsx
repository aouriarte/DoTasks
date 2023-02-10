import { useState, useEffect } from "react";
import { Task } from "./types";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import * as services from "./services/servicesTasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    services.getTasks().then(setTasks);
  }, []);

  return (
    <div className="max-w-full m-0 text-center">
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <h2 className="text-3xl font-bold text-black">DoTasks</h2>
            <span className="text-gray-800 p-4">
              Crea y controla el progreso de tus tareas.
            </span>
            <button
              className="p-2 border rounded-md transition bg-sky-500 hover:bg-sky-700 text-white"
              type="submit"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Crear tarea
            </button>
            {openModal && <AddTask closeModal={setOpenModal} />}
            <ListTasks tasks={tasks} closeModal={setOpenModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
