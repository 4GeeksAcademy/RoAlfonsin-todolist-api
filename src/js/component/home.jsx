import React from "react";
import ListElement from "./listElement";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	useEffect(() =>{

		let getList = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			PARAMS: "NONE"
		};

		let createList = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([])
		};

		fetch("https://assets.breatheco.de/apis/fake/todos/user/roalfonsin", getList)
		.then( r => {
			return r.json();
		})
		.then(response => {
			if (response.msg == "This use does not exists, first call the POST method first to create the list for this username"){
				fetch("https://assets.breatheco.de/apis/fake/todos/user/roalfonsin", createList)
			}
			else{
				console.log(response);
				let myTasks = [];
				for (let index in response){
					myTasks.push(response[index].label);
				}
				setTasks(myTasks);
			}
		});

	},[])

	function addTask(e){

		if (e.key == "Enter")
			if (newTask != ""){
				let formatTasksForServer = [];
				for (let aTask in tasks){
					formatTasksForServer.push({label: tasks[aTask], done: false});
				}
				formatTasksForServer.push({label: newTask, done: false});
				let updateList = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formatTasksForServer)
				};
				console.log(updateList.body);
				fetch("https://assets.breatheco.de/apis/fake/todos/user/roalfonsin", updateList)
				.then (r => {
					return r.json();
				})
				.then (response => {
					console.log(response);
				});
				
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
			
			let formatTasksForServer = [];
			for (let aTask in newTasks){
				formatTasksForServer.push({label: tasks[aTask], done: false});
			}
			let updateList = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formatTasksForServer)
			};
			console.log(updateList.body);
			fetch("https://assets.breatheco.de/apis/fake/todos/user/roalfonsin", updateList)
			.then (r => {
				return r.json();
			})
			.then (response => {
				console.log(response);
			});		


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
