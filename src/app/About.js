import React from 'react'
import Header from './layout/Header'
import PageHeader from './../components/PageHeader'
import Layout from './Layout'

class About extends React.Component {
  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="About">
      Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
      </PageHeader>
        <br/>
      </div>
      <br />
      <p class="subtitle is-3 has-text-centered">Where do we ship?</p>
<br />
      <nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Canada</p>
      <figure class="image is-5by4">
       <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
      </figure>
      </div>
    </div>

  <div class="level-item has-text-centered">
    <div>
      <p class="heading">United States</p>
      <figure class="image is-4by3">
       <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
      </figure>
      </div>
    </div>

  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Mexico</p>
      <figure class="image is-5by4">
       <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
      </figure>
      </div>
    </div>

</nav>
<br />

<div class="container">
  <p class="subtitle is-3 has-text-centered">What services do we offer?</p>
  <br />
<div class="content has-text-centered is-medium">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
``  <br />
    <br />
  </div>
  <div class="columns">
  <div class="column is-4">
  <div class="card">

  <div class="card-image">
  <figure class="image is-4by3">
   <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
  </figure>
  </div>
  <div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title"> Dry Van</p>
      <p class="subtitle"></p>
    </div>
  </div>
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.

    <br />
  </div>
    <a class="button is-info">Learn More</a>
  </div>
  </div>
  </div>
<div class="column is-4">
<div class="card">

<div class="card-image">
<figure class="image is-4by3">
 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <p class="title"> Flatbed</p>
    <p class="subtitle"></p>
  </div>
</div>
<div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.

  <br />
</div>
  <a class="button is-info">Learn More</a>
</div>
</div>
</div>
<div class="column is-4">
<div class="card">

<div class="card-image">
<figure class="image is-4by3">
 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <p class="title"> Refrigerated</p>
    <p class="subtitle"></p>
  </div>
</div>
<div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.

  <br />
</div>
  <a class="button is-info">Learn More</a>
</div>
</div>
</div>
</div><br/>
<br />
  <br />
  <div class="columns">
  <div class="column is-4">
  <div class="card">

  <div class="card-image">
  <figure class="image is-4by3">
   <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
  </figure>
  </div>
  <div class="card-content">
  <div class="media">
    <div class="media-content">
      <p class="title"> Heavy Haul</p>
      <p class="subtitle"></p>
    </div>
  </div>
  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.

    <br />
  </div>
    <a class="button is-info">Learn More</a>
  </div>
  </div>
  </div>
<div class="column is-4">
<div class="card">

<div class="card-image">
<figure class="image is-4by3">
 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <p class="title"> Steep Deck</p>
    <p class="subtitle"></p>
  </div>
</div>
<div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.

  <br />
</div>
<a class="button is-info">Learn More</a>
</div>
</div>
</div>
<div class="column is-4">
<div class="card">

<div class="card-image">
<figure class="image is-4by3">
 <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
</figure>
</div>
<div class="card-content">
<div class="media">
  <div class="media-content">
    <p class="title"> Power Only</p>
    <p class="subtitle"></p>
  </div>
</div>
<div class="content">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
  <br />

</div>
    <a class="button is-info">Learn More</a>
</div>
</div>
</div>
</div><br/>
  <br />
    <p class="subtitle is-3 has-text-centered">Why choose us?</p>
    <div class="content has-text-centered is-medium">
      Dont take it from us, here are a few of our customers...
      <br />
        <br />
      <PageHeader color="is-light" title="Customers">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </PageHeader>
    </div>
  <br />
  </div>
      </Layout>
    )
  }
}
export default About
