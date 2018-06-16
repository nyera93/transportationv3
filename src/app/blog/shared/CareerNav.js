import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'


const CareerNav = ({ props }) => (

  <div>
  <section>
        <nav class="tabs is-boxed is-centered is-medium">
          <div class="container">
            <ul>
            <NavLink
              className="navbar-item"
              to="/career"
              activeClassName="is-active"
            >Drivers</NavLink>
            <NavLink
              className="navbar-item"
              to="/mechanic"
              activeClassName="is-active"
            >Mechanics</NavLink>
            <NavLink
              className="navbar-item"
              to="/administration"
              activeClassName="is-active"
            >Administration</NavLink>
            </ul>
          </div>
        </nav>
        <br />
    </section>
    </div>
)
export default CareerNav
