import React from "react"

function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.item.img}`} className="card--photo" />
      <div className="card--details">
        <div className="card--details--head">
          <i class="fa-solid fa-location-dot"></i>
          <p class="card--location">{props.item.location}</p>
          <a class="card--link" href="#">View on Google Maps</a>
        </div>
        <h1 className="card--heading">{props.item.place}</h1>
        <h5 className="card--date">{props.item.date}</h5>
        <p className="card--text">
          {props.item.text}
        </p>
      </div>
    </div>
  )
}

export default Card