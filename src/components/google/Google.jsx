import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Google({name}) {
  const googleApiKey = "AIzaSyCueSz4_g5-cVQlxfQQfddpbM3ANdf8SVo"
  const cx = "cx=5322dc57098bb4cd0"
  const googleApi = `https://www.googleapis.com/customsearch/v1?key=${googleApiKey}&${cx}&q=${formatName(name)}&searchType=image`
  const [image, setImage] = useState('')
  const noRenderImg = 'https://media.tenor.com/SshcJak1sYAAAAAj/star-wars-star.gif'
  const placeholderApi = 'blah'
  useEffect(() => {
    axios
    .get(googleApi)
    .then(response => {
      setImage(response.data.items[0].link)
    })
    .catch(error => {
      setImage(noRenderImg)
      // console.log(`here is ur error bro :3`,error)
    })
  }, [])
  
  function formatName(name) {
    return name.replaceAll(' ', '+')
  }


  return (
    <div>
      <img className={`index__${formatName(name)}_img`}src={image}></img>
      {/* <img src={noRenderImg}></img> */}
      {/* <script async src="https://cse.google.com/cse.js?cx=5322dc57098bb4cd0"></script>
      <div class="gcse-search"></div> */}
    </div>
  )
}
