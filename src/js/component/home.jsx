import React from "react";
import ListElement from "./listElement";
import { useState } from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	function addTask(e){
		if (e.key == "Enter")
			if (newTask != ""){
				setTasks([...tasks, newTask]);
				setNewTask("");
			}
	}

	function erraseTask(e){
		if (e.target.type=="button"){
			let indexTask = parseInt(e.target.id);
			let newTasks = [];
			for (let index in tasks)
				if (indexTask != index)
					newTasks.push(tasks[index]);
			setTasks(newTasks);
		}
	}

	return (
		<div className="container">
			
			<div className="text-center">
				<h1 className="display-2 fst-italic text-center mt-5">todos</h1>
			</div>
			
			<div className="container-fluid">
				<input 
					type="text"
					className="form-control"
					placeholder="Enter New Task"
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					onKeyUp={addTask}
				/>
			</div>
			
			<div className="container-fluid" onClick={erraseTask}>
				<ListElement
					tasks={tasks}
				/>
			</div>
		
		</div>
	);
};

export default Home;
