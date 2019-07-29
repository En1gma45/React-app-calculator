import React from 'react';
import './App.css';
import Button from "./components/buttons";
import Input from "./components/input";
import Cbutt from "./components/Cbutt";
import PlMin from "./components/PlMin";
import Perc from "./components/Perc";

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done:"false",
      input:"",
      operator: "",
      prewNum:"",
      curNum:""
    };
  }

addDigit = value => {
  value=== "." && this.state.input === "" ? this.setState({input: 0 + value}) : this.setState({input: this.state.input + value})
  if (this.state.done === "true")
  {
    this.setState({input: ""+value, done: "false"});
  }
}

handleEqual = () =>{
  let a = parseFloat(this.state.prewNum);
  let b = parseFloat(this.state.input);
  //this.setState({curNum : this.state.input});
  this.setState({ input:  operators[this.state.operator](a, b)});
  this.setState({done: "true"});
}

plusMinus = () => {
  this.setState({ input: -this.state.input });
}

percents = () => {
  this.setState({ input: this.state.input /100});
}

handleOperator = (value) =>{
  this.setState({prewNum: this.state.input});
  this.setState({input: ""});

  value === "x" ? this.setState({operator: "*"}): this.setState({operator: value});
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
                <Button handleClick = {this.handleOperator}>/</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addDigit}>7</Button>
                <Button handleClick = {this.addDigit}>8</Button>
                <Button handleClick = {this.addDigit}>9</Button>
                <Button handleClick = {this.handleOperator} operator ="*">x</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addDigit}>4</Button>
                <Button handleClick = {this.addDigit}>5</Button>
                <Button handleClick = {this.addDigit}>6</Button>
                <Button handleClick = {this.handleOperator}>-</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addDigit}>1</Button>
                <Button handleClick = {this.addDigit}>2</Button>
                <Button handleClick = {this.addDigit}>3</Button>
                <Button handleClick = {this.handleOperator}>+</Button>
              </div>
              <div className="row">
                <Button handleClick = {this.addDigit}>0</Button>
                <Button handleClick = {this.addDigit}>.</Button>
                <Button handleClick = {this.handleEqual}>=</Button>
              </div>
          </div>
        </div>
      );
    }
  }

export default App;
