import React from "react";

const CardAlert = (props) => {
    console.log(props.mesagges, props.title, props.text1)
    return (
        <card>
            <div>
                <h className="text">texto titulo: {props.title}</h>
            </div>
            <div>
                <p className="text">texto descriptivo : {props.text}</p>
            </div>
        </card>
    )
}
export default CardAlert;