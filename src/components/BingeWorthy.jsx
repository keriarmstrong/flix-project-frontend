import React from 'react'
import { useState, useEffect } from 'react'
import bingeWorth from "../assets/bingeWorthy.png"

export default function BingeWorthy({show}) {

    const [binge, setBinge] = useState(false)
 

  useEffect(() => {
        if((show.num_episodes/show.num_seasons) >= "15"){
            setBinge(true)
        }else {
            setBinge(false)
        } 
    },[show.num_episodes, show.num_seasons])



  return (
    <div>
      {binge ? <img style={{width: "150%"}} src={bingeWorth} alt="bing worthy"/> : null}
    </div>
  )
}
