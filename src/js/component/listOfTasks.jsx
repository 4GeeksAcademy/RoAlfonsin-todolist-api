import React from "react";
import ListElement from "./listElement";

function ListOfTasks(props){
    let myTasks = props.myTasks;

    return(
        <div>
            {myTasks.map((task) => {
                return <ListElement taskDescription = {task} key={task}/>
            }) }
        </div>
    );
}

export default ListOfTasks;