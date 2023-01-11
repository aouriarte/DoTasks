import React from "react";
import styles from "../styles/ListTasks.module.css";

interface Props {
  // Tipado de mis props
  tasks: Array<{
    title: string;
    description: string | number;
    date: string;
  }>;
}

const ListTasks = ({ tasks }: Props) => {
  return (
    <div className={styles.tasks}>
      <h2>Lista de tareas</h2>
      {tasks.length < 1 ? (
        <>
          <br></br>
          <br></br>
          <h2>No hay tareas :(</h2>
          <br></br>
          <br></br>
        </>
      ) : (
        <ul className={styles.ul}>
          {tasks.map((t, i) => {
            return (
              <li key={i} className={styles.li}>
                <span className={styles.span}>{t.date}</span>
                <h4 className={styles.h4}>{t.title}</h4>
                <p className={styles.p}>{t.description}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListTasks;
