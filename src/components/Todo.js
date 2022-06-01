import React, { useState } from "react";
import "./Todo.css";

function Task({ task, index, completeTask, removeTask }) {
	return (
		<div
			className="task"
			style={{ textDecoration: task.completed ? "line-through" : "" }}
		>
			{task.title}
			<button onClick={() => completeTask(index)}>Complete</button>
			<button onClick={() => removeTask(index)}>Delete</button>
		</div>
	);
}

function Todo() {
	const [tasks, setTasks] = useState([
		{
			title: "Do your workout",
			completed: true,
		},
		{
			title: "Hangout with friends",
			completed: false,
		},
	]);
	const removeTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		console.log(tasks);
		setTasks(newTasks);
	};
	const completeTask = (index) => {
		const newTasks = [...tasks];
		if (newTasks[index].completed) {
			newTasks[index].completed = false;
		} else {
			newTasks[index].completed = true;
		}

		setTasks(newTasks);
	};
	const addTask = (title) => {
		const newTasks = [...tasks, { title, completed: false }];
		setTasks(newTasks);
	};
	tasks.map((task, index) => {
		console.log(task);
		console.log(index);
	});
	return (
		<div className="todo-container">
			<div className="header">TODO - ITEMS</div>
			<div className="tasks">
				{tasks.map((task, index) => (
					<Task
						task={task}
						index={index}
						completeTask={completeTask}
						removeTask={removeTask}
						key={index}
					/>
				))}
			</div>

			<div className="create-tast">
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
}

function CreateTask({ addTask }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		console.log(e);
		e.preventDefault();
		if (!value) return;

		addTask(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				placeholder="Add a new task"
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

export default Todo;
