import React from "react";
import ReactDOM from "react-dom/client";
import TasksList from "./components/TasksList";
import "./assets/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TasksList />
    </React.StrictMode>
);
