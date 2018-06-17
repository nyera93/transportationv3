import React from 'react'
import Header from './layout/Header'
import PageHeader from './../components/PageHeader'
import Layout from './Layout'
import { Component } from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import Container from './utils/Container'
class Contact extends React.Component {
  render() {
    return (
      <Layout>

      <div>
      <PageHeader color="is-info" title="Contact">
      </PageHeader>
        <br/>
        <br/>
      </div>
      <div class="columns">
      <div class="column is-narrow is-5 is-offset-1">
      <div class="card">

    <div class="tile is-parent">
      <article class="tile is-child notification is-white">
        <p class="title"> Send us a Message</p>
        <p class="subtitle">We would love to hear from you!</p>
        <div class="content">

      <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"></input>
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
</div>
</div>
</article>
</div>
</div>
</div>
  <div class="column is-5">
  <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title"> Our Location</p>
        <p class="subtitle"></p>
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
    </div>
  </div>
  <div class="card-image">

    <Container google={this.props.google} />

 </div>
</div>
</div>
</div><br/>
      </Layout>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(Contact)
