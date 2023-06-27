import React from "react";

function ListElement(props){
    const taskDescription = props.taskDescription;
    const eraseButton = taskDescription + "Erase";

    function showButton(){
        document.getElementById(eraseButton).style.visibility = "visible";
    }

    function hideButton(){
        document.getElementById(eraseButton).style.visibility = "hidden";
    }

    return(
        <div className="row border" onMouseOver={showButton} onMouseLeave={hideButton} id= {taskDescription}>
            <div className="col-10">
                <p className="m-0 p-1 fs-3">{taskDescription}</p>
            </div>
            <div className="col-2 d-flex justify-content-end">
                <button type="button" className="btn btn-danger m-2" id = {eraseButton} style={{visibility: "hidden"}} >X</button>
            </div>
        </div>
    );
}

export default ListElement;