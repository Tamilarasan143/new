import React from 'react'
import './circleavatar.css'

export default function CircleAvatar(props:any) {
  return (
    <div className="round">{props.children}</div>
  )
}
