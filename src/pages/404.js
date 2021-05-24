import React from "react";

function goBack() {
    window.history.back();
    console.log("Test!");
}

export default () => (
<div style = {{top: "25%", position: "absolute", width: "100%", textAlign: "center"}}>
<h1>Sorry, this page does not exist.</h1> 
<button onClick={goBack}>Go back</button>
</div>
);
