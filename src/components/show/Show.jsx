import React, {useEffect, useState} from 'react'
import Details from '../details/Details'
import './Show.scss'
export default function Show({people, index}) {
  const [selected, setSelected] = useState()
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setSelected(index)
    setShow(!show)
    // console.log('clicked')
    // console.log('selected', selected)
    // console.log('person', people[selected].name)
    // console.log('character Height', people[selected].height)
  }
  return (
    <div className='show'>
      <button className='show__btn' onClick={handleClick}>MORE INFO</button>
      <div className={show ? "display" : "hide"}>
        <Details people={people} index={index}/>
      </div>
    </div>
  )
}
