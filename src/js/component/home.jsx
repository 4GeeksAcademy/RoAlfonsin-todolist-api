import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [id, setId] = useState(0);

	window.addEventListener("keypress", (e) => {
		if (e.key == "Enter")
			console.log(e.key);
	});

	function form(){
		return (
			<input 
				type="text"
				className="form-control"
				placeholder="Enter New Task"
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
			/>
		);
	}

	return (
		<div className="container">
			<div className="text-center">
				<h1 className="display-2 fst-italic text-center mt-5">todos</h1>
			</div>
			<div className="container-fluid">
				{form()}
			</div>
			<div className="container-fluid">
				<ul className="list-group">
					{tasks.map(task => {
						return <li className="list-group-item" key={task[1]}> <ListElement taskDescription = {task[0]}/> </li>
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
