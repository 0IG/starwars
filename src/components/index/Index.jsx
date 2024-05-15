import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Google from '../google/Google'
import Show from '../show/Show'
import './Index.scss'
export default function Index() {
    const API = "https://swapi.dev/api/people"
    const [people, setPeople] = useState([])
    useEffect(() => {
        axios.get(API)
            .then(response => {
            setPeople(response.data.results)
            })
            .catch(error => {
            error.message(`here is ur error bro :3`,error)
            })
    }, [])
  return (
    <div className='index'>
            {people.map((person, index) => (
            <div key={index} className='index__container'>
            <div className='index__name'>{person.name}</div>
                <div className='index__googleImg'>
                    <Google name={person.name}/>
                    <Show people={people} index={index}/>
                </div>
            </div>
            ))}
    </div>
  )
}
