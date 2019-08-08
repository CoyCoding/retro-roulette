import React from 'react';
//import {Link} from 'react-router-dom';
import './Header.scss';

function Header(props){
  console.log(props.isLoggedIn)
    return (
      props.isLoggedIn ?
      <div id="header">
        <a href="/logout">Logout</a>
      </div>
      : <></>
    );
}

// function isLoggedIn(){
//   console.log(localStorage.getItem('jwtToken'));
//   return localStorage.getItem('jwtToken');
// }

export default Header;
