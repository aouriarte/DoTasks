import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTasks } from "../redux/actions";
import { StoreState } from "../redux/reducer";
import { Task } from "../types";

interface Props {
  // Tipado de mis props
  tasks: Task[]; // Array<Task>
  getAllTasks(): any;
}

const ListTasks = (props: Props) => {
  useEffect(() => {
    props.getAllTasks();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold pt-10">Lista de tareas</h2>
      {props.tasks.length < 1 ? (
        <>
          <br></br>
          <br></br>
          <h2>No hay tareas :(</h2>
          <br></br>
          <br></br>
        </>
      ) : (
        <ul className="flex flex-wrap justify-center">
          {props.tasks.map((t, i) => {
            return (
              <li
                key={i}
                className="rounded border border-solid border-inherit list-none m-5 w-80 pt-2 p-8 cursor-pointer bg-slate-700"
              >
                <span className="flex text-slate-400 text-xs ml-3 mb-5">
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

const mapStateToProps = (state: StoreState): { tasks: Task[] } => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { getAllTasks })(ListTasks);
