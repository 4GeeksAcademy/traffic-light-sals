import React from "react";
import { useState } from "react";
import "./trafficLight.css";

const TrafficLight = () => {

    const [color, setColor] = useState(null) 

    return (
        <>
            <div style={{backgroundColor: "black", width: "20px", height: "200px"}}></div>
                <div style={{backgroundColor: "black", width: "300px", height: "700px", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "column"}}>
                    <div onClick={()=>setColor("green")} className={color == "green" ? "light": ""} style={{backgroundColor: "green",  width: "200px", height: "200px" ,borderRadius: "50%"}}></div>
                    <div onClick={()=>setColor("yellow")} className={color == "yellow" ? "light": ""} style={{backgroundColor: "yellow",  width: "200px", height: "200px" ,borderRadius: "50%"}}></div>
                    <div onClick={()=>setColor("red")}  className={color == "red" ? "light": ""} style={{backgroundColor: "red",  width: "200px", height: "200px" ,borderRadius: "50%"}}></div>
                </div>
        </>
    )
};

export default TrafficLight;