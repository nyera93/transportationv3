import React from 'react'


const Qualification = (props) => (
<div class="tile is-parent">
  <article class="tile is-child notification is-light is-radiusless">
    <div class="content">
      <p class="title">Qualifications</p>
      <p class="subtitle">What you need...</p>
      <div class="content">
        <ul>
        {props.children}
        </ul>
              </div>
            </div>
          </article>
        </div>
      )
export default Qualification
