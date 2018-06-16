import React from 'react'
import Header from './layout/Header'
import PageHeader from './../components/PageHeader'
import Layout from './Layout'

class Quote extends React.Component {
  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="Free Quote">
      </PageHeader>
        <br/>
      </div>
      <div class="column is-6 is-offset-3">
      <div class="card">

    <div class="tile is-parent">
      <article class="tile is-child notification is-white">
        <p class="title"> Get A Free Quote</p>
        <p class="subtitle">Its easy and simple just fill out the below information and submit</p>
        <div class="content">
        <div class="field is-horizontal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="First Name"></input>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Last Name"></input>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>

          <br />
          <div class="field is-horizontal">
              <label class="label">Contact Info</label>
            </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Phone Number"></input>
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
     <p class="control is-expanded has-icons-left has-icons-right">
       <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com"></input>
       <span class="icon is-small is-left">
         <i class="fas fa-envelope"></i>
       </span>
       <span class="icon is-small is-right">
         <i class="fas fa-check"></i>
       </span>
     </p>
   </div>
 </div>
</div>

<div class="field is-horizontal">
    <label class="label">Location</label>
  </div>
<div class="field-body">
  <div class="field">
    <p class="control is-expanded has-icons-left">
      <input class="input" type="text" placeholder="Ship From"></input>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control is-expanded has-icons-left">
      <input class="input" type="text" placeholder="Ship To"></input>
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
    </p>
  </div>
</div>
<br />
<div class="field-body">
<div class="field">
  <label class="label">Truck Type</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select Truck Type</option>
        <option>Van</option>
        <option>Flatbed</option>
        <option>Refrigerated</option>
        <option>Power Only</option>
        <option>Steep Deck</option>
      </select>
    </div>
  </div>
</div>

  <div class="field">
  <label class="label">Quantity</label>
  <div class="control">
  <input class="input" type="tel" placeholder="Amount"></input>
  </div>
</div>
<div class="field">
<label class="label">Weight</label>
<div class="control">
<input class="input" type="tel" placeholder="Weight in lbs"></input>
</div>
</div>
</div>
<br />
<div class="field">
<label class="label">Pick Up Date</label>
<div class="control">
<input class="input" type="tel" placeholder="Select a date"></input>
</div>
</div>
<div class="field">
<label class="checkbox">
  <input type="checkbox"></input>
  Driver Assistance required at Origin
</label>
<br />
<label class="checkbox">
  <input type="checkbox"></input>
  Driver Assistance required at Destination
</label>
</div>
<div class="field">
  <div class="control">
    <button class="button is-success is-large">Get a Free Quote</button>
  </div>
</div>

</article>
</div>
</div>
</div>
<br />
      </Layout>
    )
  }
}
export default Quote
