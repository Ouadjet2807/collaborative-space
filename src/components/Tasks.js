import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GetTasksData } from "../data/GetTasksData";

export default function Tasks() {
  const [tasks, setTasks] = useState();
  const [addTaskModal, setAddTaskModal] = useState(false)

  const createTask = (type) => {
    setAddTaskModal(true)


  }

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(await GetTasksData());
    };
    fetchTasks();
  });
  return (
    <>
    {
        addTaskModal && 

        <div className="modal">
            
        </div>
    }
        <div className="tasks">
        <h1>Tasks</h1>

        <div className="actions">
            <div className="action">Create a new task</div>
            <div className="action"></div>
            <div className="action"></div>
            <div className="action"></div>
        </div>

        <div className="tasks_col">
            <div className="to_do">
            <div className="header">
                <h3>
                To Do{" "}
                <span>
                    ({tasks && tasks.filter((task) => task.type === "toDo").length})
                </span>
                </h3>
                <div className="add" onClick={() => createTask("todo")}>
                <FiPlus />
                </div>
            </div>
            {tasks &&
                tasks
                .filter((task) => task.type === "toDo")
                .map((item) => {
                    return (
                    <div className="task">
                        <h4>{item.title}</h4>
                        <span>{item.due_date}</span>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
            <div className="in_progress">
            <div className="header">
                <h3>
                In progress{" "}
                <span>
                    (
                    {tasks &&
                    tasks.filter((task) => task.type === "InProgress").length}
                    )
                </span>
                </h3>
                <div className="add" onClick={() => createTask("In progress")}>
                <FiPlus />
                </div>
            </div>
            {tasks &&
                tasks
                .filter((task) => task.type === "InProgress")
                .map((item) => {
                    return (
                    <div className="task">
                        <h4>{item.title}</h4>
                        <span>{item.due_date}</span>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
            <div className="in_review">
            <div className="header">
                <h3>
                In review{" "}
                <span>
                    (
                    {tasks &&
                    tasks.filter((task) => task.type === "InReview").length}
                    )
                </span>
                </h3>
                <div className="add" onClick={() => createTask("In review")}>
                <FiPlus />
                </div>
            </div>
            {tasks &&
                tasks
                .filter((task) => task.type === "InReview")
                .map((item) => {
                    return (
                    <div className="task">
                        <h4>{item.title}</h4>
                        <span>{item.due_date}</span>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
            <div className="done">
            <div className="header">
                <h3>
                Done{" "}
                <span>
                    ({tasks && tasks.filter((task) => task.type === "Done").length})
                </span>
                </h3>
                <div className="add" onClick={() => createTask("Done")}>
                <FiPlus />
                </div>
            </div>
            {tasks &&
                tasks
                .filter((task) => task.type === "Done")
                .map((item) => {
                    return (
                    <div className="task">
                        <h4>{item.title}</h4>
                        <span>{item.due_date}</span>
                        <p>{item.description}</p>
                    </div>
                    );
                })}
            </div>
        </div>
        </div>
    </>
  );
}
