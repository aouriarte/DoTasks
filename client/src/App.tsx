import { useEffect, useState } from "react";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";

import "./App.css";

// crear interfaz para mejorar manejo de estados
interface AppState {
  tasks: Task[]; // <Array<Task>>
}

const InitialState = [
  {
    title: "1ra nota",
    description: "No olvidar aprender portugúes",
    date: "Hace 10 minutos",
  },
  {
    title: "2da nota",
    description: "Ojalá funcione esto",
    date: "Hace 5 minutos",
  },
];

function App() {
  const [tasks, setTasks] = useState<AppState["tasks"]>([]); // acá también podría utilizar directamente mi interfaz de mi estado inicial <Task[]>

  useEffect(() => {
    setTasks(InitialState);
  }, []);

  return (
    <div className="App">
      <AddTask />
      <ListTasks tasks={tasks} />
    </div>
  );
}

export default App;
// min 50