import { useState, useRef } from "react";

const Task = ({ name, index, tasks, setTasks }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(name);
    const textRef = useRef(); 

    const handleClickSave = () => {
        setUpdatedTask(textRef.current.value);
        setIsEdit(false);
    };

    const handleClickDelete = () => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    };

    return isEdit ? (
        <>
            <textarea ref={textRef} defaultValue={updatedTask}></textarea>
            <button onClick={handleClickSave}>Сохранить</button>
        </>
    ) : (
        <>
            <p>{updatedTask}</p>
            <button onClick={() => setIsEdit(true)}>Редактировать</button>
            <button onClick={handleClickDelete}>Удалить</button>
        </>
    );
};

export default Task;
