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
    date: "10/1/2023",
  },
  {
    title: "2da tarea",
    description: "Modularizar interfaces",
    date: "11/1/2023",
  },
];

function App() {
  const [tasks, setTasks] = useState<AppState["tasks"]>([]); // acá también podría utilizar directamente mi interfaz de mi estado inicial <Task[]>

  useEffect(() => {
    setTasks(InitialState);
  }, []);

  // 2 forma: guardar el dato del form
  const handleNewTask = (newTask: Task): void => {
    setTasks((tasks) => [...tasks, newTask]);
  };

  return (
    <div className="mmax-w-full m-0 p-8 text-center">
      {/* 1 forma: <AddTask onNewTask={setTasks} /> */}
      <AddTask onNewTask={handleNewTask} />
      <ListTasks tasks={tasks} />
    </div>
  );
}

export default App;
