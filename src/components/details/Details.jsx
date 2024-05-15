import axios from 'axios'
import React, {useState, useEffect} from 'react'
import './Details.scss'
export default function Details({people, index}) {
  const [selectedPerson, setSelectedPerson] = useState({})
  const swapi = 'https://swapi.dev/api/people'
  useEffect(() => {
    axios
    .get(swapi)
    .then((response) => {
      setSelectedPerson(response.data.results)
    })
    .catch((error) => {
      console.log('error', error)
    })
  }, [])

  return (
    <div className='details'>
      <div className='details__height'>{`${people[index].name} is ${people[index].height} cm`}</div>
      <div className='details__weight'>{`${people[index].name} is ${people[index].mass} kg`}</div>
      <div className='details__gender'>{`${people[index].name} gender is ${people[index].gender}`}</div>
    </div>
  )
}
