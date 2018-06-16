import React from 'react'



const Apply = (props) => (

<div class="tile is-parent">
  <article class="tile is-child notification is-light is-radiusless">
    <p class="title">Apply Now</p>
    <p class="subtitle">Choose one of the following:</p>
    <div class="content">
<div class="field is-grouped">
<p class="control">
<a class="button is-info is-radiusless">
  Apply with Indeed
</a>
</p>
<p class="control">
<a class="button is-link is-radiusless">Apply with LinkedIn</a>
</p>
</div>
<div class="file is-link has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume"></input>
    <span class="file-cta is-radiusless">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label is-info">
        Choose a file…
      </span>
    </span>
    <span class="file-name is-radiusless">
      Screen Shot 2017-07-29 at 15.54.25.png
    </span>
  </label>
</div>
</div>

  </article>
</div>

)
export default Apply
