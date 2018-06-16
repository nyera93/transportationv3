import React from 'react'



const CareerBenefit = (props) => (
<div>
<article class="tile is-child notification is-light is-radiusless">
<p class="title">Benefits</p>
<p class="subtitle">What we provide. </p>
<div class="content">
<ul className="benefit">
  {props.children}
</ul>
</div>
</article>
</div>

)
export default CareerBenefit
