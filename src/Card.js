import React from "react";
import star from "./images/star.png"

export default function Card(props) {
    const src = require(`./images/${props.item.coverImg}`); // * Using images from the 'src' directory require you to use the 'require' function. 

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={src} alt={props.item.title} className="card-img"/>
            <div className="card-stats">
                <img src={props.item.starImg} className="card-star"/>
                <span>Rating: {props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p className="card-price"><span className="bold">From ${props.item.price}</span>/ person</p>
        </div>
    )
}
