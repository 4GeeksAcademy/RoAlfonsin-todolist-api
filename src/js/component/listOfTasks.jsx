import React from "react";
import ListElement from "./listElement";

function ListOfTasks(props){
    let myTasks = props.asks;

    return(
        <div>
            {myTasks.map((task) => {
                return <ListElement taskDescription = {task}/>
            }) }
        </div>
    );
}

export default ListOfTasks;