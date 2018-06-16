import React from 'react'
import CareerNav from './shared/CareerNav'
import CareerBenefit from './shared/CareerBenefit'
import Qualification from './shared/Qualification'
import Apply from './shared/Apply'
import Online from './shared/Online'
const CareerItem = (props) => (

  <div class="container has-background-white">
    <CareerNav to="/Career" />
      <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
      <div class="tile">
      <div class="tile is-parent is-vertical">
      <article class="tile is-child notification is-success is-radiusless">
            <p class="title">{props.title}</p>
            <p class="subtitle"></p>
          </article>
          <CareerBenefit>
            <li>fdsaljfkladsfjas</li>
            <li>fdsaljfkladsfjas</li>
          </CareerBenefit>
          </div>
          <Online></Online>
      </div>
          <Apply></Apply>
      </div>
          <Qualification>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
            <li>Ut non enim metus.</li>
          </Qualification>
        <br />
      </div>
    </div>
)
export default CareerItem
