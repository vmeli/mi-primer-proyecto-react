import React, { Component } from 'react';


import logo from '../static/logo.svg';

class Home extends Component {
  render() {
    return  <div>
    			<h1>Sandor</h1>
				<img src="https://picsum.photos/200/200/?random" alt="img-random"/>
    			<img src={logo} alt="logo"/>
    		</div>
  }
}

export default Home
