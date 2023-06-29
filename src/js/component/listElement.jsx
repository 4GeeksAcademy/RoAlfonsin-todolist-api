import React from "react";

function ListElement(props){
    const tasks = props.tasks;

    function showButton(Id){
        document.getElementById(Id).style.visibility = "visible";
    }

    function hideButton(Id){
        document.getElementById(Id).style.visibility = "hidden";
    }

    return(
        <ul className="list-group">
					{tasks.map((task, taskId) => {
						return(
                                <li className="list-group-item" key={taskId}>
                                    <div className="row" onMouseOver={function(){showButton(taskId)}} onMouseLeave={function(){hideButton(taskId)}}>
                                        <div className="col-10"><p className="m-0 p-2">{task}</p></div>
                                        <div className="col-2 d-flex justify-content-end">
                                            <button id={taskId} style={{visibility: "hidden"}} type="button" className="btn btn-danger">X</button>
                                        </div>
                                    </div>
                                </li>
                            );
					})}
		</ul>
    );
}

export default ListElement;