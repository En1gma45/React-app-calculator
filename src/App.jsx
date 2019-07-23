import React from 'react';
import './App.css';
import Button from "./components/buttons";
import Input from "./components/input";
import Cbutt from "./components/Cbutt";
import PlMin from "./components/PlMin";
import Perc from "./components/Perc";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:"",
      oper: "",
      prewNum:"",
      curNum:""
    };
  }

addVal = val => {
  this.setState({input: this.state.input + val});
  if (val=== ".") this.setState({input: 0 + val})
}

handleEqual = () =>{
  this.state.curNum = this.state.input;
  this.setState({ input: eval(parseFloat(this.state.prewNum) + this.state.oper + parseFloat(this.state.curNum)) });
}

plusMinus = () => {
  this.setState({ input: this.state.input *(-1)});
}

percents = () => {
  this.setState({ input: this.state.input /100});
}

add = (val) =>{
  this.state.prewNum = this.state.input;
  this.setState({input: ""});

  val === "x" ? this.state.oper = "*": this.state.oper = val;
}
  render(){
      return (
        <div className="app">
          <div className="calc-wrapper">
            <Input input = {this.state.input} />
              <div className="row">
                <Cbutt handleClear = {() => this.setState({input:""})}>C</Cbutt>
                <PlMin handleClick = {this.plusMinus}>+-</PlMin>
                <Perc handleClick = {this.percents}>%</Perc>
                <Button handleClick = {this.add}>/</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addVal}>7</Button>
                <Button handleClick = {this.addVal}>8</Button>
                <Button handleClick = {this.addVal}>9</Button>
                <Button handleClick = {this.add}>x</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addVal}>4</Button>
                <Button handleClick = {this.addVal}>5</Button>
                <Button handleClick = {this.addVal}>6</Button>
                <Button handleClick = {this.add}>-</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addVal}>1</Button>
                <Button handleClick = {this.addVal}>2</Button>
                <Button handleClick = {this.addVal}>3</Button>
                <Button handleClick = {this.add}>+</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addVal}>0</Button>
                <Button handleClick = {this.addVal}>.</Button>
                <Button handleClick = {this.handleEqual}>=</Button>
              </div>
          </div>
        </div>
      );
    }
  }

export default App;
