import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// react bootstrap button for register system
import { Button, ButtonToolbar } from 'react-bootstrap';
import Signup from './register/signup';
import LoginButton from './register/loginbutton';
import gateway from '../logo/gateway.png';


//Redux
import { loginUser, logoutUser } from '../../Redux/actions/userActions';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { addModalShowSignup: false}
  }

  handleLogout = () => {
    this.props.logoutUser();
  }


  render() {
    let addModalCloseSignup =() => this.setState({addModalShowSignup: false});

    const { authenticated } = this.props.user;

    const userLinks = (
      <li>
        <Link to="/" onClick={this.handleLogout}>Logout</Link>
      </li>
    );

    const guestLinks = (
      <LoginButton />
    );

    return (
        <header className="sansserif">

          <div className='logo'>
          <img src = {gateway} alt="Gateway" style={{width: '10%'}} />
          <div  style={{color: '#81C91D'}}>The Gateway</div>
          </div>

            <div>

          <nav>

            <ul  >

              <li className="first" >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Games">Games</Link>
              </li>
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>

              { authenticated ? userLinks: guestLinks }


              <li className="last">
                <ButtonToolbar>
                  <Button
                    variant = 'primary'
                    onClick={()=> this.setState({ addModalShowSignup: true})}>
                    Register
                  </Button>

                  <Signup
                    show={this.state.addModalShowSignup}
                    onHide={addModalCloseSignup}
                  />

                </ButtonToolbar>
              </li>

            </ul>
          </nav>

          </div>

        </header>
    );
  }
}


Header.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapActionsToProps = {
  loginUser,
  logoutUser
}

const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps, mapActionsToProps)(Header);
