//Extra Stretch goal

import React from 'react'

export default function RatingBreakdown({rating}) {
const stars = "⭐️".repeat(rating);

  return (

    <div>
   <span>{stars}</span>
    </div>
  )
}


