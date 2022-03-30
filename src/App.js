import React, { Component } from 'react';
import cronometro from './assets/cronometro.png'
import './styles/styles.css';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      numero: 0,
      botao: "Iniciar"
    }

    this.timer=null;
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
  } 

  iniciar(){
    let state = this.state;

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Iniciar";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'Pausar';
    }
    this.setState(state);
  }

  zerar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = "Iniciar";
    this.setState(state);
  }


  render(){
    return (
      <div className='container'>
        <img src={cronometro} alt="Cronômetro" className='img' />
        <time className='timer'>{this.state.numero.toFixed(1)}</time>

        <div className='areaBtn'>
          <button type="button" className='botao' onClick={this.iniciar}>{this.state.botao}</button>
          <button type="button" className='botao' onClick={this.zerar}>Zerar</button>
        </div>

      </div>
    );
  }

}


export default App;
