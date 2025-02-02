const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ name, index, tasks, setTasks }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const [updatedTask, setUpdatedTask] = React.useState(name);
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
    )
}
const TasksList = () => {
    const initialState = ['Задача 1', 'Задача 2', 'Задача 3']
    const [tasks, setTasks] = React.useState(initialState);
    const newTaskRef = React.useRef();
    const handleClickAdd = () => {
        const tasksCopy = [...tasks];
        tasksCopy.push(newTaskRef.current.value);
        setTasks(tasksCopy);
        newTaskRef.current.value = '';
    }
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Менеджер задач</h1>
            <div className="input-group mb-3">
                <input ref={newTaskRef} type="text" className="form-control" />
                <button className="btn btn-primary" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}  onClick={handleClickAdd}>Добавить задачу</button>
            </div>
            <div>
                { tasks.map((e, i) => <Task key={Math.random() + new Date()} name={e} index={i} tasks={tasks} setTasks={setTasks} />) }
            </div>
        </div>
    )
}
root.render(
    <>
        <TasksList />
    </>
);
