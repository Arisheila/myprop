import React from "react"

export default function Card(){
    return(
        <div className="card">
            <img src= {require("../images/activity1.png")} className="card--image"/>
            <div className="card-stats">
            <img src= {require("../images/star.png")} className="card--star" />
                <span className="gray">5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p>Company jogger with kash</p>
            <p><span className="bold">From $ 80 </span>/person</p>

        </div>
    )
}