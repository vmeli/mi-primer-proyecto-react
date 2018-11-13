import React, { Component } from 'react';

import styles from './index.scss';

class Home extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		conteo: 0,
  		fontColor: props.color || '#FFF'
  	};
  	this.actualiza = this.actualiza.bind(this);
  }

  actualiza() {
  	//let {conteo} = this.state;
  	//console.log("valor", conteo);
  	//this.setState({conteo: conteo + 1})
  }
  render() {
  	//let resultado = this.state.conteo,
  	//let fontColor  = this.state;

    return  <div>
    			<h1 className={`btn-primary ${styles.title}`}>Sandoor</h1>
				<img src="https://picsum.photos/200/200/?random" alt="img-random"/>
				<p>
					<button onClick={this.actualiza}>

					</button>
					<p>No debo mostrarme</p>
					{/*<div id="resulado" style={{}}> {resultado}</div> */}
				</p>
    		</div>
  }
}

export default Home
