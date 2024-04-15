import React, { useRef, useState } from "react";

const App = () => {
  const [task, setTask] = useState([]);
  const taskRef = useRef();
  const dateRef = useRef();

  const handleAdd = () => {
    const newTask = taskRef.current.value;
    const newDate = dateRef.current.value;
    const updatedTask = [...task, { task: newTask, date: newDate }];
    setTask(updatedTask);
    console.log(updatedTask);
    taskRef.current.value = "";
    dateRef.current.value = "";
  };

  const handleDel = (i) => {
    const deltask = task.filter((item, idx) => {
      return i !== idx;
    });

    setTask(deltask);
    console.log(deltask);
  };
  return (
    <>
      <div className="flex flex-row gap-2">
        <input type="text" ref={taskRef} />
        <input type="text" ref={dateRef} />
        <button onClick={handleAdd}>Add</button>
      </div>

      {task.map((item, index) => {
        return (
          <div className="flex flex-row gap-2">
            <p>{item.task}</p>
            <p>{item.date}</p>
            <button onClick={() => handleDel(index)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default App;
