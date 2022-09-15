import React from "react";
import * as ReactDOM from "react-dom"

let counter = 0

function el()
{ 
    counter++;  
    const el = <div style={{color: "lightskyblue"}}><hr /><h1>The current time is {new Date().toLocaleTimeString()}, the current date is {new Date().getDate()}-{new Date().getMonth()}-{new Date().getFullYear()}</h1><hr /><h1>StopWatch started when page loaded, Which is {counter}</h1><hr /><h1>Reload to Refresh StopWatch</h1><hr /></div>
    ReactDOM.render(el, document.getElementById("root"))
    
}

setInterval(el, 1000)