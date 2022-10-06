import React from "react"

export default function Hero(){
    return(
        <section className="hero">
            <img src= {require("../images/hotel.png")} className="hero--photo"/>
            <h1 className="hero--header">Online Experienes</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind Hosts-all without leaving Home.</p>
        </section>
    )
}