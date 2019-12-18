import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Footer extends Component {
  render() {
    return (

      <footer className="sansserif">




        <div class="row" >
        <div class="col"  >Contact us: <p>thegateway@email.ie</p>
                                       <p> (045) 444 555</p>
                                       <p>Address: 27 Anfield Rd, Liverpool L4 0TF, United Kingdom</p>
        </div>
        <div class="col" >Best Games: <p> Minecraft</p>
                                      <p> Tetris</p>
                                      <p> Whack-A-Mole</p>

        </div>
        <div class="col" >
          <li className="center" >
              <Link to  ="/About" style={{color: '#ffffff'}}>About</Link>
          </li>
        </div>
        <div class="col" class="pl-1">Placeholder</div>
        <div class="col" >Placeholder</div>

        </div>

      </footer>

    );
  }
}

export default Footer;
