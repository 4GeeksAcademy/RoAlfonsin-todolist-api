import React from "react";
import { useState } from "react";
import ListOfTasks from "./listOfTasks";



//create your first component
const Home = () => {

	const [tasks, setTask] = useState(["a","b","c"]);

	function eraseTask(taskDescription){
		let new_tasks = [];
		for (let index in tasks){
			if (tasks[index] != taskDescription) new_tasks.push(tasks[index]);
		}
		setTask(new_tasks);
	}

	window.addEventListener("click", (e) => {
		if (e.target.type == "button"){
			let taskDescription = e.target.parentElement.parentElement.id;
			eraseTask(taskDescription);
			console.log(taskDescription);
		}
		
	});

	return (
		<div className="container">
			<div className="text-center">
				<h1 className="display-2 fst-italic text-center mt-5">todos</h1>
			</div>
			<div className="container-fluid">
				<ListOfTasks asks = {tasks}/>
			</div>
		</div>
	);
};

export default Home;
