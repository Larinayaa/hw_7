import React, { useState } from "react";

const Task = ({ name, index, tasks, setTasks }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(name);
    const [isCompleted, setIsCompleted] = useState(false);

    const textRef = React.useRef(); 

    const handleClickSave = () => {
        setUpdatedTask(textRef.current.value);
        setIsEdit(false);
    };

    const handleClickDelete = () => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    };

    return (
        <div className="task">
            <input 
                type="checkbox" 
                checked={isCompleted} 
                onChange={() => setIsCompleted(!isCompleted)} 
            />
            {isEdit ? (
                <>
                    <textarea ref={textRef} defaultValue={updatedTask}></textarea>
                    <button onClick={handleClickSave}>Сохранить</button>
                </>
            ) : (
                <p className={isCompleted ? "completed" : ""}>{updatedTask}</p>
            )}
            <span className={`status ${isCompleted ? "status-done" : "status-pending"}`}>
                {isCompleted ? "Выполнено" : "Не выполнено"}
            </span>
            <button onClick={() => setIsEdit(true)}>Редактировать</button>
            <button onClick={handleClickDelete}>Удалить</button>
        </div>
    );
};

export default Task;
