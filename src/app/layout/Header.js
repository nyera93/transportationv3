import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {


    state = {
      isActive: false,
    }

    toggleNav = () => {
      this.setState(prevState => ({
        isActive: !prevState.isActive
      }))
    }

    render() {
      return (
        <nav className="navbar"
             aria-label="main navigation"
             style={{
               borderBottom: 'solid 1px #dddddd',
             }}>
        <div className="navbar-brand">
           <NavLink
             className="navbar-item"
             to="/"
             activeClassName="is-active"
           >
             <img
               style={{
                 borderTopLeftRadius: '50%',
                 borderTopRightRadius: '50%',
                 borderBottomLeftRadius: '50%',
                 borderBottomRightRadius: '50%',
                 marginRight: 15
               }}
               src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg"
               width="30px"
               alt="" />
             <span>Reliable Transportation</span>
           </NavLink>

             <button className="button navbar-burger" onClick={this.toggleNav}>
               <span></span>
               <span></span>
               <span></span>
             </button>
           </div>

           <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
             <div className="navbar-start">

             <div className="navbar-item has-dropdown is-hoverable-active-background-color is-info active-white">
             <NavLink
               className="navbar-item"
               to="/about"
               activeClassName="is-active background-color is-success">
                                              About
                                            </NavLink>
                             <div className="navbar-dropdown">
                               <a className="navbar-item">
                                 What do we do?
                               </a>
                               <hr className="navbar-divider" />
                               <a className="navbar-item">
                                 Where do we go?
                               </a>
                               <a className="navbar-item" >
                                 Why choose us?
                               </a>
                             </div>


                                           </div>
             <NavLink
               className="navbar-item"
               to="/career"
               activeClassName="is-active"
             >
                Careers
               </NavLink>

               <NavLink
                 className="navbar-item"
                 to="/contact"
                 activeClassName="is-active"
               >Contact
              </NavLink>


            <NavLink
               className="navbar-item"
               to="/track"
               activeClassName="is-active"
              ><br />
              <span className="icon " style={{ marginRight: 5 }}>
              <i className="fas fa-truck"></i></span>
              Track Order
              </NavLink>

            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="#">
                <span className="icon"style={{ color: '#0077B5' }}>
                <i className="fab fa-lg fa-facebook"></i>
               </span>
             </a>
             <a className="navbar-item" href="https://twitter.com/">
               <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                 <i className="fab fa-lg fa-twitter"></i>
               </span>
             </a>
             <a className="navbar-item" href="#">
               <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                 <i className="fab fa-lg fa-instagram"></i>
               </span>
             </a>

             <NavLink
             className="navbar-item"
             to="/quote"
             activeClassName="is-active"
             >
               <span className="icon" style={{ marginRight: 5 }}>
                <i className="fas fa-check-square has-text-success"></i>
               </span>
               Free Quote
             </NavLink>
           </div>
         </div>
       </nav>
     )
   }
  }

  export default Header
