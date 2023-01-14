import { useEffect, useState } from "react";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import { Task } from "./types";

// crear interfaz para mejorar manejo de estados
interface AppState {
  tasks: Task[]; // <Array<Task>> -> la interface que importé
}

const InitialState = [
  {
    title: "1ra tarea",
    description: "No olvidar aprender portugués",
    date: "Tue Jan 10 2023",
  },
  {
    title: "2da tarea",
    description: "Modularizar interfaces",
    date: "Wed Jan 11 2023",
  },
];

function App() {
  const [tasks, setTasks] = useState<AppState["tasks"]>([]); // acá también podría utilizar directamente mi interfaz de mi estado inicial <Task[]>

  useEffect(() => {
    setTasks(InitialState);
  }, []);

  return (
    <div className="mmax-w-full m-0 p-8 text-center">
      <AddTask onNewTask={setTasks} />
      <ListTasks tasks={tasks} />
    </div>
  );
}

export default App;
