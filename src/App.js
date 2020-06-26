import React from 'react';
import './App.css';

// Import components
import Homepage from './components/Homepage';
import Board from './components/Board';
import Footer from './components/Footer';
import Nav from './components/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeBoard: false,
      rerendered: 0
    };
  }

  toggleBoard() {
    console.log(this.state.activeBoard);
    this.setState({
      activeBoard: !this.state.activeBoard,
      rerendered: this.state.rerendered + 1 
    });
    setTimeout(
      () => {
        console.log(this.state.activeBoard);
      }
      ,0
    )
  }

  render() {
    let activePage = this.state.activeBoard ? <Board/> : <Homepage toggleBoard={this.toggleBoard.bind(this)}/>
    
    return (
      <div className="App">
        <Nav toggleBoard={this.toggleBoard.bind(this)}/>
        {activePage}
        <Footer/>
      </div>    
    )
  }  
}


export default App;
