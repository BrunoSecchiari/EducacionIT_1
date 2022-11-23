import React from 'react'

export default function Box(props) {

    console.log(props)
  
    return (
    <div key={props.id} className={props.class}>
        <div className="Box">
            <span>{props.name}</span>
        </div>
    </div>
  )
}
