import React from 'react'
import './CardNav.css'
import {useNavigate} from "react-router-dom"

const CardNav = (props) => {
    const navigate = useNavigate ();

    function goTo () {
        // const location = title.toLowerCase
        navigate (`/${props.location}`)
    }


  return (
    <div className='card'>
      <img src={props.link} alt="travel" />
      <button onClick={goTo}>{props.title}</button>
    </div>
  )
}

export default CardNav
